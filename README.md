# Aquilombar — memória, presença e futuro

Site estático de uma página sobre o Dia da Consciência Negra, em português do Brasil. Sem servidor de aplicação, fotos externas ou dependências em produção. Ilustrações em CSS/SVG; mapa derivado da malha oficial do IBGE.

## Abrir e editar

Abra **index.html** no navegador. Mantenha **style.css** e **script.js** na mesma pasta. A página funciona sem compilação; as fontes Google Fonts precisam de internet e têm alternativas locais.

O código-fonte é **script.ts** (TypeScript estrito). Para alterá-lo e gerar novamente o JavaScript:

```sh
npm ci
npm run build
```

Para uma prévia HTTP local, execute `npm run preview` e abra <http://127.0.0.1:8841>. Encerre com Ctrl+C. Em `file://`, a disponibilidade e a separação do localStorage variam entre navegadores; prefira a prévia HTTP para testar persistência.

## Publicar

- **GitHub Pages:** envie `index.html`, `style.css` e `script.js` para um repositório. Em **Settings → Pages**, escolha **Deploy from a branch**, a branch desejada e a pasta **/(root)**. Os caminhos relativos também funcionam em subpastas.
- **Netlify:** arraste uma pasta contendo esses três arquivos para a área de publicação manual. Não há comando de build. Se conectar o repositório e editar apenas TypeScript, use `npm run build` e diretório de publicação `.`.

## Conteúdo e dados

As fontes estão no rodapé. Os quatro indicadores `[XX%]` e os dados de cada UF são **placeholders intencionais**. Antes de preenchê-los, consulte as edições mais recentes/revisadas do IBGE e registre ano, tabela, recorte e link. Localidades, comunidades e territórios não são a mesma unidade. Os comentários `<!-- VERIFICAR -->` assinalam etimologias ou origens sem consenso. Não há números estatísticos inventados.

O SVG do mapa já está incorporado ao HTML. O utilitário opcional `generate-map.py` permite regenerá-lo a partir de `brasil-uf.geojson`, obtido na [API de malhas do IBGE](https://servicodados.ibge.gov.br/api/docs/malhas?versao=3), com país `BR`, `intrarregiao=UF`, `qualidade=minima` e formato GeoJSON. Não é necessário para abrir ou publicar.

## Mural e privacidade

Mensagens e tema são salvos somente no **localStorage do navegador atual**, por origem (protocolo, domínio e porta). O mural não é compartilhado; limpar os dados do navegador apaga as mensagens. O limite é de 30 mensagens de até 180 caracteres. Cada mensagem pode ser removida. Se o armazenamento estiver bloqueado, o site explica que a mensagem dura apenas a visita.

Para um mural compartilhado, substitua a leitura e gravação locais por uma coleção do **Firebase/Firestore** ou tabela no **Supabase**. Configure validação, regras de acesso, limites de envio e moderação. Nunca coloque chaves administrativas no JavaScript público. O gerador de PNG funciona localmente, sem enviar a frase a um servidor.

## Acessibilidade

HTML semântico, foco visível, links de salto, botões nativos nos cards, seleção de UF alternativa ao mapa, abas com setas/Home/End e suporte a `prefers-reduced-motion`. A paleta original está nas variáveis CSS; os tons auxiliares de texto asseguram contraste AA nos temas claro e escuro. Banner de 20/11 baseado na data local do visitante.
