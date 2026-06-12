// =========================================================================
// 1. NAVEGAÇÃO DE ABAS PRINCIPAIS
// =========================================================================
function openTab(tabId) {
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => content.classList.remove('active'));

    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(button => button.classList.remove('active'));

    const targetTab = document.getElementById(tabId);
    if (targetTab) targetTab.classList.add('active');

    const clickedButton = Array.from(navButtons).find(btn => btn.getAttribute('onclick').includes(`'${tabId}'`));
    if (clickedButton) {
        clickedButton.classList.add('active');
    }
}

// =========================================================================
// 2. BANCO DE DADOS - ARMAS E DEFESAS DA GRADE 80 (MUNDO BPT / ORIGENS PT)
// =========================================================================
const DATA_ITEMS_METAGAME = {
    arma: [
        // --- FOICES ---
        { id: "hiper_foice", nome: "⚔️ [80A] Foice Hiper", grade: "80a", danoMin: 31, danoMax: 66, taxaAtaque: 169, critico: 18 },
        { id: "foice_oraculo", nome: "⚔️ [80B] Foice Oráculo", grade: "80b", danoMin: 35, danoMax: 71, taxaAtaque: 178, critico: 17 },
        { id: "foice_imortal", nome: "⚔️ [80C] Foice Imortal", grade: "80c", danoMin: 39, danoMax: 76, taxaAtaque: 185, critico: 17 },
        { id: "foice_extrema", nome: "⚔️ [80D] Foice Extrema", grade: "80d", danoMin: 43, danoMax: 82, taxaAtaque: 192, critico: 17 },

        // --- ARCOS ---
        { id: "arco_trovao", nome: "⚔️ [80A] Arco do Trovão", grade: "80a", danoMin: 32, danoMax: 49, taxaAtaque: 124, critico: 16 },
        { id: "arco_onda", nome: "⚔️ [80B] Arco Onda", grade: "80b", danoMin: 36, danoMax: 54, taxaAtaque: 130, critico: 16 },
        { id: "arco_grandioso", nome: "⚔️ [80C] Arco Grandioso", grade: "80c", danoMin: 40, danoMax: 59, taxaAtaque: 135, critico: 17 },
        { id: "arco_miragem", nome: "⚔️ [80D] Arco Miragem", grade: "80d", danoMin: 45, danoMax: 65, taxaAtaque: 144, critico: 17 },

        // --- ESPADAS ---
        { id: "espada_salamandra", nome: "⚔️ [80A] Espada Salamandra", grade: "80a", danoMin: 40, danoMax: 56, taxaAtaque: 150, critico: 18 },
        { id: "espada_vinganca", nome: "⚔️ [80B] Espada da Vingança", grade: "80b", danoMin: 36, danoMax: 50, taxaAtaque: 156, critico: 11 },
        { id: "espada_titan", nome: "⚔️ [80C] Espada Titan", grade: "80c", danoMin: 50, danoMax: 66, taxaAtaque: 164, critico: 18 },
        { id: "espada_wyvern", nome: "⚔️ [80D] Espada Wyvern", grade: "80d", danoMin: 39, danoMax: 55, taxaAtaque: 170, critico: 11 },

        // --- LANÇAS ---
        { id: "lanca_mistica", nome: "⚔️ [80A] Lança Mística", grade: "80a", danoMin: 30, danoMax: 43, taxaAtaque: 124, critico: 12 },
        { id: "lanca_extrema", nome: "⚔️ [80B] Lança Extrema", grade: "80b", danoMin: 33, danoMax: 48, taxaAtaque: 130, critico: 11 },
        { id: "lanca_dragao", nome: "⚔️ [80C] Lança do Dragão", grade: "80c", danoMin: 38, danoMax: 53, taxaAtaque: 140, critico: 12 },
        { id: "lanca_espinhosa", nome: "⚔️ [80D] Lança Espinhosa", grade: "80d", danoMin: 43, danoMax: 58, taxaAtaque: 148, critico: 12 },

        // --- CAJADOS / VARINHAS ---
        { id: "varinha_apostolos", nome: "⚔️ [80A] Varinha dos Apóstolos", grade: "80a", danoMin: 23, danoMax: 31, taxaAtaque: 140, critico: 0 },
        { id: "cajado_antigo", nome: "⚔️ [80B] Cajado Antigo", grade: "80b", danoMin: 30, danoMax: 38, taxaAtaque: 148, critico: 0 },
        { id: "cajado_dragao", nome: "⚔️ [80C] Cajado do Dragão", grade: "80c", danoMin: 35, danoMax: 43, taxaAtaque: 155, critico: 0 },
        { id: "varinha_wyvern", nome: "⚔️ [80D] Varinha Wyvern", grade: "80d", danoMin: 30, danoMax: 39, taxaAtaque: 164, critico: 0 },

        // --- MACHADOS ---
        { id: "machado_caos", nome: "⚔️ [80A] Machado do Caos", grade: "80a", danoMin: 38, danoMax: 59, taxaAtaque: 140, critico: 17 },
        { id: "machado_anciao", nome: "⚔️ [80B] Machado Ancião", grade: "80b", danoMin: 43, danoMax: 65, taxaAtaque: 148, critico: 18 },
        { id: "machado_antigo", nome: "⚔️ [80C] Machado Antigo", grade: "80c", danoMin: 39, danoMax: 60, taxaAtaque: 160, critico: 10 },
        { id: "machado_extremo", nome: "⚔️ [80D] Machado Extremo", grade: "80d", danoMin: 53, danoMax: 74, taxaAtaque: 170, critico: 18 },

        // --- GARRAS ---
        { id: "garra_titan", nome: "⚔️ [80A] Garra Titan", grade: "80a", danoMin: 33, danoMax: 47, taxaAtaque: 130, critico: 15 },
        { id: "garra_salamandra", nome: "⚔️ [80B] Garra Salamandra", grade: "80b", danoMin: 37, danoMax: 52, taxaAtaque: 142, critico: 16 },
        { id: "garra_fenix", nome: "⚔️ [80C] Garra Fênix", grade: "80c", danoMin: 42, danoMax: 57, taxaAtaque: 154, critico: 15 },
        { id: "garra_chimera", nome: "⚔️ [80D] Garra Chimera", grade: "80d", danoMin: 47, danoMax: 63, taxaAtaque: 165, critico: 15 },

        // --- MARTELOS ---
        { id: "martelo_brutal", nome: "⚔️ [80A] Martelo Brutal", grade: "80a", danoMin: 28, danoMax: 51, taxaAtaque: 149, critico: 10 },
        { id: "martelo_gladiador", nome: "⚔️ [80B] Martelo Gladiador", grade: "80b", danoMin: 40, danoMax: 66, taxaAtaque: 165, critico: 18 },
        { id: "martelo_archon", nome: "⚔️ [80C] Martelo Archon", grade: "80c", danoMin: 45, danoMax: 72, taxaAtaque: 173, critico: 19 },
        { id: "martelo_justica", nome: "⚔️ [80D] Martelo da Justiça", grade: "80d", danoMin: 41, danoMax: 67, taxaAtaque: 180, critico: 11 }
    ],
    armadura: [
        // --- DEFESAS CADASTRADAS ---
        { id: "arm_minotauro", nome: "🛡️ [80A] Armadura Minotauro", grade: "80a", defBase: 310, absorcao: 12.7 },

    { id: "arm_demoniaca", nome: "🛡️ [80B] Armadura Demoníaca", grade: "80b", defBase: 330, absorcao: 14.2 },

    { id: "arm_salamandra", nome: "🛡️ [80C] Armadura Salamandra", grade: "80c", defBase: 360, absorcao: 16.2 },

    { id: "arm_wyvern", nome: "🛡️ [80D] Armadura Wyvern", grade: "80d", defBase: 380, absorcao: 18.6 },

    { id: "roupao_salvacao", nome: "🧙 [80A] Roupão da Salvação", grade: "80a", defBase: 255, absorcao: 10.8 },

    { id: "roupao_alquimista", nome: "🧙 [80B] Roupão Alquimista", grade: "80b", defBase: 270, absorcao: 12.6 },

    { id: "roupao_astral", nome: "🧙 [80C] Roupão Astral", grade: "80c", defBase: 290, absorcao: 14.4 },

    { id: "roupao_archon", nome: "🧙 [80D] Roupão Archon", grade: "80d", defBase: 310, absorcao: 16.5 }
],
    escudo: [
    {
        id: "esc_sintetico",
        nome: "🛡️ [80A] Escudo Sintético",
        grade: "80a",
        defBase: 145,
        absorcao: 6.6,
        bloqueio: 20
    },
    {
        id: "esc_titan",
        nome: "🛡️ [80B] Escudo Titan",
        grade: "80b",
        defBase: 165,
        absorcao: 7.4,
        bloqueio: 20
    },
    {
        id: "esc_mistico",
        nome: "🛡️ [80C] Escudo Místico",
        grade: "80c",
        defBase: 180,
        absorcao: 8.4,
        bloqueio: 20
    },
    {
        id: "esc_vampiro",
        nome: "🛡️ [80D] Escudo Vampiro",
        grade: "80d",
        defBase: 192,
        absorcao: 9.4,
        bloqueio: 20
    }
],

    bracete: [
	 { id: "brac_80a", nome: "🧤 [80A] Bracelete de Metal", grade: "80a", defBase: 72, taxaAtaque: 83 }
    ],
    luvas: [
	 { id: "luva_80a", nome: "🥊 [80A] Luvas Santas", grade: "80a", defBase: 110, absorcao: 5 } 
    ],
    botas: [
         { id: "bota_80a", nome: "👢 [80A] Botas Santas", grade: "80a", defBase: 105, absorcao: 5.3 }
    ]
    
};

// =========================================================================
// 3. TABELA DE COMPOSIÇÃO DOS AGINGS (CORRIGIDA - FIEL AO ORIGENS PT)
// =========================================================================
const RECEITAS_SHELTONS_EXATAS = {
    1: "2 Fadeo, 2 Spark, 1 Raident",
    2: "2 Fadeo, 2 Spark, 2 Raident",
    3: "2 Fadeo, 2 Spark, 2 Raident, 1 Transparo",
    4: "2 Fadeo, 2 Spark, 2 Raident, 2 Transparo",
    5: "2 Fadeo, 2 Spark, 2 Raident, 2 Transparo, 1 Murky",
    6: "2 Fadeo, 2 Spark, 2 Raident, 2 Transparo, 2 Murky",
    7: "2 Fadeo, 2 Spark, 2 Raident, 2 Transparo, 2 Murky, 1 Devine",
    8: "2 Fadeo, 2 Spark, 2 Raident, 2 Transparo, 2 Murky, 2 Devine",
    9: "2 Spark, 2 Raident, 2 Transparo, 2 Murky, 2 Devine, 1 Celesto",
    10: "2 Spark, 2 Raident, 2 Transparo, 2 Murky, 2 Devine, 2 Celesto",
    11: "2 Raident, 2 Transparo, 2 Murky, 2 Devine, 2 Celesto, 1 Mirage",
    12: "2 Raident, 2 Transparo, 2 Murky, 2 Devine, 2 Celesto, 2 Mirage",
    13: "2 Transparo, 2 Murky, 2 Devine, 2 Celesto, 2 Mirage, 1 Inferna",
    14: "2 Transparo, 2 Murky, 2 Devine, 2 Celesto, 2 Mirage, 2 Inferna",
    15: "2 Murky, 2 Devine, 2 Celesto, 2 Mirage, 2 Inferna, 1 Enigma",
    16: "2 Murky, 2 Devine, 2 Celesto, 2 Mirage, 2 Inferna, 2 Enigma",
    17: "2 Devine, 2 Celesto, 2 Mirage, 2 Inferna, 2 Enigma, 1 Bellum",
    18: "2 Devine, 2 Celesto, 2 Mirage, 2 Inferna, 2 Enigma, 2 Bellum",
    19: "2 Celesto, 2 Mirage, 2 Inferna, 2 Enigma, 2 Bellum, 1 Ordo",
    20: "2 Celesto, 2 Mirage, 2 Inferna, 2 Enigma, 2 Bellum, 2 Ordo",
    21: "2 Mirage, 2 Inferna, 2 Enigma, 2 Bellum, 2 Ordo, 1 Gemma",
    22: "2 Mirage, 2 Inferna, 2 Enigma, 2 Bellum, 2 Ordo, 2 Gemma",
    23: "2 Inferna, 2 Enigma, 2 Bellum, 2 Ordo, 2 Gemma, 1 Purus",
    24: "2 Inferna, 2 Enigma, 2 Bellum, 2 Ordo, 2 Gemma, 2 Purus",
    25: "2 Enigma, 2 Bellum, 2 Ordo, 2 Gemma, 2 Purus, 1 Veritas"
};

// =========================================================================
// 4. LOGÍSTICA E PREENCHIMENTO AUTOMÁTICO DOS CAMPOS INDIVIDUAIS
// =========================================================================
function popularItensEspecificos() {
    const tipoItem = document.getElementById('tipo-item').value;
    const selectEspecifico = document.getElementById('especifico-item');
    const containerArma = document.getElementById('container-inputs-arma');
    const containerDefesa = document.getElementById('container-input-defesa');
    
    // Limpa o select antes de popular
    selectEspecifico.innerHTML = "";
    
    // Lógica de exibição: 
    // Se for 'arma', mostra o painel de dano. 
    // Se for QUALQUER outra coisa (armadura, bracete, luvas, botas), mostra o painel de defesa.
    if (tipoItem === 'arma') {
        containerArma.style.display = 'block';
        containerDefesa.style.display = 'none';
    } else {
        containerArma.style.display = 'none';
        containerDefesa.style.display = 'block';
    }

    // Verifica se a categoria existe no banco de dados
    if (DATA_ITEMS_METAGAME[tipoItem]) {
        const itensOrdenados = [...DATA_ITEMS_METAGAME[tipoItem]].sort((a, b) => {

    const ordemGrade = {
        "75": 75,
        "80a": 801,
        "80b": 802,
        "80c": 803,
        "80d": 804,
        "90": 90,
        "100": 100,
        "108": 108,
        "118": 118,
        "123": 123,
        "130": 130,
        "140": 140
    };

    return (ordemGrade[a.grade] || 9999) -
           (ordemGrade[b.grade] || 9999);
});

itensOrdenados.forEach(item => {
    let opt = document.createElement('option');
    opt.value = item.id;
    opt.innerText = item.nome;
    selectEspecifico.appendChild(opt);
});
    } else {
        // Fallback caso a categoria selecionada ainda não tenha itens cadastrados
        let opt = document.createElement('option');
        opt.innerText = "Sem itens nesta categoria";
        selectEspecifico.appendChild(opt);
    }

    // Atualiza os inputs com os dados do primeiro item da lista carregada
    atualizarStatusBasePorItem();
}

function atualizarStatusBasePorItem() {

    const tipoItem = document.getElementById('tipo-item').value;
    const itemId = document.getElementById('especifico-item').value;
const labelBloqueio = document.getElementById('label-bloqueio');
const inputBloqueio = document.getElementById('bloqueio-input');
    const itemEncontrado =
        DATA_ITEMS_METAGAME[tipoItem].find(i => i.id === itemId);

    if (!itemEncontrado) return;

    const labelSecundario =
        document.getElementById('label-status-secundario');

    if (tipoItem === 'arma') {

        document.getElementById('dano-min-input').value =
            itemEncontrado.danoMin;

        document.getElementById('dano-max-input').value =
            itemEncontrado.danoMax;

        document.getElementById('taxa-ataque-input').value =
            itemEncontrado.taxaAtaque;

        document.getElementById('container-inputs-arma')
            .dataset.criticoBase = itemEncontrado.critico;
    }
    else {
    document.getElementById('defesa-input').value = itemEncontrado.defBase;

    if (tipoItem === 'bracete') {

    labelSecundario.innerText = "Taxa de Ataque";

    document.getElementById('taxa-ataque-defesa-input').value =
        itemEncontrado.taxaAtaque || 0;

} else {

    labelSecundario.innerText = "Absorção";

    document.getElementById('taxa-ataque-defesa-input').value =
        itemEncontrado.absorcao || 0;
}

    if (tipoItem === 'escudo') {

document.getElementById('container-bloqueio').style.display = 'block';

        inputBloqueio.value = itemEncontrado.bloqueio || 0;

    } else {

document.getElementById('container-bloqueio').style.display = 'none';
    }
}
}

// =========================================================================
// 5. CÁLCULO DE PROGRESSÃO EM CIMA DO QUE FOI DIGITADO
// =========================================================================
function processarAgingNativo() {
    const tipoItem = document.getElementById('tipo-item').value;
    const itemId = document.getElementById('especifico-item').value;
    const nivelAlvo = parseInt(document.getElementById('nivel-aging').value);

    const itemEncontrado = DATA_ITEMS_METAGAME[tipoItem].find(i => i.id === itemId);
    if (!itemEncontrado) return;

    let laudoHtml = "";
    let seguridadTexto = "";
    let seguridadeCor = "#2c662d";

    let gradeNumerica = parseInt(itemEncontrado.grade) || 80;
    let multiplicadorGrade = 1.0;
    
    if (gradeNumerica >= 140) multiplicadorGrade = 7.0;
    else if (gradeNumerica >= 123) multiplicadorGrade = 5.2;
    else if (gradeNumerica >= 100) multiplicadorGrade = 3.0;
    else if (itemEncontrado.grade === '80d') multiplicadorGrade = 2.3;
    else if (itemEncontrado.grade === '80c') multiplicadorGrade = 1.8;
    else if (itemEncontrado.grade === '80b') multiplicadorGrade = 1.5;
    else multiplicadorGrade = 1.2;
    
    let custoGold = Math.floor((nivelAlvo * 125000) * multiplicadorGrade);

    if (nivelAlvo <= 7) { seguridadTexto = "100% Seguro contra quebra (Pode regredir nível)."; seguridadeCor = "#2c662d"; }
    else if (nivelAlvo <= 12) { seguridadTexto = "Segurança Estável (Risco moderado de regressão)."; seguridadeCor = "#bc8f42"; }
    else { seguridadTexto = "🔥 ALTO RISCO! Faixa de Quebra Crítica Extrema. Use consumíveis de proteção de alto nível!"; seguridadeCor = "#b52a2a"; }

    // --- CÁLCULO DE ARMA ---
    if (tipoItem === 'arma') {
        let danoMinDigitado = parseFloat(document.getElementById('dano-min-input').value);
        let danoMaxDigitado = parseFloat(document.getElementById('dano-max-input').value);
        let arDigitado = parseFloat(document.getElementById('taxa-ataque-input').value);
        let criticoBase = parseFloat(document.getElementById('container-inputs-arma').dataset.criticoBase) || itemEncontrado.critico;

        if (isNaN(danoMinDigitado) || isNaN(danoMaxDigitado) || isNaN(arDigitado)) {
            alert("Por favor, preencha todos os campos com valores válidos.");
            return;
        }

        let ganhoDanoFixo = 0;
        for (let i = 1; i <= nivelAlvo; i++) {
            if (i <= 9) ganhoDanoFixo += 1;
            else if (i <= 19) ganhoDanoFixo += 2;
            else if (i >= 20) ganhoDanoFixo += 3;
        }

        let ganhoAR = 0;

if (
    !itemId.includes("arco") &&
    !itemId.includes("lanca")
) {
    ganhoAR = nivelAlvo * 5;
}

let taxaAtaqueFinal = arDigitado + ganhoAR;
        let bonusFixoCritico = (itemId.includes("machado") || itemId.includes("cajado") || itemId.includes("varinha")) ? 0 : Math.floor(nivelAlvo / 2);
        let criticoFinal = criticoBase + bonusFixoCritico;
        let danoMinFinal = danoMinDigitado + ganhoDanoFixo;
        let danoMaxFinal = danoMaxDigitado + ganhoDanoFixo;
	let ganhoARTotal = taxaAtaqueFinal - arDigitado;
	let ganhoCritico = criticoFinal - criticoBase;
        

        laudoHtml = `
            <p style="font-size: 1.1rem; margin-bottom: 8px;">Equipamento Selecionado: <strong>${itemEncontrado.nome.substring(4)}</strong></p>
            <p>📊 <strong>Dano Final Calculado:</strong> <span style="color: #b52a2a; font-size: 1.2rem;">${danoMinFinal} - ${danoMaxFinal}</span></p>
            <p>📈 Ganho de Forja: <span style="color: #2c662d;">+${ganhoDanoFixo} Min / +${ganhoDanoFixo} Máx</span></p>
            <p>🎯 <strong>Taxa de Ataque (AR) Final:</strong>
    <span style="font-size: 1.15rem; font-weight: bold; color: #b52a2a;">
        ${taxaAtaqueFinal}
    </span>
    <span style="color:#2c662d;font-weight:bold;">
        (+${ganhoARTotal})
    </span>
</p>

<p>⚡ <strong>Crítico Definitivo:</strong>
    <span style="font-size: 1.15rem; font-weight: bold; color: #bc8f42;">
        ${criticoFinal}%
    </span>
    <span style="color:#2c662d;font-weight:bold;">
        (+${ganhoCritico}%)
    </span>
</p>
        `;
        document.getElementById('res-tipo-label').innerText = "Laudo Técnico da Arma:";
    } 
    // --- CÁLCULO DE DEFESA (Armadura, Bracelete, Luva, Bota) ---
    else {

    let defBase = parseFloat(document.getElementById('defesa-input').value);

    if (isNaN(defBase)) return;

    let taxaIncremento =
        (tipoItem === 'bracete' || tipoItem === 'luvas' || tipoItem === 'botas')
            ? 0.10
            : 0.05;

    let defesaFinal = defBase;

if (tipoItem !== "escudo") {

    for (let i = 1; i <= nivelAlvo; i++) {
        defesaFinal = Math.floor(defesaFinal * (1 + taxaIncremento));
    }

}

    if (tipoItem === 'bracete') {

        let arBase =
            parseFloat(document.getElementById('taxa-ataque-defesa-input').value) || 0;

        let taxaAtaqueFinal = arBase + (nivelAlvo * 5);

        let ganhoDefesa = defesaFinal - defBase;
let ganhoAR = taxaAtaqueFinal - arBase;

laudoHtml = `
    <p style="font-size: 1.1rem; margin-bottom: 8px;">
        Equipamento Selecionado:
        <strong>${itemEncontrado.nome.substring(4)}</strong>
    </p>

    <p>
        🛡️ <strong>Defesa Final:</strong>
        <span style="color:#b52a2a;font-size:1.2rem;">
            ${defesaFinal}
        </span>
        <span style="color:#2c662d;font-weight:bold;">
            (+${ganhoDefesa})
        </span>
    </p>

    <p>
        🎯 <strong>Taxa de Ataque Final:</strong>
        <span style="font-size:1.15rem;font-weight:bold;color:#bc8f42;">
            ${taxaAtaqueFinal}
        </span>
        <span style="color:#2c662d;font-weight:bold;">
            (+${ganhoAR})
        </span>
    </p>
`;
    }
    else {

        let absorcaoBase =
    parseFloat(document.getElementById('taxa-ataque-defesa-input').value) || 0;

let ganhoAbsorcao = 0;
let ganhoBloqueio = 0;

if (tipoItem === "escudo") {

    for (let i = 1; i <= nivelAlvo; i++) {

        ganhoBloqueio += 0.5;

        if (i <= 9) {
            ganhoAbsorcao += 0.2;
        }
        else if (i <= 19) {
            ganhoAbsorcao += 0.4;
        }
        else {
            ganhoAbsorcao += 0.6;
        }
    }

} else {

    for (let i = 1; i <= nivelAlvo; i++) {

        if (i <= 9) {
            ganhoAbsorcao += 0.5;
        }
        else if (i <= 19) {
            ganhoAbsorcao += 1.0;
        }
        else {
            ganhoAbsorcao += 1.5;
        }
    }
}

let absorcaoFinal = absorcaoBase + ganhoAbsorcao;

// GANHOS DO AGING
let ganhoDefesa = defesaFinal - defBase;
let bloqueioBase = itemEncontrado.bloqueio || 0;

let bloqueioFinal =
    tipoItem === "escudo"
        ? bloqueioBase + ganhoBloqueio
        : bloqueioBase;

let infoBloqueio = "";
if (tipoItem === "escudo") {
    infoBloqueio = `
        <p>
            🛡️ <strong>Bloqueio:</strong>
            <span style="font-size:1.15rem;font-weight:bold;color:#2c662d;">
                ${bloqueioBase}%
            </span>
        </p>
    `;
}

laudoHtml = `
    <p style="font-size: 1.1rem; margin-bottom: 8px;">
        Equipamento Selecionado:
        <strong>${itemEncontrado.nome.substring(4)}</strong>
    </p>

    <p>
        🛡️ <strong>Defesa Final:</strong>
        <span style="color:#b52a2a;font-size:1.2rem;">
            ${defesaFinal}
        </span>
        <span style="color:#2c662d;font-weight:bold;">
            (+${ganhoDefesa})
        </span>
    </p>

    <p>
        ✨ <strong>Absorção Final:</strong>
        <span style="font-size:1.15rem;font-weight:bold;color:#bc8f42;">
            ${absorcaoFinal.toFixed(1)}
        </span>
        <span style="color:#2c662d;font-weight:bold;">
            (+${ganhoAbsorcao.toFixed(1)})
        </span>
    </p>

    <p>
    🛡️ <strong>Bloqueio:</strong>
    <span style="font-size:1.15rem;font-weight:bold;color:#2c662d;">
        ${bloqueioFinal.toFixed(1)}%
    </span>
    <span style="color:#2c662d;font-weight:bold;">
        (+${ganhoBloqueio.toFixed(1)}%)
    </span>
</p>
`;
    }

    document.getElementById('res-tipo-label').innerText =
        "Laudo Técnico do Equipamento:";
}

    document.getElementById('res-status-final').innerHTML = laudoHtml;
    document.getElementById('res-ganho-liquido').innerText = `Simulação para +${nivelAlvo} Concluída`;
    document.getElementById('res-gold-taxa').innerText = custoGold.toLocaleString('pt-BR') + " Gold";
    document.getElementById('res-sheltons-receita').innerText = RECEITAS_SHELTONS_EXATAS[nivelAlvo] || "Não mapeado";
    
    const painelSegurança = document.getElementById('res-seguranca-texto');
    painelSegurança.innerText = seguridadTexto;
    painelSegurança.style.color = seguridadeCor;

    document.getElementById('resultado-aging').style.display = 'block';
}

window.onload = function() {
    popularItensEspecificos();
};



function filtrarMissoes(intervalo) {
    const missoes = document.querySelectorAll('.missao-item');
    
    missoes.forEach(missao => {
        const lvl = parseInt(missao.getAttribute('data-level'));
        let mostrar = false;
        
        if (intervalo === 'todas') {
            mostrar = true;
        } else if (intervalo === '1-40' && lvl <= 40) {
            mostrar = true;
        } else if (intervalo === '41-80' && lvl >= 41 && lvl <= 80) {
            mostrar = true;
        } else if (intervalo === '81-110' && lvl >= 81 && lvl <= 110) {
            mostrar = true;
        } else if (intervalo === '111-140' && lvl >= 111 && lvl <= 140) {
            mostrar = true;
        } else if (intervalo === '141+' && lvl >= 141) {
            mostrar = true;
        }

        // A MUDANÇA ESTÁ AQUI: usamos 'block' para mostrar e 'none' para esconder
        // Usamos .style.display = '' para limpar o estilo inline se necessário
        if (mostrar) {
            missao.style.display = 'block';
        } else {
            missao.style.display = 'none';
        }
    });
}

// Executa ao carregar a página para garantir que as missões não fiquem ocultas por padrão
document.addEventListener('DOMContentLoaded', () => {
    filtrarMissoes('todas');
});




function toggleMenu() {
    const lista = document.getElementById('menu-lista');
    lista.classList.toggle('active');
}




// Fecha o menu ao clicar em qualquer lugar da tela
document.addEventListener('click', function(event) {
    const menuLista = document.getElementById('menu-lista');
    const menuToggle = document.querySelector('.menu-toggle');
    
    // Se o clique foi fora do menu e fora do botão de abrir, fecha o menu
    if (!menuLista.contains(event.target) && !menuToggle.contains(event.target)) {
        menuLista.classList.remove('active');
    }
});

// Também fecha ao clicar em um link do menu (para melhorar a UX)
document.querySelectorAll('#menu-lista li button').forEach(button => {
    button.addEventListener('click', () => {
        document.getElementById('menu-lista').classList.remove('active');
    });
});