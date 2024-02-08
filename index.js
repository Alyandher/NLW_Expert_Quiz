const perguntas = [
  {
    pergunta: "O que é JavaScript?",
    resposta: [
      "Uma linguagem de marcação",
      "Uma linguagem de programação",
      "Um framework",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a função do 'console.log()' em JavaScript?",
    resposta: [
      "Exibir uma mensagem na tela",
      "Capturar entrada do usuário",
      "Imprimir valores no console",
    ],
    correta: 2
  },
  {
    pergunta: "Qual símbolo é usado para comentar uma única linha em JavaScript?",
    resposta: [
      "//",
      "/*",
      "**",
    ],
    correta: 0
  },
  {
    pergunta: "Qual destas é uma estrutura de controle de fluxo em JavaScript?",
    resposta: [
      "if-else",
      "for-else",
      "switch-case",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a maneira correta de declarar uma variável em JavaScript?",
    resposta: [
      "var myVar = 10;",
      "let myVar = 10;",
      "const myVar = 10;",
    ],
    correta: 2
  },
  {
    pergunta: "Como você faz um loop através de um array em JavaScript?",
    resposta: [
      "for (i = 0; i < array.length; i++)",
      "for (i = 0; i <= array.length; i++)",
      "for (i = 1; i < array.length; i++)",
    ],
    correta: 0
  },
  {
    pergunta: "Qual função é usada para converter uma string em um número inteiro em JavaScript?",
    resposta: [
      "parseInt()",
      "parseFloat()",
      "toInteger()",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o operador usado para concatenar strings em JavaScript?",
    resposta: [
      "&",
      "+",
      "||",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o resultado de '5 == '5' em JavaScript?",
    resposta: [
      "true",
      "false",
      "Erro",
    ],
    correta: 0
  },
  {
    pergunta: "O que o método 'push()' faz em um array em JavaScript?",
    resposta: [
      "Remove o último elemento do array",
      "Adiciona um elemento no início do array",
      "Adiciona um elemento no final do array",
    ],
    correta: 2
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

  for(let resposta of item.resposta) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.resposta.indexOf(resposta)
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