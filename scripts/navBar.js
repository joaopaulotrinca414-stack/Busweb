document.addEventListener("DOMContentLoaded", () => {
    const navBarLinks = [
    "Logo",
    "Rotas",
    "Mapa",
    "Contato",
    "Sobre"
    ];
    const navBar = document.getElementsByClassName("nav-bar-links")[0];


    navBarLinks.forEach((textoAtual, indice) => {
        const elemento = document.createElement("li");
        const link = document.createElement("a");

        
        link.href = `/pages/${textoAtual.toLowerCase()}.html`;
        link.title = `Acessar ${textoAtual}`;

        if (textoAtual == "Logo"){
            const img = document.createElement("img");
            img.src = `/imagens/logo/logobus.svg`;
            link.href = `/index.html`

            link.appendChild(img);
        }
        else{
            link.textContent = textoAtual;
        }
     
        elemento.appendChild(link);
        navBar.appendChild(elemento);
    });
});
