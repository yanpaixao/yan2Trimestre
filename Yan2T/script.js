const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "como que a inteligencia artificial pode contribuir para nossa sociedade ?",
        alternativas: [
            "pode automatizar tarefas repetitivas e demoradas, liberando tempo para que as pessoas se encontrem em atividades mais recreativas e estrategicas.",
            "pode analizar grandes quantiades de dados para entender preferencia e padroes de comportamento individual."
        ]

    },

    {
        enunciado: "qual e os maleficios da inteligencia artificial?",
        alternativas: [
            "perda de enprego a medida que a ia se torna mais avançada é capaz de realizar tarefas que antes erao feitas por humanos",
            "falta de enpatia, sistema de ia podem nao ser capazes de entender a empatia com as emoçoes humanas"
        ]
    },



    {
        enunciado: "como podemos usar a inteligencia artificial no nosso dia a dia?",
        alternativas: [
            "asistente pessoal,navagaçao,emtreterimento.",
            "comercio,saúde,finanças"
        ]
    },


    {
        enunciado: "a inteligencia artificial é importante oje em dia?",
        alternativas: [
            "sim, por conta da eficiencia para a procura de resposta imediatas. ",
            "sim, pode analizar grandes quantidades de dados para atender preferencias e padroes de comportamento individual."
        ]
    },


    {
        enunciado: "quanto tempo pode durar o programa de inteligencia artificial?",
        alternativas: [
            "pode variar amplamente depemdendo do tamanho e complexidade do programa",
            "o tempk de execuçao de um programa de ia tabem pode ser imfluenciado por conta de fatores como a velocidade de procesamento disponivel."
        ]
    },
];


let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}
function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativa.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();
