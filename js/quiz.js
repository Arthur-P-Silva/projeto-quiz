// PARTE 1: Lista de perguntas e respostas
perguntas = [
    {
      pergunta: "Em que ano o Guarani Futebol Clube foi fundado?",
      respostas: [
        { opcao: "1910", correto: false },
        { opcao: "1911", correto: true },
        { opcao: "1949", correto: false },
        { opcao: "1978", correto: false }
      ]
    },
    {
    pergunta: "Em que ano O Guarani foi campeão brasileiro da serie A?",
    respostas: [
      {opcao: "1911", correto: false},
      {opcao: "1971", correto: false},
      {opcao: "1978", correto: true},
      {opcao: "1981", correto: false},
    ]
    },
    {
        pergunta: "Quem é o maior artilheiro da história do Guarani",
        respostas: [
            {opcao: "Careca", correto: false},
            {opcao: "Fumagalli", correto: false},
            {opcao: "Jorge Mendonça", correto: false},
            {opcao: "Zuza", correto: true}
        ]
    },
    {
        pergunta: "Qual nome do estádio do Guarani",
        respostas: [
            {opcao: "Brinco de ouro da princesa", correto: true},
            {opcao: "Moça bonita", correto: false},
            {opcao: "Pastinho", correto: false},
            {opcao: "Arena Guarani", correto: false}
        ]
    },
    {
        pergunta: "Qual jogador mais vezes vestiu a camisa do Guarani?",
        respostas: [
            {opcao: "Joca", correto: true},
            {opcao: "Zuza", correto: false},
            {opcao: "Fumagalli", correto: false},
            {opcao: "Neneca", correto: false}
        ]
    },
    {
        pergunta: "Quantas vezes o Guarani jogou a libertadores?",
        respostas: [
            {opcao: "2", correto: false},
            {opcao: "3", correto: true},
            {opcao: "4", correto: false},
            {opcao: "1", correto: false}
        ]
    },
    {
        pergunta: "Quem é o técnico que mais comandou o Guarani Futebol Clube em toda sua história?",
        respostas: [
            {opcao: "Carlos Alberto Silva", correto: false},
            {opcao: "Jair Picerni", correto: false},
            {opcao: "Vadão", correto: false},
            {opcao: "Zé Duarte", correto: true}
        ]
    },
    {
        pergunta: "Qual jogo detém o recorde de público do Brinco de Ouro?",
        respostas: [
            {opcao: "Guarani 2 x 3 Flamengo 1982", correto: true},
            {opcao: "Brasil 2 x 1 Búlgaria 1981", correto: false},
            {opcao: "Guarani 1 x 0 Palmeiras 1978", correto: false},
            {opcao: "Guarani 2 x 0 Avaí 2005", correto: false}
        ]
    },
    {
        pergunta: "Quais adversários o Guarani enfrentou no mata-mata do brasilerão de 1978?",
        respostas: [
            {opcao: "Internacional, Vasco Palmeiras", correto: false},
            {opcao: "Vasco, São Paulo, Palmeiras", correto: false},
            {opcao: "Sport, Vasco, Palmeiras", correto: true},
            {opcao: "São Paulo, Internacional, Palmeiras", correto: false}
        ]
    },
    {
        pergunta: "Qual clube o Guarani enfrentou, e venceu na final da taça de prata de 1981?",
        respostas: [
            {opcao: "Comercial-MS", correto: false},
            {opcao: "Anapolina", correto: true},
            {opcao: "Coritiba", correto: false},
            {opcao: "Remo", correto: false}
        ]
    },
  ];
  
  // PARTE 2: Pegando os elementos do HTML
  const perguntaElemento = document.querySelector(".pergunta");
  const respostasElemento = document.querySelector(".respostas");
  const progressoElemento = document.querySelector(".progresso");
  const textoFinal = document.querySelector(".fim span");
  const conteudo = document.querySelector(".conteudo");
  const conteudoFinal = document.querySelector(".fim");
  
  // PARTE 3: Variáveis para controle do jogo
  let indiceAtual = 0; // Índice da pergunta atual
  let acertos = 0; // Contador de acertos
  
  // PARTE 4: Função para carregar uma nova pergunta
  function carregarPergunta() {
    progressoElemento.innerHTML = `${indiceAtual + 1}/${perguntas.length}`; // Atualiza o progresso
    const perguntaAtual = perguntas[indiceAtual]; // Pega a pergunta atual
    perguntaElemento.innerHTML = perguntaAtual.pergunta; // Exibe a pergunta
    
  
    respostasElemento.innerHTML = ""; // Limpa as respostas anteriores
  
    // Percorre todas as respostas da pergunta atual
    for (let i = 0; i < perguntaAtual.respostas.length; i++) {
      // Pega a resposta atual com base no índice 'i'
      const resposta = perguntaAtual.respostas[i];
      // Cria um novo elemento 'button' (botão)
      const botao = document.createElement("button");
      // Adiciona a classe CSS 'botao-resposta' ao botão para estilizar
      botao.classList.add("botao-resposta");
      // Define o texto do botão com a opção de resposta (resposta.opcao)
      botao.innerText = resposta.opcao;
      // Adiciona um evento de clique no botão
      botao.onclick = function () {
        const botoes = respostasElemento.querySelectorAll('button');
        //Mostra qual a resposta correta em verde e errada em vermelho
        botoes.forEach((btn, idx) => { //Usamos o forEach para percorrer todos os botões de respostas e idx é o índice dele (a posição na lista de respostas 0,1,2,3)
          if (perguntaAtual.respostas[idx].correto) { 
            btn.style.background = "green";
            btn.classList.add("botao-correto"); 
          } else {
            btn.style.background = "red";
            btn.classList.add("botao-errado"); //classList.add é uma forma de adicionar uma classe CSS a um elemento HTML via JavaScript
          }
          btn.disabled = true; // desativa todos os botões após o clique
      });
      
        if (resposta.correto) {
          let som = new Audio('./som/certo.mp3');
            som.play();
          acertos = acertos + 1;// Incrementa o contador de acertos
        }else{
          let som = new Audio('./som/errado.mp3');
          som.play();
        }
 
        // Se ainda houver perguntas, carrega a próxima pergunta
        setTimeout(() => {
        // Avança para a próxima pergunta mas devido ao setTimeout 1000, apenas após 1 segundo
        indiceAtual++;
        if (indiceAtual < perguntas.length) {
          carregarPergunta(); // Carrega a próxima pergunta
        } else {
          // Se não houver mais perguntas, finaliza o jogo
          finalizarJogo();
        }
      }, 1000);
      };
  
      // Adiciona o botão de resposta à tela, dentro do elemento 'respostasElemento'
      respostasElemento.appendChild(botao);
    }
  }
  
  // PARTE 5: Função para mostrar a tela final
  function finalizarJogo() {
    if (acertos>5){
        textoFinal.innerHTML = `<strong>PARABÉNS!</strong> VOCÊ ACERTOU ${acertos} DE ${perguntas.length}`; //exibe mesnagem de resultado final
        let som = new Audio('./som/bugraoHino1.mp3');
            som.play();
    }else{
        textoFinal.innerHTML = `<strong>VERGONHA!</strong> VOCÊ ACERTOU APENAS ${acertos} DE ${perguntas.length}`;
        let som = new Audio('./som/VERGONHA.mp3');
            som.play();
    }
    conteudo.style.display = "none"; // Esconde as perguntas
    conteudoFinal.style.display = "flex"; // Mostra a tela final
  }
  
  // PARTE 6: Iniciando o jogo pela primeira vez
  carregarPergunta();
  
  //Parte 7: Reiniciando jogo
  document.getElementById("reset").addEventListener('click', reiniciar)

  function reiniciar(){
    indiceAtual = 0;
    acertos = 0;
    conteudo.style.display = "flex"; // Mostra novamente as perguntas
    conteudoFinal.style.display = "none"; // Esconde o resultado final
    carregarPergunta(); // Recomeça o quiz
  }
