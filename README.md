# Aquilombar — memória, presença e futuro

Site estático de uma página sobre o Dia da Consciência Negra, em português do Brasil. Sem servidor de aplicação ou dependências em produção. Ilustrações em CSS/SVG, fotografias licenciadas armazenadas localmente e mapa derivado da malha oficial do IBGE.

## Abrir e editar

Abra **index.html** no navegador. Mantenha **style.css**, **script.js**, **assets/** e **data/** na mesma pasta. A página funciona sem compilação; as fontes Google Fonts precisam de internet e têm alternativas locais.

O código-fonte está em **script.ts** e **content-data.ts** (TypeScript estrito). O segundo arquivo contém as referências, os créditos e o retrato estatístico incorporado. Para alterá-los e gerar novamente o JavaScript:

```sh
npm ci
npm run build
```

Para uma prévia HTTP local, execute `npm run preview` e abra <http://127.0.0.1:8841>. Encerre com Ctrl+C. Em `file://`, a disponibilidade e a separação do localStorage variam entre navegadores; prefira a prévia HTTP para testar persistência.

## Publicar

- **GitHub Pages:** publique os três arquivos da página junto com as pastas `assets/` e `data/`. Em **Settings → Pages**, escolha **Deploy from a branch**, a branch desejada e a pasta **/(root)**. Os caminhos relativos também funcionam em subpastas.
- **Vercel:** importe este repositório e escolha a branch `codex/aquilombar`, com o diretório raiz do projeto em `.`. O arquivo `vercel.json` define **Other**, instalação com `npm ci`, build com `npm run build` e saída em **dist**. O build inclui as imagens, os créditos e os dados; não é preciso iniciar um servidor ou definir variáveis de ambiente.
- **Netlify:** para publicação manual, arraste a pasta `dist/` gerada pelo build. Se conectar o repositório, use `npm run build` e diretório de publicação `dist`.

## Conteúdo e dados

Os indicadores usam a **3ª edição de Desigualdades Sociais por Cor ou Raça no Brasil**, divulgada pelo IBGE em 18/11/2026, com dados de 2025. O mapa usa o **Censo 2022, segunda apuração, SIDRA 9578**, consultado em 19/11/2026. Os dados estão incorporados ao JavaScript e registrados em [data/quilombolas-censo-2022.json](data/quilombolas-censo-2022.json). Os links e recortes aparecem na página; veja também [FONTES.md](FONTES.md).

Pessoas, comunidades e territórios não são a mesma unidade. O mapa apresenta pessoas quilombolas por UF e pessoas quilombolas em territórios oficialmente delimitados, sem chamar esses números de quantidade de comunidades. Os comentários `<!-- VERIFICAR -->` permanecem nas etimologias ou origens historicamente debatidas.

Cada personalidade tem referências biográficas e créditos da imagem. As 12 fotografias, a foto do busto de Maria Firmina e as duas representações simbólicas estão em `assets/portraits/`; veja [IMAGE_CREDITS.md](IMAGE_CREDITS.md). Não há fotografia histórica conhecida sendo substituída por retrato imaginado sem identificação: Dandara e Tereza estão expressamente sinalizadas como representações simbólicas, e Maria Firmina como busto em homenagem.

O SVG do mapa já está incorporado ao HTML. O utilitário opcional `generate-map.py` permite regenerá-lo a partir de `brasil-uf.geojson`, obtido na [API de malhas do IBGE](https://servicodados.ibge.gov.br/api/docs/malhas?versao=3), com país `BR`, `intrarregiao=UF`, `qualidade=minima` e formato GeoJSON. Não é necessário para abrir ou publicar.

## Mural e privacidade

Mensagens e tema são salvos somente no **localStorage do navegador atual**, por origem (protocolo, domínio e porta). O mural não é compartilhado; limpar os dados do navegador apaga as mensagens. O limite é de 30 mensagens de até 180 caracteres. Cada mensagem pode ser removida. Se o armazenamento estiver bloqueado, o site explica que a mensagem dura apenas a visita.

Para um mural compartilhado, substitua a leitura e gravação locais por uma coleção do **Firebase/Firestore** ou tabela no **Supabase**. Configure validação, regras de acesso, limites de envio e moderação. Nunca coloque chaves administrativas no JavaScript público. O gerador de PNG funciona localmente, sem enviar a frase a um servidor.

## Acessibilidade

HTML semântico, foco visível, links de salto, botões nativos nos cards, seleção de UF alternativa ao mapa, abas com setas/Home/End e suporte a `prefers-reduced-motion`. A paleta original está nas variáveis CSS; os tons auxiliares de texto asseguram contraste AA nos temas claro e escuro. Banner de 20/11 baseado na data local do visitante.
