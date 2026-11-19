"""Converte a malha oficial IBGE em SVG incorporado, sem chamadas de rede no site.

Fonte: https://servicodados.ibge.gov.br/api/v3/malhas/paises/BR
Parâmetros: formato=application/vnd.geo+json, qualidade=minima, intrarregiao=UF.
Uso opcional: python generate-map.py (requer brasil-uf.geojson ao lado).
"""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent
data = json.loads((ROOT / 'brasil-uf.geojson').read_text(encoding='utf-8'))
states = {
    '11': ('RO', 'Rondônia'), '12': ('AC', 'Acre'), '13': ('AM', 'Amazonas'),
    '14': ('RR', 'Roraima'), '15': ('PA', 'Pará'), '16': ('AP', 'Amapá'),
    '17': ('TO', 'Tocantins'), '21': ('MA', 'Maranhão'), '22': ('PI', 'Piauí'),
    '23': ('CE', 'Ceará'), '24': ('RN', 'Rio Grande do Norte'), '25': ('PB', 'Paraíba'),
    '26': ('PE', 'Pernambuco'), '27': ('AL', 'Alagoas'), '28': ('SE', 'Sergipe'),
    '29': ('BA', 'Bahia'), '31': ('MG', 'Minas Gerais'), '32': ('ES', 'Espírito Santo'),
    '33': ('RJ', 'Rio de Janeiro'), '35': ('SP', 'São Paulo'), '41': ('PR', 'Paraná'),
    '42': ('SC', 'Santa Catarina'), '43': ('RS', 'Rio Grande do Sul'),
    '50': ('MS', 'Mato Grosso do Sul'), '51': ('MT', 'Mato Grosso'),
    '52': ('GO', 'Goiás'), '53': ('DF', 'Distrito Federal'),
}

def polygons(feature):
    geom = feature['geometry']
    return [geom['coordinates']] if geom['type'] == 'Polygon' else geom['coordinates']

points = [p for f in data['features'] for polygon in polygons(f) for ring in polygon for p in ring]
xmin, xmax = min(p[0] for p in points), max(p[0] for p in points)
ymin, ymax = min(p[1] for p in points), max(p[1] for p in points)
scale = 550 / (xmax-xmin)
height = (ymax-ymin) * scale + 40

def project(point):
    return (20 + (point[0]-xmin)*scale, 20 + (ymax-point[1])*scale)

parts = [f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 590 {height:.1f}" role="group" aria-labelledby="map-title map-desc"><title id="map-title">Brasil: estados e Distrito Federal</title><desc id="map-desc">Mapa interativo da divisão estadual. Use Tab e Enter ou Espaço para selecionar uma unidade. A lista ao lado oferece a mesma seleção. Base geográfica: IBGE.</desc>']
labels = []
for feature in data['features']:
    code = feature['properties']['codarea']
    uf, name = states[code]
    paths = []
    for polygon in polygons(feature):
        for ring in polygon:
            coords = [project(point) for point in ring]
            paths.append('M'+'L'.join(f'{x:.1f},{y:.1f}' for x,y in coords)+'Z')
    attrs = f'class="map-state" data-code="{code}" role="button" tabindex="0" aria-pressed="false" aria-label="Selecionar {name}"'
    if code == '53':
        x,y = project([-47.8,-15.8])
        parts.append(f'<circle {attrs} cx="{x:.1f}" cy="{y:.1f}" r="5"><title>{name}</title></circle>')
    else:
        parts.append(f'<path {attrs} d="{"".join(paths)}"><title>{name}</title></path>')
    # Centroide da maior parte continental, para etiquetas de apoio.
    ring = max((p[0] for p in polygons(feature)), key=len)
    area = cx = cy = 0
    for a,b in zip(ring,ring[1:]):
        cross = a[0]*b[1]-b[0]*a[1]
        area += cross; cx += (a[0]+b[0])*cross; cy += (a[1]+b[1])*cross
    if area:
        x,y = project([cx/(3*area),cy/(3*area)])
        if code not in ['53','28','27','25','24','32','33']:
            labels.append(f'<text class="map-label" data-code="{code}" x="{x:.1f}" y="{y:.1f}" text-anchor="middle" aria-hidden="true">{uf}</text>')
parts.extend(labels)
parts.append('</svg>')
svg = ''.join(parts)
html_path = ROOT / 'index.html'
html = html_path.read_text(encoding='utf-8')
start = '<div id="brazil-map" class="brazil-map">'
before, rest = html.split(start,1)
_, after = rest.split('</div>',1)
html_path.write_text(before + start + svg + '</div>' + after, encoding='utf-8')
print(f'Mapa gerado: {len(data["features"])} unidades, {len(svg)} caracteres de SVG.')
