"use strict";
const personSources = {
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
const quilombolaStates = {
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
/* Aquilombar: código-fonte TypeScript. Gere script.js com npm run build. */
(() => {
    'use strict';
    const $ = (selector) => {
        const element = document.querySelector(selector);
        if (!element)
            throw new Error(`Elemento ausente: ${selector}`);
        return element;
    };
    const $$ = (selector) => Array.from(document.querySelectorAll(selector));
    const escapeHTML = (value) => value.replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
    const normalize = (value) => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('pt-BR');
    const storage = {
        get(key) { try {
            return localStorage.getItem(key);
        }
        catch {
            return null;
        } },
        set(key, value) { try {
            localStorage.setItem(key, value);
            return true;
        }
        catch {
            return false;
        } }
    };
    // Navegação, tema e data: usa o dia local do visitante, sem solicitações de rede.
    const themeButton = $('#theme-toggle');
    function setTheme(theme) {
        document.documentElement.dataset.theme = theme;
        themeButton.setAttribute('aria-label', theme === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro');
        $('meta[name="theme-color"]').setAttribute('content', theme === 'dark' ? '#1A1410' : '#F5EDE0');
    }
    setTheme(storage.get('aquilombar-theme') === 'light' ? 'light' : 'dark');
    themeButton.addEventListener('click', () => {
        const theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
        setTheme(theme);
        storage.set('aquilombar-theme', theme);
    });
    const menuButton = $('#menu-toggle');
    const menu = $('#explore-menu');
    function closeMenu() { menu.hidden = true; menuButton.setAttribute('aria-expanded', 'false'); }
    menuButton.addEventListener('click', () => {
        menu.hidden = !menu.hidden;
        menuButton.setAttribute('aria-expanded', String(!menu.hidden));
    });
    menu.addEventListener('click', event => { if (event.target.closest('a'))
        closeMenu(); });
    document.addEventListener('click', event => {
        if (!menu.contains(event.target) && !menuButton.contains(event.target))
            closeMenu();
    });
    document.addEventListener('keydown', event => {
        if (event.key === 'Escape' && !menu.hidden) {
            closeMenu();
            menuButton.focus();
        }
    });
    document.addEventListener('focusin', event => {
        if (!menu.hidden && !$('.nav-shell').contains(event.target))
            closeMenu();
    });
    const today = new Date();
    $('#day-banner').hidden = !(today.getMonth() === 10 && today.getDate() === 20);
    const headerObserver = new ResizeObserver(() => {
        document.documentElement.style.setProperty('--header-height', `${$('.site-header').getBoundingClientRect().height}px`);
    });
    headerObserver.observe($('.site-header'));
    let scrollPending = false;
    function readingProgress() {
        const remaining = document.documentElement.scrollHeight - window.innerHeight;
        const ratio = remaining > 0 ? Math.min(1, Math.max(0, window.scrollY / remaining)) : 0;
        $('#reading-progress').style.transform = `scaleX(${ratio})`;
        $('#back-to-top').hidden = window.scrollY < 700;
        scrollPending = false;
    }
    window.addEventListener('scroll', () => {
        if (!scrollPending) {
            scrollPending = true;
            requestAnimationFrame(readingProgress);
        }
    }, { passive: true });
    window.addEventListener('resize', readingProgress);
    new ResizeObserver(readingProgress).observe(document.body);
    // Marcos históricos: mantém a ordem cronológica ao filtrar.
    function activateChips(group, value) {
        group.querySelectorAll('button').forEach(button => {
            const active = button.dataset.filter === value;
            button.classList.toggle('active', active);
            button.setAttribute('aria-pressed', String(active));
        });
    }
    $('#timeline-filters').addEventListener('click', event => {
        const button = event.target.closest('button[data-filter]');
        if (!button)
            return;
        const category = button.dataset.filter;
        activateChips($('#timeline-filters'), category);
        let count = 0;
        $$('#timeline-list li').forEach(item => {
            item.hidden = category !== 'todos' && item.dataset.category !== category;
            if (!item.hidden) {
                count++;
                item.classList.add('visible');
            }
        });
        $('#timeline-count').textContent = `${count} marcos na linha do tempo`;
    });
    const people = [
        { name: 'Dandara', initials: 'D', area: 'Resistência histórica', bio: 'Figura da memória de Palmares, Dandara simboliza a participação das mulheres negras na resistência à escravização. Os registros sobre sua vida são escassos; memória coletiva e documentação histórica precisam ser lidas com cuidado.' },
        { name: 'Luiz Gama', initials: 'LG', area: 'Política e ativismo', bio: 'Poeta, jornalista e abolicionista, conquistou a própria liberdade e atuou no campo jurídico em defesa de pessoas escravizadas. Fez da escrita e do conhecimento das leis instrumentos de transformação social.' },
        { name: 'Carolina Maria de Jesus', initials: 'CJ', area: 'Literatura', bio: 'Escritora de Quarto de despejo, registrou o cotidiano da favela do Canindé, em São Paulo. Sua obra reúne observação social, invenção literária e uma voz que ultrapassa os limites impostos à sua origem.' },
        { name: 'Abdias do Nascimento', initials: 'AN', area: 'Política e ativismo', bio: 'Artista, escritor e ativista, fundou o Teatro Experimental do Negro em 1944. Sua atuação na arte, na política e no pensamento colocou a valorização da população negra no centro do debate público.' },
        { name: 'Lélia Gonzalez', initials: 'LG', area: 'Ciência e pensamento', bio: 'Intelectual e ativista, articulou reflexões sobre racismo, sexismo e cultura brasileira. Seu conceito de amefricanidade ajuda a pensar as experiências negras e indígenas nas Américas.' },
        { name: 'Milton Santos', initials: 'MS', area: 'Ciência e pensamento', bio: 'Geógrafo brasileiro, investigou o espaço, a urbanização e os efeitos desiguais da globalização. Recebeu o Prêmio Vautrin Lud em 1994 e produziu ferramentas para compreender o território a partir de quem o vive.' },
        { name: 'Conceição Evaristo', initials: 'CE', area: 'Literatura', bio: 'Romancista, contista e poeta, constrói narrativas atravessadas pela experiência de mulheres negras. A ideia de escrevivência aproxima criação literária, memória e vivências coletivas.' },
        { name: 'Tereza de Benguela', initials: 'TB', area: 'Resistência histórica', bio: 'Liderou o Quilombo do Quariterê, na região do atual Mato Grosso, no século XVIII. Sua memória reconhece o protagonismo de mulheres negras na organização de comunidades autônomas.' },
        { name: 'Maria Firmina dos Reis', initials: 'MF', area: 'Literatura', bio: 'Escritora e professora maranhense, publicou o romance Úrsula em 1859. A obra denuncia a escravidão e dá espaço à perspectiva e à humanidade de personagens negros.' },
        { name: 'André Rebouças', initials: 'AR', area: 'Ciência e pensamento', bio: 'Engenheiro e abolicionista, participou de projetos de infraestrutura no Brasil. Defendeu a ligação entre liberdade e acesso à terra, pensando condições materiais para a vida após a abolição.' },
        { name: 'Machado de Assis', initials: 'MA', area: 'Literatura', bio: 'Escritor negro, autor de romances como Memórias póstumas de Brás Cubas e Dom Casmurro. Foi um dos fundadores e o primeiro presidente da Academia Brasileira de Letras.' },
        { name: 'João Cândido', initials: 'JC', area: 'Resistência histórica', bio: 'Marinheiro conhecido como Almirante Negro, liderou a Revolta da Chibata em 1910. A mobilização enfrentou os castigos corporais impostos aos marinheiros, em grande parte negros.' },
        { name: 'Sueli Carneiro', initials: 'SC', area: 'Ciência e pensamento', bio: 'Filósofa, escritora e ativista, é uma das fundadoras de Geledés — Instituto da Mulher Negra. Sua produção articula feminismo negro, direitos humanos e crítica às estruturas do racismo.' },
        { name: 'Elza Soares', initials: 'ES', area: 'Música', bio: 'Cantora de voz singular, atravessou o samba e outras sonoridades com inventividade. Em diferentes fases da carreira, cantou a experiência das mulheres, a vida nas periferias e o enfrentamento ao racismo.' },
        { name: 'Gilberto Gil', initials: 'GG', area: 'Música', bio: 'Cantor, compositor e instrumentista, é uma das vozes centrais da música brasileira e do tropicalismo. Sua obra aproxima tradições afro-brasileiras, experimentação e diálogo com o mundo; também foi ministro da Cultura.' }
    ];
    let personArea = 'todos';
    let personQuery = '';
    function renderPeople() {
        const visible = people.filter(person => (personArea === 'todos' || person.area === personArea) && normalize(person.name).includes(normalize(personQuery)));
        $('#people-count').textContent = `${visible.length} ${visible.length === 1 ? 'trajetória encontrada' : 'trajetórias encontradas'}`;
        $('#people-grid').innerHTML = visible.length ? visible.map((person, i) => {
            const color = ['#2F5D3A', '#773B25', '#51432B', '#3B4C43'][i % 4];
            const reference = personSources[person.name];
            const kind = reference.kind === 'Fotografia' ? '' : `<span class="portrait-kind">${escapeHTML(reference.kind)}</span>`;
            const sourceLink = reference.imageSource ? `<a href="${escapeHTML(reference.imageSource)}" target="_blank" rel="noopener noreferrer">Arquivo original</a> · ` : '';
            const license = reference.licenseUrl ? `<a href="${escapeHTML(reference.licenseUrl)}" target="_blank" rel="noopener noreferrer">${escapeHTML(reference.license)}</a>` : escapeHTML(reference.license);
            return `<article class="person-entry"><button class="person-card" aria-pressed="false" aria-label="Conhecer a história de ${escapeHTML(person.name)}. ${escapeHTML(reference.kind)}."><span class="person-inner"><span class="person-front"><span class="portrait-art" style="--person-color:${color};--portrait-position:${reference.position}"><img src="${reference.image}" alt="${escapeHTML(reference.alt)}" width="640" height="640" loading="lazy" decoding="async">${kind}</span><span class="person-caption"><strong>${person.name}</strong><small>${person.area}</small><span class="flip-icon" aria-hidden="true">+</span></span></span><span class="person-back" aria-hidden="true"><strong>${person.name}</strong><span class="person-bio">${person.bio}</span><small>Toque para voltar</small></span></span></button><details class="person-reference"><summary>Fontes e imagem</summary><p><a href="${escapeHTML(reference.bioSource)}" target="_blank" rel="noopener noreferrer">${escapeHTML(reference.bioLabel)}</a></p><p class="portrait-credit">${escapeHTML(reference.author)}<br>${sourceLink}${license}</p>${reference.kind !== 'Fotografia' ? `<p>${escapeHTML(reference.alt)}</p>` : ''}</details></article>`;
        }).join('') : '<p class="empty-state">Nenhum nome encontrado. Experimente outra busca ou outra área.</p>';
    }
    $('#people-filters').addEventListener('click', event => {
        const button = event.target.closest('button[data-filter]');
        if (!button)
            return;
        personArea = button.dataset.filter;
        activateChips($('#people-filters'), personArea);
        renderPeople();
    });
    $('#people-search').addEventListener('input', event => { personQuery = event.target.value; renderPeople(); });
    // Botões nativos já suportam Enter e Espaço, sem duplicar eventos de teclado.
    $('#people-grid').addEventListener('click', event => {
        const button = event.target.closest('.person-card');
        if (!button)
            return;
        const flipped = button.getAttribute('aria-pressed') !== 'true';
        button.setAttribute('aria-pressed', String(flipped));
        button.querySelector('.person-front').setAttribute('aria-hidden', String(flipped));
        button.querySelector('.person-back').setAttribute('aria-hidden', String(!flipped));
        const name = button.querySelector('strong').textContent;
        button.setAttribute('aria-label', flipped ? `${name}. ${button.querySelector('.person-bio').textContent} Toque para voltar.` : `Conhecer a história de ${name}. ${personSources[name].kind}.`);
    });
    const words = [
        { word: 'cafuné', meaning: 'Carinho feito com os dedos na cabeça de alguém.', origin: 'Provavelmente do quimbundo; a etimologia não é consensual.', verify: true },
        { word: 'caçula', meaning: 'A pessoa mais nova entre irmãos ou de um grupo.', origin: 'Quimbundo, kasule / kasula.' },
        { word: 'dengo', meaning: 'Carinho, afeto ou um jeito de pedir aconchego.', origin: 'Origem discutida entre fontes; a atribuição a uma língua africana precisa ser verificada.', verify: true },
        { word: 'moleque', meaning: 'Menino, no sentido de origem. No Brasil, também adquiriu usos depreciativos e racializados: o contexto importa.', origin: 'Quimbundo, muleke.' },
        { word: 'quitanda', meaning: 'Pequeno comércio de alimentos; em algumas regiões, também designa preparações caseiras.', origin: 'Quimbundo, kitanda.' },
        { word: 'fubá', meaning: 'Farinha fina, especialmente de milho, usada em muitas receitas brasileiras.', origin: 'Quimbundo, fuba.' },
        { word: 'berimbau', meaning: 'Arco musical de corda e cabaça, fundamental em muitas rodas de capoeira.', origin: 'O instrumento tem vínculos africanos; a origem da palavra é incerta e não deve ser confundida com a do instrumento.', verify: true },
        { word: 'samba', meaning: 'Nome de diferentes expressões de música e dança afro-brasileiras.', origin: 'Frequentemente associado ao quimbundo semba, mas a trajetória etimológica é discutida.', verify: true },
        { word: 'quilombo', meaning: 'No Brasil, remete a histórias de resistência e a comunidades com identidade, vínculos e trajetória próprios.', origin: 'Quimbundo, kilombo.' },
        { word: 'axé', meaning: 'Força ou energia vital em tradições iorubás; também circula como saudação.', origin: 'Iorubá, àṣẹ.' }
    ];
    $('#dictionary').innerHTML = words.map(word => `${word.verify ? '<!-- VERIFICAR: etimologia não consensual; não transformar hipótese em certeza. -->' : ''}<details class="word"><summary>${word.word}</summary><div class="word-body"><p>${word.meaning}</p><p><strong>Origem:</strong> ${word.origin}</p><a href="https://dicionario.priberam.org/${encodeURIComponent(word.word)}" target="_blank" rel="noopener noreferrer">Consultar verbete no Priberam</a></div></details>`).join('');
    const symbols = [
        ['sankofa', 'Sankofa', 'Retornar e buscar: aprender com o passado para construir o futuro.'],
        ['gye-nyame', 'Gye Nyame', '“Exceto Deus”: a supremacia de Deus nas tradições Akan.'],
        ['dwennimmen', 'Dwennimmen', 'Chifres de carneiro: a força que caminha com a humildade.'],
        ['nkyinkyim', 'Nkyinkyim', 'As voltas do caminho: iniciativa, dinamismo e versatilidade.'],
        ['aya', 'Aya', 'A samambaia: resistência e capacidade de atravessar desafios.'],
        ['funtunfunefu', 'Funtunfunefu', 'Crocodilos unidos: interdependência e unidade na diversidade.']
    ];
    $('#adinkra-grid').innerHTML = symbols.map(([id, name, meaning], i) => `<button class="adinkra-card" aria-pressed="false" aria-describedby="symbol-meaning-${i}"><svg aria-hidden="true"><use href="#${id}"/></svg><strong>${name}</strong><span class="adinkra-meaning" id="symbol-meaning-${i}">${meaning}</span><span class="adinkra-hint" aria-hidden="true">Toque para descobrir</span></button>`).join('');
    $('#adinkra-grid').addEventListener('click', event => {
        const button = event.target.closest('button');
        if (button)
            button.setAttribute('aria-pressed', String(button.getAttribute('aria-pressed') !== 'true'));
    });
    // O SVG é incorporado ao HTML: não depende de fetch, inclusive em file://.
    const states = [
        ['12', 'AC', 'Acre'], ['27', 'AL', 'Alagoas'], ['16', 'AP', 'Amapá'], ['13', 'AM', 'Amazonas'], ['29', 'BA', 'Bahia'], ['23', 'CE', 'Ceará'], ['53', 'DF', 'Distrito Federal'], ['32', 'ES', 'Espírito Santo'], ['52', 'GO', 'Goiás'], ['21', 'MA', 'Maranhão'], ['51', 'MT', 'Mato Grosso'], ['50', 'MS', 'Mato Grosso do Sul'], ['31', 'MG', 'Minas Gerais'], ['15', 'PA', 'Pará'], ['25', 'PB', 'Paraíba'], ['41', 'PR', 'Paraná'], ['26', 'PE', 'Pernambuco'], ['22', 'PI', 'Piauí'], ['33', 'RJ', 'Rio de Janeiro'], ['24', 'RN', 'Rio Grande do Norte'], ['43', 'RS', 'Rio Grande do Sul'], ['11', 'RO', 'Rondônia'], ['14', 'RR', 'Roraima'], ['42', 'SC', 'Santa Catarina'], ['35', 'SP', 'São Paulo'], ['28', 'SE', 'Sergipe'], ['17', 'TO', 'Tocantins']
    ];
    const stateSelect = $('#state-select');
    stateSelect.innerHTML = states.map(([code, uf, name]) => `<option value="${code}">${name} (${uf})</option>`).join('');
    function selectState(code) {
        const state = states.find(state => state[0] === code);
        if (!state)
            return;
        stateSelect.value = code;
        $('#state-name').textContent = state[2];
        const data = quilombolaStates[code];
        $('#state-population').textContent = data.population.toLocaleString('pt-BR');
        $('#state-in-territories').textContent = data.inTerritories.toLocaleString('pt-BR');
        $('#state-share').textContent = `${data.share.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}%`;
        $('#state-context').textContent = data.population === 0
            ? 'O Censo 2022 não registrou população quilombola nesta UF. O zero é um resultado do levantamento, não uma declaração sobre a inexistência de comunidades ou identidades.'
            : 'A população quilombola inclui pessoas dentro e fora de territórios oficialmente delimitados. O recorte territorial não corresponde ao total de comunidades existentes.';
        $$('#brazil-map .map-state').forEach(path => {
            const selected = path.dataset.code === code;
            path.classList.toggle('selected', selected);
            path.setAttribute('aria-pressed', String(selected));
        });
        $$('#brazil-map .map-label').forEach(label => label.classList.toggle('selected', label.dataset.code === code));
    }
    stateSelect.addEventListener('change', () => selectState(stateSelect.value));
    $('#brazil-map').addEventListener('click', event => {
        const state = event.target.closest('.map-state');
        if (state)
            selectState(state.dataset.code);
    });
    $('#brazil-map').addEventListener('keydown', event => {
        if (event.key !== 'Enter' && event.key !== ' ')
            return;
        const state = event.target.closest('.map-state');
        if (state) {
            event.preventDefault();
            selectState(state.dataset.code);
        }
    });
    const questions = [
        { question: 'O que o símbolo Sankofa nos convida a fazer?', options: ['Apagar o passado', 'Aprender com o passado para construir o futuro', 'Esperar que o futuro se faça sozinho'], correct: 1, explanation: 'Sankofa propõe retornar para buscar conhecimentos e experiências que ajudam a seguir adiante.' },
        { question: 'O que o dia 20 de novembro recorda?', options: ['A assinatura da Lei Áurea', 'A fundação do MNU', 'A morte de Zumbi dos Palmares, em 1695'], correct: 2, explanation: 'A data de morte de Zumbi foi valorizada pelo movimento negro como marco de resistência e protagonismo.' },
        { question: 'Em que ano o 20 de novembro se tornou feriado nacional por lei?', options: ['2023', '1988', '2003'], correct: 0, explanation: 'A Lei 14.759, de 21 de dezembro de 2023, declarou o feriado nacional.' },
        { question: 'Onde fica a Serra da Barriga, referência de Palmares?', options: ['No Pará', 'Em Alagoas', 'No Rio de Janeiro'], correct: 1, explanation: 'A Serra da Barriga fica no atual estado de Alagoas e integra a memória do Quilombo dos Palmares.' },
        { question: 'Quem escreveu Quarto de despejo?', options: ['Carolina Maria de Jesus', 'Maria Firmina dos Reis', 'Conceição Evaristo'], correct: 0, explanation: 'Carolina Maria de Jesus registrou o cotidiano do Canindé em uma obra de grande força literária e social.' },
        { question: 'Qual lei tornou obrigatório o ensino de história e cultura afro-brasileira?', options: ['Lei Afonso Arinos, de 1951', 'Lei de Cotas, de 2012', 'Lei 10.639, de 2003'], correct: 2, explanation: 'A Lei 10.639 alterou a LDB para incluir essa temática no ensino fundamental e médio de escolas públicas e particulares.' },
        { question: 'João Cândido foi uma liderança de qual movimento?', options: ['Revolta dos Malês', 'Revolta da Chibata', 'Frente Negra Brasileira'], correct: 1, explanation: 'Em 1910, João Cândido liderou marinheiros na luta contra os castigos físicos na Marinha.' },
        { question: 'A palavra “caçula” tem origem em qual língua?', options: ['Quimbundo', 'Latim', 'Francês'], correct: 0, explanation: 'Caçula vem do quimbundo, uma das línguas africanas que contribuíram para o português brasileiro.' },
        { question: 'Qual afirmação reconhece a cultura afro-brasileira como presença viva?', options: ['Ela pertence somente aos museus', 'Todas as tradições são iguais', 'Comunidades a recriam e a transmitem no cotidiano'], correct: 2, explanation: 'Na roda, no terreiro, na literatura e na cozinha, conhecimentos são preservados e reinventados por pessoas e comunidades.' },
        { question: 'Como consultar indicadores de desigualdade com responsabilidade?', options: ['Estimar um número que pareça razoável', 'Consultar o IBGE e registrar ano, recorte e fonte', 'Copiar qualquer postagem sem conferir'], correct: 1, explanation: 'Uma leitura responsável das desigualdades precisa de dados verificáveis, com contexto, recorte racial e fonte identificados. Os indicadores desta página usam dados de 2025 divulgados pelo IBGE em 2026.' }
    ];
    let questionIndex = 0;
    let score = 0;
    let answered = false;
    function renderQuestion(focus = false) {
        answered = false;
        const question = questions[questionIndex];
        $('#quiz-position').textContent = `Pergunta ${questionIndex + 1} de ${questions.length}`;
        $('#quiz-score').textContent = `${score} ${score === 1 ? 'acerto' : 'acertos'}`;
        $('#quiz-progress').setAttribute('aria-valuenow', String(questionIndex));
        $('#quiz-progress > div').style.width = `${questionIndex * 10}%`;
        $('#quiz-question').textContent = question.question;
        $('#quiz-options').innerHTML = question.options.map((option, index) => `<button class="quiz-option" data-answer="${index}">${option}</button>`).join('');
        $('#quiz-feedback').textContent = '';
        $('#quiz-next').hidden = true;
        if (focus)
            $('#quiz-question').focus();
    }
    $('#quiz-options').addEventListener('click', event => {
        const button = event.target.closest('[data-answer]');
        if (!button || answered)
            return;
        answered = true;
        const question = questions[questionIndex];
        const choice = Number(button.dataset.answer);
        const correct = choice === question.correct;
        if (correct)
            score++;
        $('#quiz-options').querySelectorAll('button').forEach(option => {
            option.disabled = true;
            if (Number(option.dataset.answer) === question.correct)
                option.classList.add('correct');
        });
        if (!correct)
            button.classList.add('incorrect');
        $('#quiz-feedback').textContent = `${correct ? 'Isso mesmo!' : 'Vamos aprender juntos.'} ${question.explanation}`;
        $('#quiz-score').textContent = `${score} ${score === 1 ? 'acerto' : 'acertos'}`;
        $('#quiz-progress').setAttribute('aria-valuenow', String(questionIndex + 1));
        $('#quiz-progress > div').style.width = `${(questionIndex + 1) * 10}%`;
        $('#quiz-next').textContent = questionIndex === 9 ? 'Ver resultado' : 'Próxima pergunta';
        $('#quiz-next').hidden = false;
    });
    $('#quiz-next').addEventListener('click', () => {
        if (questionIndex === questions.length) {
            questionIndex = 0;
            score = 0;
            renderQuestion(true);
            return;
        }
        if (!answered)
            return;
        questionIndex++;
        if (questionIndex < questions.length) {
            renderQuestion(true);
            return;
        }
        $('#quiz-position').textContent = 'Jornada concluída';
        $('#quiz-question').textContent = score >= 8 ? 'Um repertório para seguir adiante.' : score >= 5 ? 'A jornada já abriu caminhos.' : 'Todo encontro é um começo.';
        $('#quiz-options').innerHTML = `<p class="quiz-result">${score}<span style="font-size:2rem"> / 10</span></p>`;
        $('#quiz-feedback').textContent = score >= 8 ? 'Você reconheceu muitas histórias. Continue compartilhando conhecimento e ouvindo novas vozes.' : score >= 5 ? 'Cada descoberta conta. Volte às seções que despertaram sua curiosidade e continue aprendendo.' : 'Conhecimento se constrói com tempo e escuta. Explore a página no seu ritmo e experimente de novo.';
        $('#quiz-next').textContent = 'Jogar de novo';
        $('#quiz-question').focus();
    });
    const recommendations = {
        livros: [
            { title: 'Quarto de despejo', creator: 'Carolina Maria de Jesus', description: 'Um diário que transforma a experiência cotidiana em literatura e crítica social.', url: 'https://www.companhiadasletras.com.br/busca?termo=quarto%20de%20despejo' },
            { title: 'Olhos d’água', creator: 'Conceição Evaristo', description: 'Contos em que mulheres negras, memória e vida cotidiana ocupam o centro da narrativa.', url: 'https://www.pallaseditora.com.br/busca?busca=Olhos%20d%27%C3%A1gua' },
            { title: 'Úrsula', creator: 'Maria Firmina dos Reis', description: 'Um romance do século XIX que confronta a escravidão pela perspectiva de seus personagens.', url: 'https://www.companhiadasletras.com.br/busca?termo=%C3%9Arsula' },
            { title: 'Um defeito de cor', creator: 'Ana Maria Gonçalves', description: 'Uma longa travessia ficcional pelo Atlântico, pela memória e pela busca de uma mãe.', url: 'https://www.record.com.br/produto/um-defeito-de-cor/' },
            { title: 'Pequeno manual antirracista', creator: 'Djamila Ribeiro', description: 'Reflexões e práticas para reconhecer o racismo e agir no cotidiano.', url: 'https://www.companhiadasletras.com.br/busca?termo=Pequeno%20manual%20antirracista' }
        ],
        filmes: [
            { title: 'AmarElo — É Tudo Pra Ontem', creator: 'Fred Ouro Preto · com Emicida', description: 'Música e pesquisa histórica se encontram em uma celebração da cultura negra brasileira.', url: 'https://www.netflix.com/br/title/81306210' },
            { title: 'A negação do Brasil', creator: 'Joel Zito Araújo', description: 'Documentário sobre a presença e os estereótipos de atores negros na telenovela brasileira.', url: 'https://www.geledes.org.br/?s=A+nega%C3%A7%C3%A3o+do+Brasil' },
            { title: 'Ó Paí, Ó', creator: 'Monique Gardenberg', description: 'Encontros, humor e tensões sociais atravessam o cotidiano de um cortiço no Pelourinho.', url: 'https://www.itaucultural.org.br/busca?query=%C3%93%20Pa%C3%AD%2C%20%C3%93' },
            { title: 'Doutor Gama', creator: 'Jeferson De', description: 'Uma dramatização da trajetória do abolicionista Luiz Gama e de sua atuação pela liberdade.', url: 'https://www.globo.com/busca/?q=Doutor%20Gama' },
            { title: 'Marte Um', creator: 'Gabriel Martins', description: 'Uma família negra de Contagem cultiva afetos e sonhos diante das pressões do cotidiano.', url: 'https://www.filmesdeplastico.com.br/' }
        ],
        musicas: [
            { title: 'A carne', creator: 'Elza Soares', description: 'Na interpretação de Elza, uma denúncia contundente da desigualdade racial.', url: 'https://music.youtube.com/search?q=Elza+Soares+A+Carne' },
            { title: 'Refavela', creator: 'Gilberto Gil', description: 'Um encontro de sonoridades e territórios negros que atravessam o Atlântico.', url: 'https://gilbertogil.com.br/' },
            { title: 'Identidade', creator: 'Jorge Aragão', description: 'Um samba que afirma a dignidade e a memória da população negra.', url: 'https://music.youtube.com/search?q=Jorge+Arag%C3%A3o+Identidade' },
            { title: 'Principia', creator: 'Emicida e participações', description: 'Uma canção sobre encontro, afeto e possibilidades de vida coletiva.', url: 'https://music.youtube.com/search?q=Emicida+Principia' },
            { title: 'Canto das três raças', creator: 'Clara Nunes', description: 'Uma interpretação marcante para pensar memória, trabalho e formação brasileira.', url: 'https://music.youtube.com/search?q=Clara+Nunes+Canto+das+Tr%C3%AAs+Ra%C3%A7as' }
        ],
        podcasts: [
            { title: 'Projeto Querino', creator: 'Tiago Rogero', description: 'Uma narrativa sobre a formação do Brasil a partir do protagonismo afro-brasileiro.', url: 'https://projetoquerino.com.br/' },
            { title: 'História Preta', creator: 'Thiago André', description: 'Pesquisa e narrativa documental sobre a memória da população negra.', url: 'https://www.b9.com.br/shows/historiapreta/' },
            { title: 'Vidas Negras', creator: 'Tiago Rogero', description: 'Trajetórias de pessoas negras conectam história, cultura e experiências do presente.', url: 'https://open.spotify.com/search/Vidas%20Negras' },
            { title: 'Mano a Mano', creator: 'Mano Brown', description: 'Conversas longas sobre experiências, cultura e questões que atravessam o país.', url: 'https://open.spotify.com/search/Mano%20a%20Mano' },
            { title: 'Angu de Grilo', creator: 'Flávia Oliveira e Isabela Reis', description: 'Duas gerações de mulheres negras conversam sobre política, sociedade e cotidiano.', url: 'https://open.spotify.com/search/Angu%20de%20Grilo' }
        ]
    };
    function renderRecommendations(key) {
        $$('.tabs [role=tab]').forEach(tab => {
            const selected = tab.dataset.tab === key;
            tab.setAttribute('aria-selected', String(selected));
            tab.tabIndex = selected ? 0 : -1;
        });
        $('#recommendations').setAttribute('aria-labelledby', `tab-${key}`);
        $('#recommendations').innerHTML = recommendations[key].map(item => `<article class="recommendation"><a href="${item.url}" target="_blank" rel="noopener noreferrer">${item.title}<span class="sr-only"> (abre em nova aba)</span></a><small>${item.creator}</small><p>${item.description}</p></article>`).join('');
    }
    $('.tabs').addEventListener('click', event => {
        const tab = event.target.closest('[role=tab]');
        if (tab)
            renderRecommendations(tab.dataset.tab);
    });
    $('.tabs').addEventListener('keydown', event => {
        if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key))
            return;
        event.preventDefault();
        const tabs = $$('.tabs [role=tab]');
        const index = tabs.indexOf(document.activeElement);
        const next = event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length - 1 : (index + (event.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
        renderRecommendations(tabs[next].dataset.tab);
        tabs[next].focus();
    });
    // Gerador: fontes aguardadas antes da exportação; texto sempre desenhado, nunca HTML.
    const canvas = $('#story-canvas');
    const context = canvas.getContext('2d');
    const messageInput = $('#card-message');
    const cardPalettes = [
        { bg: '#1A1410', text: '#F5EDE0', accent: '#E0A526' },
        { bg: '#F5EDE0', text: '#1A1410', accent: '#9A3E1B' },
        { bg: '#2F5D3A', text: '#F5EDE0', accent: '#F5EDE0' }
    ];
    function wrapText(ctx, text, width) {
        const lines = [];
        // Também quebra palavras longas para impedir que frases válidas saiam do story.
        for (const paragraph of text.split('\n')) {
            let line = '';
            for (const word of paragraph.split(/\s+/)) {
                if (!word)
                    continue;
                if (ctx.measureText(word).width > width) {
                    if (line) {
                        lines.push(line);
                        line = '';
                    }
                    for (const char of Array.from(word)) {
                        if (ctx.measureText(line + char).width > width) {
                            lines.push(line);
                            line = char;
                        }
                        else
                            line += char;
                    }
                }
                else if (ctx.measureText(line ? `${line} ${word}` : word).width > width) {
                    lines.push(line);
                    line = word;
                }
                else
                    line = line ? `${line} ${word}` : word;
            }
            if (line)
                lines.push(line);
        }
        return lines;
    }
    function drawStory() {
        if (!context)
            return;
        const selected = Number($('input[name=palette]:checked').value);
        const colors = cardPalettes[selected];
        const ctx = context;
        ctx.fillStyle = colors.bg;
        ctx.fillRect(0, 0, 1080, 1920);
        ctx.strokeStyle = colors.accent;
        ctx.lineWidth = 2;
        ctx.strokeRect(44, 44, 992, 1832);
        // Faixas geométricas originais.
        ctx.fillStyle = colors.accent;
        for (let x = 70; x < 1020; x += 72) {
            for (const y of [94, 1806]) {
                ctx.save();
                ctx.translate(x, y);
                ctx.rotate(Math.PI / 4);
                ctx.fillRect(-12, -12, 24, 24);
                ctx.restore();
            }
        }
        ctx.save();
        ctx.translate(378, 210);
        ctx.scale(2.7, 2.7);
        ctx.strokeStyle = colors.accent;
        ctx.lineWidth = 4;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.stroke(new Path2D('M60 105C50 86 16 68 17 41C18 10 56 12 60 40C64 12 102 10 103 41C104 68 70 86 60 105ZM42 52C23 57 22 28 39 29C54 30 53 52 42 65M78 52C97 57 98 28 81 29C66 30 67 52 78 65M60 68V99'));
        ctx.restore();
        ctx.textAlign = 'center';
        ctx.fillStyle = colors.accent;
        ctx.font = '700 22px Manrope, sans-serif';
        ctx.fillText('MEMÓRIA · PRESENÇA · FUTURO', 540, 600);
        const text = messageInput.value.trim() || 'Reconhecer as raízes para abrir novos caminhos.';
        let fontSize = 92;
        let lines = [];
        do {
            ctx.font = `500 ${fontSize}px Fraunces, Georgia, serif`;
            lines = wrapText(ctx, text, 820);
            if (lines.length * fontSize * 1.24 <= 660)
                break;
            fontSize -= 2;
        } while (fontSize >= 34);
        ctx.fillStyle = colors.text;
        const top = 985 - ((lines.length - 1) * fontSize * 1.24) / 2;
        lines.forEach((line, i) => ctx.fillText(line, 540, top + i * fontSize * 1.24));
        ctx.fillStyle = colors.accent;
        ctx.font = '500 132px Fraunces, Georgia, serif';
        ctx.fillText('20/11', 540, 1515);
        ctx.fillStyle = colors.text;
        ctx.font = '700 25px Manrope, sans-serif';
        ctx.fillText('DIA DA CONSCIÊNCIA NEGRA', 540, 1580);
        ctx.font = '500 42px Fraunces, Georgia, serif';
        ctx.fillText('aquilombar.', 540, 1710);
        canvas.setAttribute('aria-label', `Prévia do card: ${text}. 20 de novembro, Dia da Consciência Negra.`);
        $('#card-count').textContent = `${messageInput.value.length} de 150 caracteres`;
    }
    messageInput.addEventListener('input', drawStory);
    $$('input[name=palette]').forEach(input => input.addEventListener('change', drawStory));
    $('#card-form').addEventListener('submit', async (event) => {
        event.preventDefault();
        if (!context) {
            $('#download-status').textContent = 'Seu navegador não permite gerar a imagem.';
            return;
        }
        const downloadButton = $('#download-card');
        downloadButton.disabled = true;
        $('#download-status').textContent = 'Preparando a imagem…';
        try {
            await Promise.all([document.fonts.load('500 92px Fraunces'), document.fonts.load('700 25px Manrope')]);
            drawStory();
            canvas.toBlob(blob => {
                downloadButton.disabled = false;
                if (!blob) {
                    $('#download-status').textContent = 'Não foi possível gerar a imagem. Tente novamente.';
                    return;
                }
                const url = URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.download = 'aquilombar-20-de-novembro.png';
                document.body.append(link);
                link.click();
                link.remove();
                setTimeout(() => URL.revokeObjectURL(url), 30000);
                $('#download-status').textContent = 'Imagem preparada. Confira os downloads do navegador.';
            }, 'image/png');
        }
        catch {
            downloadButton.disabled = false;
            $('#download-status').textContent = 'Não foi possível preparar a imagem. Tente novamente.';
        }
    });
    document.fonts.ready.then(drawStory).catch(drawStory);
    let messages = [];
    try {
        const saved = JSON.parse(storage.get('aquilombar-wall-v1') || '[]');
        if (Array.isArray(saved))
            messages = saved.filter((item) => !!item && typeof item.text === 'string' && item.text.trim().length > 0 && item.text.length <= 180 && typeof item.date === 'string').slice(0, 30);
    }
    catch {
        messages = [];
    }
    function renderWall() {
        const wall = $('#message-wall');
        wall.replaceChildren();
        if (!messages.length) {
            const empty = document.createElement('p');
            empty.className = 'empty-state';
            empty.textContent = 'Seu mural está pronto para a primeira semente. Escreva uma mensagem acima.';
            wall.append(empty);
            return;
        }
        messages.forEach((message, index) => {
            const note = document.createElement('article');
            note.className = 'wall-note';
            const text = document.createElement('p');
            text.textContent = message.text;
            const date = document.createElement('small');
            const timestamp = new Date(message.date);
            date.textContent = `Sua voz · ${Number.isNaN(timestamp.getTime()) ? 'neste navegador' : timestamp.toLocaleDateString('pt-BR')}`;
            const remove = document.createElement('button');
            remove.type = 'button';
            remove.className = 'remove-message';
            remove.textContent = 'Remover';
            remove.dataset.index = String(index);
            remove.setAttribute('aria-label', `Remover mensagem: ${message.text.slice(0, 45)}`);
            note.append(text, date, remove);
            wall.append(note);
        });
    }
    $('#message-wall').addEventListener('click', event => {
        const button = event.target.closest('.remove-message');
        if (!button)
            return;
        messages.splice(Number(button.dataset.index), 1);
        const saved = storage.set('aquilombar-wall-v1', JSON.stringify(messages));
        renderWall();
        $('#wall-status').textContent = saved ? 'Mensagem removida do mural deste navegador.' : 'Mensagem removida desta visita. O armazenamento do navegador está indisponível.';
        $('#wall-message').focus();
    });
    $('#wall-form').addEventListener('submit', event => {
        event.preventDefault();
        const input = $('#wall-message');
        const text = input.value.trim();
        if (!text) {
            $('#wall-status').textContent = 'Escreva uma mensagem antes de enviar.';
            input.focus();
            return;
        }
        if (messages.length >= 30) {
            $('#wall-status').textContent = 'Seu mural chegou ao limite de 30 mensagens neste navegador.';
            return;
        }
        messages.unshift({ text: text.slice(0, 180), date: new Date().toISOString() });
        const saved = storage.set('aquilombar-wall-v1', JSON.stringify(messages));
        renderWall();
        input.value = '';
        $('#wall-status').textContent = saved ? 'Sua mensagem entrou no mural deste navegador.' : 'Mensagem exibida nesta visita. O armazenamento está indisponível e ela não será mantida ao fechar a página.';
    });
    const motionPreference = matchMedia('(prefers-reduced-motion: reduce)');
    let revealObserver;
    function setupMotion() {
        revealObserver?.disconnect();
        document.documentElement.classList.toggle('js-motion', !motionPreference.matches && 'IntersectionObserver' in window);
        if (motionPreference.matches || !('IntersectionObserver' in window))
            return;
        revealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        }), { threshold: .08, rootMargin: '0px 0px -20px 0px' });
        $$('.reveal:not(.visible)').forEach(element => revealObserver.observe(element));
    }
    motionPreference.addEventListener('change', setupMotion);
    renderPeople();
    selectState('29');
    renderQuestion();
    renderRecommendations('livros');
    renderWall();
    drawStory();
    setupMotion();
    readingProgress();
})();
