// Fontes consultadas em 19/11/2026. Dados públicos incorporados para funcionar também em file://.
interface PersonSource {
  image: string; alt: string; kind: string; author: string; license: string;
  licenseUrl: string; imageSource: string; position: string; bioSource: string; bioLabel: string;
}
const personSources: Record<string, PersonSource> = {
  "Dandara": {
    "image": "assets/portraits/dandara.svg",
    "alt": "Representação simbólica em SVG de uma mulher negra. Não é um retrato histórico de Dandara.",
    "kind": "Representação simbólica",
    "author": "Ilustração original do projeto Aquilombar",
    "license": "Criação do projeto",
    "licenseUrl": "",
    "imageSource": "",
    "position": "50% 35%",
    "bioSource": "https://www.multirio.rj.gov.br/index.php/leia/reportagens-artigos/reportagens/16845-dandara-e-a-luta-pela-liberdade",
    "bioLabel": "MultiRio · memória e historiografia"
  },
  "Luiz Gama": {
    "image": "assets/portraits/luiz-gama.jpg",
    "alt": "Fotografia de Luiz Gama.",
    "kind": "Fotografia",
    "author": "Autoria não identificada",
    "license": "Domínio público",
    "licenseUrl": "https://commons.wikimedia.org/wiki/File:Luiz_Gama.jpg#Licensing",
    "imageSource": "https://commons.wikimedia.org/wiki/File:Luiz_Gama.jpg",
    "position": "50% 30%",
    "bioSource": "https://www.letras.ufmg.br/literafro/autores/655-luiz-gama",
    "bioLabel": "UFMG · Literafro"
  },
  "Carolina Maria de Jesus": {
    "image": "assets/portraits/carolina-maria-de-jesus.png",
    "alt": "Fotografia de Carolina Maria de Jesus.",
    "kind": "Fotografia",
    "author": "Autoria não identificada · Arquivo Nacional / Fundo Correio da Manhã",
    "license": "Domínio público",
    "licenseUrl": "https://commons.wikimedia.org/wiki/File:Carolina_Maria_de_Jesus,_1960_(cropped).png#Licensing",
    "imageSource": "https://commons.wikimedia.org/wiki/File:Carolina_Maria_de_Jesus,_1960_(cropped).png",
    "position": "50% 30%",
    "bioSource": "https://carolinamariadejesus.ims.com.br/biografia/",
    "bioLabel": "Instituto Moreira Salles · biografia"
  },
  "Abdias do Nascimento": {
    "image": "assets/portraits/abdias-do-nascimento.jpg",
    "alt": "Fotografia de Abdias do Nascimento.",
    "kind": "Fotografia",
    "author": "Ricardo Stuckert/PR",
    "license": "CC BY 3.0 br",
    "licenseUrl": "https://creativecommons.org/licenses/by/3.0/br/deed.en",
    "imageSource": "https://commons.wikimedia.org/wiki/File:Abdias_do_Nascimento_close-up_(cropped).jpg",
    "position": "50% 30%",
    "bioSource": "https://ipeafro.org.br/personalidades/abdias-nascimento/",
    "bioLabel": "Ipeafro · biografia"
  },
  "Lélia Gonzalez": {
    "image": "assets/portraits/lelia-gonzalez.jpg",
    "alt": "Fotografia de Lélia Gonzalez.",
    "kind": "Fotografia",
    "author": "Cezar Loureiro",
    "license": "Domínio público",
    "licenseUrl": "https://commons.wikimedia.org/wiki/File:L%C3%A9lia_Gonzalez_by_Cezar_Loureiro.jpg#Licensing",
    "imageSource": "https://commons.wikimedia.org/wiki/File:L%C3%A9lia_Gonzalez_by_Cezar_Loureiro.jpg",
    "position": "56% 40%",
    "bioSource": "https://www.scielo.br/scielo.php?pid=S0104-93132022000300202&script=sci_arttext&tlng=pt",
    "bioLabel": "Mana / SciELO · pesquisa sobre sua trajetória"
  },
  "Milton Santos": {
    "image": "assets/portraits/milton-santos.jpg",
    "alt": "Fotografia de Milton Santos.",
    "kind": "Fotografia",
    "author": "TV Brasil",
    "license": "CC BY 3.0 br",
    "licenseUrl": "https://creativecommons.org/licenses/by/3.0/br/deed.en",
    "imageSource": "https://commons.wikimedia.org/wiki/File:Milton_Santos_(TV_Brasil).jpg",
    "position": "50% 30%",
    "bioSource": "https://miltonsantos.com.br/site/biografia/",
    "bioLabel": "Acervo Milton Santos · biografia"
  },
  "Conceição Evaristo": {
    "image": "assets/portraits/conceicao-evaristo.jpg",
    "alt": "Fotografia de Conceição Evaristo.",
    "kind": "Fotografia",
    "author": "Fora do Eixo",
    "license": "CC BY-SA 2.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0",
    "imageSource": "https://commons.wikimedia.org/wiki/File:ConceicaoEvaristo_(cropped).jpg",
    "position": "50% 32%",
    "bioSource": "https://www.letras.ufmg.br/literafro/autoras/188-conceicao-evaris",
    "bioLabel": "UFMG · Literafro"
  },
  "Tereza de Benguela": {
    "image": "assets/portraits/tereza-de-benguela.svg",
    "alt": "Representação simbólica em SVG de uma mulher negra. Não é um retrato histórico de Tereza de Benguela.",
    "kind": "Representação simbólica",
    "author": "Ilustração original do projeto Aquilombar",
    "license": "Criação do projeto",
    "licenseUrl": "",
    "imageSource": "",
    "position": "50% 35%",
    "bioSource": "https://www.historia.uff.br/impressoesrebeldes/pessoa/tereza-de-benguela/",
    "bioLabel": "UFF · Impressões Rebeldes"
  },
  "Maria Firmina dos Reis": {
    "image": "assets/portraits/maria-firmina-dos-reis.jpg",
    "alt": "Busto em homenagem a Maria Firmina dos Reis na Praça do Pantheon, em São Luís; não é um retrato feito em vida.",
    "kind": "Busto em homenagem",
    "author": "Ramsessantos",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "imageSource": "https://commons.wikimedia.org/wiki/File:Maria_firmina.jpg",
    "position": "50% 14%",
    "bioSource": "https://www.letras.ufmg.br/literafro/autoras/322-maria",
    "bioLabel": "UFMG · Literafro"
  },
  "André Rebouças": {
    "image": "assets/portraits/andre-reboucas.jpg",
    "alt": "Fotografia de André Rebouças.",
    "kind": "Fotografia",
    "author": "Autoria não identificada",
    "license": "Domínio público",
    "licenseUrl": "https://commons.wikimedia.org/wiki/File:Andre_rebou%C3%A7as_00.JPG#Licensing",
    "imageSource": "https://commons.wikimedia.org/wiki/File:Andre_rebou%C3%A7as_00.JPG",
    "position": "50% 30%",
    "bioSource": "https://pesquisaescolar.fundaj.gov.br/pt-br/artigo/andre-reboucas/",
    "bioLabel": "Fundação Joaquim Nabuco · Pesquisa Escolar"
  },
  "Machado de Assis": {
    "image": "assets/portraits/machado-de-assis.jpg",
    "alt": "Fotografia de Machado de Assis.",
    "kind": "Fotografia",
    "author": "Marc Ferrez · restauração de Adam Cuerden",
    "license": "Domínio público",
    "licenseUrl": "https://commons.wikimedia.org/wiki/File:Machado_de_Assis_by_Marc_Ferrez.jpg#Licensing",
    "imageSource": "https://commons.wikimedia.org/wiki/File:Machado_de_Assis_by_Marc_Ferrez.jpg",
    "position": "50% 15%",
    "bioSource": "https://acervo.museudalinguaportuguesa.org.br/referencias/pessoas/1780/machado-de-assis",
    "bioLabel": "Museu da Língua Portuguesa · biografia"
  },
  "João Cândido": {
    "image": "assets/portraits/joao-candido.jpg",
    "alt": "Fotografia de João Cândido.",
    "kind": "Fotografia",
    "author": "Gazeta de Notícias · edição de 31/12/1912",
    "license": "Domínio público",
    "licenseUrl": "https://commons.wikimedia.org/wiki/File:Gazeta_de_noticias_31-12-1912_02_(cropped).jpg#Licensing",
    "imageSource": "https://commons.wikimedia.org/wiki/File:Gazeta_de_noticias_31-12-1912_02_(cropped).jpg",
    "position": "50% 30%",
    "bioSource": "https://web.arquivoestado.sp.gov.br/exposicao_chibata/quem_foi_joao_candido.php",
    "bioLabel": "Arquivo Público do Estado de São Paulo"
  },
  "Sueli Carneiro": {
    "image": "assets/portraits/sueli-carneiro.png",
    "alt": "Fotografia de Sueli Carneiro.",
    "kind": "Fotografia",
    "author": "Marcus Steinmayer",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "imageSource": "https://commons.wikimedia.org/wiki/File:Sueli_Marcus_Steinmayer.png",
    "position": "50% 35%",
    "bioSource": "https://acervo.casasuelicarneiro.org.br/biografia",
    "bioLabel": "Casa Sueli Carneiro · acervo e biografia"
  },
  "Elza Soares": {
    "image": "assets/portraits/elza-soares.jpg",
    "alt": "Fotografia de Elza Soares.",
    "kind": "Fotografia",
    "author": "Ministério da Cultura",
    "license": "CC BY 2.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
    "imageSource": "https://commons.wikimedia.org/wiki/File:Elza_Soares.jpg",
    "position": "50% 15%",
    "bioSource": "https://www.gov.br/arquivonacional/pt-br/canais_atendimento/imprensa/noticias/serie-mulheres-e-o-arquivo-elza-soares",
    "bioLabel": "Arquivo Nacional · Mulheres e o Arquivo"
  },
  "Gilberto Gil": {
    "image": "assets/portraits/gilberto-gil.jpg",
    "alt": "Fotografia de Gilberto Gil.",
    "kind": "Fotografia",
    "author": "Produção Cultural no Brasil",
    "license": "CC BY-SA 2.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0",
    "imageSource": "https://commons.wikimedia.org/wiki/File:Gilberto_Gil_(5142820705)_(cropped).jpg",
    "position": "50% 30%",
    "bioSource": "https://gilbertogil.com.br/gilberto-gil/",
    "bioLabel": "Site oficial · trajetória"
  }
};
interface QuilombolaState {name: string; population: number; inTerritories: number; share: number;}
const quilombolaStates: Record<string, QuilombolaState> = {
  "11": {
    "name": "Rondônia",
    "population": 2925,
    "inTerritories": 221,
    "share": 0.18
  },
  "12": {
    "name": "Acre",
    "population": 0,
    "inTerritories": 0,
    "share": 0
  },
  "13": {
    "name": "Amazonas",
    "population": 2812,
    "inTerritories": 1231,
    "share": 0.07
  },
  "14": {
    "name": "Roraima",
    "population": 0,
    "inTerritories": 0,
    "share": 0
  },
  "15": {
    "name": "Pará",
    "population": 135603,
    "inTerritories": 44560,
    "share": 1.67
  },
  "16": {
    "name": "Amapá",
    "population": 12894,
    "inTerritories": 4909,
    "share": 1.76
  },
  "17": {
    "name": "Tocantins",
    "population": 13077,
    "inTerritories": 1328,
    "share": 0.87
  },
  "21": {
    "name": "Maranhão",
    "population": 269168,
    "inTerritories": 29142,
    "share": 3.97
  },
  "22": {
    "name": "Piauí",
    "population": 31786,
    "inTerritories": 8419,
    "share": 0.97
  },
  "23": {
    "name": "Ceará",
    "population": 23994,
    "inTerritories": 4609,
    "share": 0.27
  },
  "24": {
    "name": "Rio Grande do Norte",
    "population": 22371,
    "inTerritories": 3450,
    "share": 0.68
  },
  "25": {
    "name": "Paraíba",
    "population": 16765,
    "inTerritories": 2922,
    "share": 0.42
  },
  "26": {
    "name": "Pernambuco",
    "population": 78864,
    "inTerritories": 6769,
    "share": 0.87
  },
  "27": {
    "name": "Alagoas",
    "population": 37724,
    "inTerritories": 691,
    "share": 1.21
  },
  "28": {
    "name": "Sergipe",
    "population": 28163,
    "inTerritories": 12748,
    "share": 1.27
  },
  "29": {
    "name": "Bahia",
    "population": 397502,
    "inTerritories": 20771,
    "share": 2.81
  },
  "31": {
    "name": "Minas Gerais",
    "population": 135315,
    "inTerritories": 4576,
    "share": 0.66
  },
  "32": {
    "name": "Espírito Santo",
    "population": 15659,
    "inTerritories": 2793,
    "share": 0.41
  },
  "33": {
    "name": "Rio de Janeiro",
    "population": 20447,
    "inTerritories": 3500,
    "share": 0.13
  },
  "35": {
    "name": "São Paulo",
    "population": 11006,
    "inTerritories": 4076,
    "share": 0.02
  },
  "41": {
    "name": "Paraná",
    "population": 7113,
    "inTerritories": 648,
    "share": 0.06
  },
  "42": {
    "name": "Santa Catarina",
    "population": 4449,
    "inTerritories": 580,
    "share": 0.06
  },
  "43": {
    "name": "Rio Grande do Sul",
    "population": 17552,
    "inTerritories": 2617,
    "share": 0.16
  },
  "50": {
    "name": "Mato Grosso do Sul",
    "population": 2572,
    "inTerritories": 1145,
    "share": 0.09
  },
  "51": {
    "name": "Mato Grosso",
    "population": 11729,
    "inTerritories": 958,
    "share": 0.32
  },
  "52": {
    "name": "Goiás",
    "population": 30391,
    "inTerritories": 5106,
    "share": 0.43
  },
  "53": {
    "name": "Distrito Federal",
    "population": 305,
    "inTerritories": 0,
    "share": 0.01
  }
};
