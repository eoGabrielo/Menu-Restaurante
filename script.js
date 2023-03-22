const listaTodos = document.querySelector
("#listaTodos");
const listaLanches = document.querySelector("#listaLanches");
const listaPratos = document.querySelector("#listaPratos");
const listaBebidas = document.querySelector("#listaBebidas");

/*Lanches*/
const lanche01 = document.querySelector("#lanche01");
const lanche02 = document.querySelector("#lanche02");
const lanche03 = document.querySelector("#lanche03");
const lanche04 = document.querySelector("#lanche04");

/*Pratos*/
const prato01 = document.querySelector("#prato01");
const prato02 = document.querySelector("#prato02");
const prato03 = document.querySelector("#prato03");
const prato04 = document.querySelector("#prato04");

/*Bebidas*/
const bebida01 = document.querySelector("#bebida01");
const bebida02 = document.querySelector("#bebida02");
const bebida03 = document.querySelector("#bebida03");
const bebida04 = document.querySelector("#bebida04");

/*Bolos*/
const bolo01 = document.querySelector("#bolo01");
const bolo02 = document.querySelector("#bolo02");

/*Function Somente LANCHES*/
listaLanches.addEventListener("click", function() {

    lanche01.style.display = "flex";
    lanche02.style.display = "flex";
    lanche03.style.display = "flex";
    lanche04.style.display = "flex";

    prato01.style.display = "none";
    prato02.style.display = "none";
    prato03.style.display = "none";
    prato04.style.display = "none";

    bebida01.style.display = "none";
    bebida02.style.display = "none";
    bebida03.style.display = "none";
    bebida04.style.display = "none";

    bolo01.style.display = "none";
    bolo02.style.display = "none";

})

/*Function Somente PRATOS*/
listaPratos.addEventListener("click", function() {
    lanche01.style.display = "none";
    lanche02.style.display = "none";
    lanche03.style.display = "none";
    lanche04.style.display = "none";

    prato01.style.display = "flex";
    prato02.style.display = "flex";
    prato03.style.display = "flex";
    prato04.style.display = "flex";

    bebida01.style.display = "none";
    bebida02.style.display = "none";
    bebida03.style.display = "none";
    bebida04.style.display = "none";

    bolo01.style.display = "none";
    bolo02.style.display = "none";

})

/*Function Somente BEBIDAS*/
listaBebidas.addEventListener("click", function() {
    lanche01.style.display = "none";
    lanche02.style.display = "none";
    lanche03.style.display = "none";
    lanche04.style.display = "none";

    prato01.style.display = "none";
    prato02.style.display = "none";
    prato03.style.display = "none";
    prato04.style.display = "none";

    bebida01.style.display = "flex";
    bebida02.style.display = "flex";
    bebida03.style.display = "flex";
    bebida04.style.display = "flex";

    bolo01.style.display = "none";
    bolo02.style.display = "none";

})

/*Function Somente TODOS*/
listaTodos.addEventListener("click", function() {
    lanche01.style.display = "flex";
    lanche02.style.display = "flex";
    lanche03.style.display = "flex";
    lanche04.style.display = "flex";

    prato01.style.display = "flex";
    prato02.style.display = "flex";
    prato03.style.display = "flex";
    prato04.style.display = "flex";

    bebida01.style.display = "flex";
    bebida02.style.display = "flex";
    bebida03.style.display = "flex";
    bebida04.style.display = "flex";

    bolo01.style.display = "flex";
    bolo02.style.display = "flex";

})

