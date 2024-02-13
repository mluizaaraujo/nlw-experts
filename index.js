const perguntas = [
  {
    pergunta: "Qual é o nome completo do personagem principal em Harry Potter?",
    respostas: [
      "Harry Weasley",
      "Harry Granger",
      "Harry Potter",
    ],
    correta: 2
  },
  {
    pergunta: "Qual casa em Hogwarts é conhecida por sua sabedoria e inteligência?",
    respostas: [
      "Grifinória",
      "Sonserina",
      "Corvinal",
    ],
    correta: 2
  },
  {
    pergunta: "Quem é o diretor de Hogwarts no primeiro filme da série?",
    respostas: [
      "Alvo Dumbledore",
      "Severo Snape",
      "Minerva McGonagall",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a varinha mágica de Harry Potter?",
    respostas: [
      "Varinha de Azevinho e Pena de Fênix",
      "Varinha de Carvalho e Pelo de Unicórnio",
      "Varinha de Cerejeira e Escama de Dragão",
    ],
    correta: 0
  },
  {
    pergunta: "Quem é o melhor amigo de Harry Potter?",
    respostas: [
      "Ron Weasley",
      "Hermione Granger",
      "Draco Malfoy",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o nome do vilão principal na série Harry Potter?",
    respostas: [
      "Lorde Voldemort",
      "Lúcio Malfoy",
      "Bellatrix Lestrange",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o esporte praticado em vassouras voadoras em Hogwarts?",
    respostas: [
      "Quadribol",
      "Voo Mágico",
      "Vassobol",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o animal de estimação de Hermione Granger?",
    respostas: [
      "Gato",
      "Sapo",
      "Coruja",
    ],
    correta: 2
  },
  {
    pergunta: "Quem é o professor de Defesa Contra as Artes das Trevas em 'A Pedra Filosofal'?",
    respostas: [
      "Gilderoy Lockhart",
      "Remo Lupin",
      "Dolores Umbridge",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o nome do feitiço usado para conjurar a varinha de um bruxo?",
    respostas: [
      "Accio",
      "Expecto Patronum",
      "Expelliarmus",
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