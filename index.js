const perguntas = [
  {
    pergunta: "Qual é a função do operador '===' em JavaScript?",
    respostas: [
      "Comparação estrita de valores e tipos",
      "Comparação solta de valores",
      "Atribuição de valores",
    ],
    correta: 0
  },
  {
    pergunta: "O que é uma closure em JavaScript?",
    respostas: [
      "Um loop que nunca termina",
      "Uma função que contém outra função, mantendo acesso ao escopo externo",
      "Um tipo de erro em tempo de execução",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a função do método 'map()' em arrays?",
    respostas: [
      "Filtra os elementos do array",
      "Mapeia os elementos do array para um novo array",
      "Ordena os elementos do array",
    ],
    correta: 1
  },
  {
    pergunta: "O que é o DOM em JavaScript?",
    respostas: [
      "Um modelo de desenvolvimento orientado a documentos",
      "Uma linguagem de programação",
      "A representação do documento HTML que o JavaScript pode manipular",
    ],
    correta: 2
  },
  {
    pergunta: "O que significa a sigla AJAX em JavaScript?",
    respostas: [
      "Asynchronous JavaScript and XML",
      "Advanced JavaScript and XML",
      "Asynchronous JavaScript and XHTML",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
    respostas: [
      "let variable = 10;",
      "variable = 10;",
      "const variable: 10;",
    ],
    correta: 0
  },
  {
    pergunta: "O que é o JSON em JavaScript?",
    respostas: [
      "Uma biblioteca de manipulação de DOM",
      "JavaScript Object Notation - um formato de dados leve",
      "Um método de ordenação de arrays",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a diferença entre 'let' e 'const' na declaração de variáveis?",
    respostas: [
      "Nenhuma diferença, são sinônimos",
      "'let' é usado para variáveis mutáveis, 'const' para variáveis imutáveis",
      "'const' é usado para variáveis globais, 'let' para variáveis locais",
    ],
    correta: 1
  },
  {
    pergunta: "O que é o operador ternário em JavaScript?",
    respostas: [
      "Um operador que compara três valores",
      "Um operador que realiza operações aritméticas",
      "Um operador condicional de três partes",
    ],
    correta: 2
  },
  {
    pergunta: "Qual método é usado para remover o último elemento de um array em JavaScript?",
    respostas: [
      "pop()",
      "shift()",
      "splice()",
    ],
    correta: 0
  },
];

  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // loop ou laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
  
        corretas.delete(item)
        if(estaCorreta) {
          corretas.add(item)
        }
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
  
      quizItem.querySelector('dl').appendChild(dt)
    }
  
    quizItem.querySelector('dl dt').remove()
  
    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }