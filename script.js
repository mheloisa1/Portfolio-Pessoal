const botaoVerMais = document.getElementById("btn-ver-mais");

const conteudoExtra = document.getElementById("conteudo-extra");

botaoVerMais.addEventListener("click", function () {

  const novoParagrafo = document.createElement("p");

    novoParagrafo.textContent =
        "Estou em processo de aprendizado e desenvolvimento profissional.";

    conteudoExtra.appendChild(novoParagrafo);

});

let mostrandoMais = false;

botaoVerMais.addEventListener("click", function () {

   if (mostrandoMais === false) {

       const novoParagrafo = document.createElement("p");

      conteudoExtra.appendChild(novoParagrafo);

      botaoVerMais.textContent = "Ver menos";

        mostrandoMais = true;

    } else {

        conteudoExtra.innerHTML = "";

        botaoVerMais.textContent = "Ver mais";

        mostrandoMais = false;
    }

});
