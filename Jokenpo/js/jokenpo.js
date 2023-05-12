//Seleciona todos os botões (Pedra, Pepel e Tesoura)
const papel = document.querySelector('.papel');
const pedra = document.querySelector('.pedra');
const tesoura = document.querySelector('.tesoura');

//Seleciona a div que receberá a mão inimiga
let inimigo = document.querySelector('.maoini');

//Variaveis que receberam ++ para pontuação
let pontIni = 0;
let pontPer = 0;

//Evento do click do botão Papel
const Papel = () => {

   //Zera o texto escrito no título
   document.querySelector('h1').innerHTML = ' ';

   //Deixa todos os itens escondidos para exibir a animação
   document.querySelector('.div-btn').style.display = 'none';
   document.querySelector('.tesoura').style.display = 'none';
   document.querySelector('.pedra').style.display = 'none';

   //Começa a animação
   setTimeout(() => {

      //Zera o texto escrito no título
      document.querySelector('h1').innerHTML = ' ';
      setTimeout(() => {

         //Começa a contagem
         document.querySelector('h1').innerHTML = '3';
         document.querySelector('h1').style.animation = 'jokenpo 1s linear';
         document.querySelector('h1').style.textShadow = "6px 5px 0px rgb(105, 0, 0)";

         setTimeout(() => {

            //Começa a contagem
            document.querySelector('h1').innerHTML = '2';
            document.querySelector('h1').style.animation = 'jokenpo2 1s linear';
            document.querySelector('h1').style.textShadow = "6px 5px 0px rgb(119, 119, 0)";

            setTimeout(() => {
               //Começa a contagem
               document.querySelector('h1').innerHTML = '1';
               document.querySelector('h1').style.animation = 'jokenpo3 1s linear';
               document.querySelector('h1').style.textShadow = "6px 5px 0px rgb(0, 0, 56)";

               setTimeout(() => {
                  //Começa a contagem
                  document.querySelector('h1').innerHTML = 'Go';
                  document.querySelector('h1').style.animation = 'jokenpo4 1s linear';
                  document.querySelector('h1').style.textShadow = "6px 5px 0px rgb(4, 32, 4)";

                  setTimeout(() => {
                     //Zera o texto escrito no título
                     document.querySelector('h1').innerHTML = ' ';

                     //Exibe a div dos botões
                     document.querySelector('.div-btn').style.display = 'flex';

                     //Desabilita o evento do click do botão papel
                     papel.setAttribute('disabled', '');

                     //Desativa o hover dos botões
                     document.querySelector('.div-btn').style.pointerEvents = "none";
                     document.querySelector('.btn').style.pointerEvents = "none";

                     //Redefine alguns estilos da div dos botões
                     document.querySelector('.div-btn').style.top = '80vh';
                     document.querySelector('.div-btn').style.width = '42vw';
                     document.querySelector('.div-btn').style.height = '40vh';

                     //Redefine alguns estilos da div do inimigo
                     document.querySelector('.div-ini').style.display = 'flex';
                     document.querySelector('.div-ini').style.width = '42vw';
                     document.querySelector('.div-ini').style.height = '40vh';

                     //Exibe a div de pontuação
                     document.querySelector('.pontuacao').style.display = 'flex';

                     //Rota a verificação de Vitória ou Derrota
                     vitoria();

                     //Começa o loop para voltar tudo ao começo
                     let loop = setTimeout(() => {

                        //Abilita o evento de click novamente
                        papel.removeAttribute('disabled');

                        //Aciona novamente o hover dos botões
                        document.querySelector('.div-btn').style.pointerEvents = "auto";
                        document.querySelector('.btn').style.pointerEvents = "auto";

                        //Esconde os elementos
                        document.querySelector('.pontuacao').style.display = 'none';
                        document.querySelector('.div-ini').style.display = 'none';
                        document.querySelector('.papel').style.display = 'none';

                        //Adiciona novamente o titúlo e o seu estilo de tamanho
                        document.querySelector('h1').innerHTML = 'Escolha uma mão';
                        document.querySelector('h1').style.fontSize = '38pt';
                        document.querySelector('h1').style.textShadow = "6px 5px 0px black";

                        //Exibe a div para logo após exibir os botões
                        document.querySelector('.div-btn').style.display = 'flex';

                        //Exibe os botões novamente 
                        document.querySelector('.papel').style.display = 'block';
                        document.querySelector('.pedra').style.display = 'block';
                        document.querySelector('.tesoura').style.display = 'block';

                        //Readiciona alguns estilos para a div dos botões
                        document.querySelector('.div-btn').style.top = '75%';
                        document.querySelector('.div-btn').style.left = '50%';
                        document.querySelector('.div-btn').style.width = '100%';
                        document.querySelector('.div-btn').style.height = '50vh';

                     }, 4500);
                  }, 1300);
               }, 1200);
            }, 1100);
         }, 1000);
      }, 500);
   }, 1000);

   //Sorteia aleatóriamente a mão que será jogada
   const maoIni = Math.floor(Math.random() * 3);

   //Faz a verificação das mãos
   if (maoIni == 0) {
      //Você ganha
      pontPer++;
      document.querySelector('#pontPer').innerHTML = pontPer;
      document.querySelector('.maoini').src = "https://www.playclick.com.br/jogo_jokenpo/img/pedra.png";
   } else if (maoIni == 1) {
      //Você perde
      pontIni++;
      document.querySelector('#pontIni').innerHTML = pontIni;
      document.querySelector('.maoini').src = 'https://www.playclick.com.br/jogo_jokenpo/img/tesoura.png';
   } else if (maoIni == 2) {
      //Você empata
      document.querySelector('.maoini').src = 'https://www.playclick.com.br/jogo_jokenpo/img/papel.png';
   }
};

const Pedra = () => {

   //Zera o texto escrito no título
   document.querySelector('h1').innerHTML = ' ';

   //Deixa todos os itens escondidos para exibir a animação
   document.querySelector('.div-btn').style.display = 'none';
   document.querySelector('.tesoura').style.display = 'none';
   document.querySelector('.papel').style.display = 'none';

   //Começa a animação
   setTimeout(() => {

      //Zera o texto escrito no título
      document.querySelector('h1').innerHTML = ' ';
      setTimeout(() => {

         //Começa a contagem
         document.querySelector('h1').innerHTML = '3';
         document.querySelector('h1').style.animation = 'jokenpo 1s linear';
         document.querySelector('h1').style.textShadow = "6px 5px 0px rgb(105, 0, 0)";

         setTimeout(() => {

            //Começa a contagem
            document.querySelector('h1').innerHTML = '2';
            document.querySelector('h1').style.animation = 'jokenpo2 1s linear';
            document.querySelector('h1').style.textShadow = "6px 5px 0px rgb(119, 119, 0)";

            setTimeout(() => {
               //Começa a contagem
               document.querySelector('h1').innerHTML = '1';
               document.querySelector('h1').style.animation = 'jokenpo3 1s linear';
               document.querySelector('h1').style.textShadow = "6px 5px 0px rgb(0, 0, 56)";

               setTimeout(() => {
                  //Começa a contagem
                  document.querySelector('h1').innerHTML = 'Go';
                  document.querySelector('h1').style.animation = 'jokenpo4 1s linear';
                  document.querySelector('h1').style.textShadow = "6px 5px 0px rgb(4, 32, 4)";

                  setTimeout(() => {
                     //Zera o texto escrito no título
                     document.querySelector('h1').innerHTML = ' ';

                     //Exibe a div dos botões
                     document.querySelector('.div-btn').style.display = 'flex';

                     //Desabilita o evento do click do botão papel
                     pedra.setAttribute('disabled', '');

                     //Desativa o hover dos botões
                     document.querySelector('.div-btn').style.pointerEvents = "none";
                     document.querySelector('.btn').style.pointerEvents = "none";

                     //Redefine alguns estilos da div dos botões
                     document.querySelector('.div-btn').style.top = '80vh';
                     document.querySelector('.div-btn').style.width = '42vw';
                     document.querySelector('.div-btn').style.height = '40vh';

                     //Redefine alguns estilos da div do inimigo
                     document.querySelector('.div-ini').style.display = 'flex';
                     document.querySelector('.div-ini').style.width = '42vw';
                     document.querySelector('.div-ini').style.height = '40vh';

                     //Exibe a div de pontuação
                     document.querySelector('.pontuacao').style.display = 'flex';

                     //Rota a verificação de Vitória ou Derrota
                     vitoria();

                     //Começa o loop para voltar tudo ao começo
                     let loop = setTimeout(() => {

                        //Abilita o evento de click novamente
                        pedra.removeAttribute('disabled');

                        //Aciona novamente o hover dos botões
                        document.querySelector('.div-btn').style.pointerEvents = "auto";
                        document.querySelector('.btn').style.pointerEvents = "auto";

                        //Esconde os elementos
                        document.querySelector('.pontuacao').style.display = 'none';
                        document.querySelector('.div-ini').style.display = 'none';
                        document.querySelector('.pedra').style.display = 'none';

                        //Adiciona novamente o titúlo e o seu estilo de tamanho
                        document.querySelector('h1').innerHTML = 'Escolha uma mão';
                        document.querySelector('h1').style.fontSize = '38pt';
                        document.querySelector('h1').style.textShadow = "6px 5px 0px black";

                        //Exibe a div para logo após exibir os botões
                        document.querySelector('.div-btn').style.display = 'flex';

                        //Exibe os botões novamente 
                        document.querySelector('.papel').style.display = 'block';
                        document.querySelector('.pedra').style.display = 'block';
                        document.querySelector('.tesoura').style.display = 'block';

                        //Readiciona alguns estilos para a div dos botões
                        document.querySelector('.div-btn').style.top = '75%';
                        document.querySelector('.div-btn').style.left = '50%';
                        document.querySelector('.div-btn').style.width = '100%';
                        document.querySelector('.div-btn').style.height = '50vh';

                     }, 4500);
                  }, 1300);
               }, 1200);
            }, 1100);
         }, 1000);
      }, 500);
   }, 1000);


   //Sorteia aleatóriamente a mão que será jogada      
   const maoIni = Math.floor(Math.random() * 3);

   if (maoIni == 0) {
      //Você ganha
      document.querySelector('.maoini').src = "https://www.playclick.com.br/jogo_jokenpo/img/tesoura.png";
      pontPer++;
      document.querySelector('#pontPer').innerHTML = pontPer;

   } else if (maoIni == 1) {
      //Você perde
      document.querySelector('.maoini').src = 'https://www.playclick.com.br/jogo_jokenpo/img/papel.png';
      pontIni++;
      document.querySelector('#pontIni').innerHTML = pontIni;

   } else if (maoIni == 2) {
      //Você empata
      document.querySelector('.maoini').src = 'https://www.playclick.com.br/jogo_jokenpo/img/pedra.png';
   }
}

const Tesoura = () => {

   //Zera o texto escrito no título
   document.querySelector('h1').innerHTML = ' ';

   //Deixa todos os itens escondidos para exibir a animação
   document.querySelector('.div-btn').style.display = 'none';
   document.querySelector('.papel').style.display = 'none';
   document.querySelector('.pedra').style.display = 'none';

   //Começa a animação
   setTimeout(() => {

      //Zera o texto escrito no título
      document.querySelector('h1').innerHTML = ' ';
      setTimeout(() => {

         //Começa a contagem
         document.querySelector('h1').innerHTML = '3';
         document.querySelector('h1').style.animation = 'jokenpo 1s linear';
         document.querySelector('h1').style.textShadow = "6px 5px 0px rgb(105, 0, 0)";

         setTimeout(() => {

            //Começa a contagem
            document.querySelector('h1').innerHTML = '2';
            document.querySelector('h1').style.animation = 'jokenpo2 1s linear';
            document.querySelector('h1').style.textShadow = "6px 5px 0px rgb(119, 119, 0)";

            setTimeout(() => {
               //Começa a contagem
               document.querySelector('h1').innerHTML = '1';
               document.querySelector('h1').style.animation = 'jokenpo3 1s linear';
               document.querySelector('h1').style.textShadow = "6px 5px 0px rgb(0, 0, 56)";

               setTimeout(() => {
                  //Começa a contagem
                  document.querySelector('h1').innerHTML = 'Go';
                  document.querySelector('h1').style.animation = 'jokenpo4 1s linear';
                  document.querySelector('h1').style.textShadow = "6px 5px 0px rgb(4, 32, 4)";

                  setTimeout(() => {
                     //Zera o texto escrito no título
                     document.querySelector('h1').innerHTML = ' ';

                     //Exibe a div dos botões
                     document.querySelector('.div-btn').style.display = 'flex';

                     //Desabilita o evento do click do botão papel
                     tesoura.setAttribute('disabled', '');

                     //Desativa o hover dos botões
                     document.querySelector('.div-btn').style.pointerEvents = "none";
                     document.querySelector('.btn').style.pointerEvents = "none";

                     //Redefine alguns estilos da div dos botões
                     document.querySelector('.div-btn').style.top = '80vh';
                     document.querySelector('.div-btn').style.width = '42vw';
                     document.querySelector('.div-btn').style.height = '40vh';

                     //Redefine alguns estilos da div do inimigo
                     document.querySelector('.div-ini').style.display = 'flex';
                     document.querySelector('.div-ini').style.width = '42vw';
                     document.querySelector('.div-ini').style.height = '40vh';

                     //Exibe a div de pontuação
                     document.querySelector('.pontuacao').style.display = 'flex';

                     //Rota a verificação de Vitória ou Derrota
                     vitoria();

                     //Começa o loop para voltar tudo ao começo
                     let loop = setTimeout(() => {

                        //Abilita o evento de click novamente
                        tesoura.removeAttribute('disabled');

                        //Aciona novamente o hover dos botões
                        document.querySelector('.div-btn').style.pointerEvents = "auto";
                        document.querySelector('.btn').style.pointerEvents = "auto";

                        //Esconde os elementos
                        document.querySelector('.pontuacao').style.display = 'none';
                        document.querySelector('.div-ini').style.display = 'none';
                        document.querySelector('.tesoura').style.display = 'none';

                        //Adiciona novamente o titúlo e o seu estilo de tamanho
                        document.querySelector('h1').innerHTML = 'Escolha uma mão';
                        document.querySelector('h1').style.fontSize = '38pt';
                        document.querySelector('h1').style.textShadow = "6px 5px 0px black";

                        //Exibe a div para logo após exibir os botões
                        document.querySelector('.div-btn').style.display = 'flex';

                        //Exibe os botões novamente 
                        document.querySelector('.papel').style.display = 'block';
                        document.querySelector('.pedra').style.display = 'block';
                        document.querySelector('.tesoura').style.display = 'block';

                        //Readiciona alguns estilos para a div dos botões
                        document.querySelector('.div-btn').style.top = '75%';
                        document.querySelector('.div-btn').style.left = '50%';
                        document.querySelector('.div-btn').style.width = '100%';
                        document.querySelector('.div-btn').style.height = '50vh';

                     }, 4500);
                  }, 2000);
               }, 1200);
            }, 1100);
         }, 1000);
      }, 500);
   }, 1000);


   //Sorteia aleatóriamente a mão que será jogada      
   const maoIni = Math.floor(Math.random() * 3);

   if (maoIni == 2) {
      //Você ganha
      document.querySelector('.maoini').src = "https://www.playclick.com.br/jogo_jokenpo/img/papel.png";
      pontPer++;
      document.querySelector('#pontPer').innerHTML = pontPer;

   } else if (maoIni == 0) {
      //Você perde
      document.querySelector('.maoini').src = 'https://www.playclick.com.br/jogo_jokenpo/img/pedra.png';
      pontIni++;
      document.querySelector('#pontIni').innerHTML = pontIni;

   } else if (maoIni == 1) {
      //Você empata
      document.querySelector('.maoini').src = 'https://www.playclick.com.br/jogo_jokenpo/img/tesoura.png';
   }
}

//Checador de pontos
const vitoria = () => {
   if (document.querySelector('#pontPer').innerHTML == 10) {
      setTimeout(() => {
         document.querySelector(".vitoria").style.display = "block";
         document.querySelector(".vitoria").style.backgroundImage = "url('https://www.bing.com/th/id/OGC.ea1cd374ef35f8a51e119c043c8f14a2?pid=1.7&rurl=https%3a%2f%2facegif.com%2fwp-content%2fgif%2fconfetti-25.gif&ehk=7rtvNaZFd2MThfvQ0z5YxXm6GULJwmNGeDq2Dx4%2bBLU%3d')";
         document.querySelector(".again").src = "https://icons.iconarchive.com/icons/custom-icon-design/flatastic-9/512/Clockwise-arrow-icon.png";
         document.querySelector(".sair").src = "https://cdn3.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-1/254000/56-512.png";
         document.querySelector(".vitoria").style.border = '1px solid green';
         document.querySelector("#sair").style.border = '1px solid green';
         document.querySelector("#sair").style.color = 'green';
         document.querySelector("#status").innerHTML = "Você Ganhou!";
         document.querySelector("#status").style.color = 'green';
         document.querySelector("#again").style.border = '1px solid green';
         document.querySelector("#again").style.color = 'green';
      }, 1000);

      clearTimeout(loop);

   } else if (document.querySelector('#pontIni').innerHTML == 10) {
      setTimeout(() => {
         document.querySelector(".again").src = "https://cdn-icons-png.flaticon.com/512/3240/3240718.png";
         document.querySelector(".sair").src = "https://icones.pro/wp-content/uploads/2022/07/symbole-de-puissance-et-d-energie-rouge.png";
         document.querySelector(".vitoria").style.display = "block";
         document.querySelector(".vitoria").style.border = '1px solid red';
         document.querySelector("#again").style.border = '1px solid red';
         document.querySelector("#status").innerHTML = "Você Perdeu!";
         document.querySelector("#status").style.color = 'red';
      }, 1500);

      clearTimeout(loop);
   }
}

const Again = () => {
   window.location.reload();
};

const Sair = () => {
   window.location.href = "init.html";
};