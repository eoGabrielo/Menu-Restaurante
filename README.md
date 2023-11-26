# Menu de Restaurante - Projeto Interativo

Este projeto oferece um sistema de menu para um restaurante, proporcionando a capacidade de filtrar os itens do cardápio por categorias através de botões de navegação.

## Conteúdo do Projeto

- **HTML (`index.html`)**: Define a estrutura da página web, incluindo seções para o menu, lista de categorias e cards dos itens do cardápio.

- **JavaScript (`script.js`)**: Desempenha o papel fundamental ao controlar a visibilidade dos itens do cardápio com base nas categorias selecionadas. Utiliza eventos de clique nos botões de navegação para realizar a filtragem.

## Como Utilizar

1. Abra o arquivo `index.html` em um navegador web.
2. Explore as diferentes categorias do menu, como "Lanches", "Pratos", "Bebidas" e "Bolos".
3. Ao clicar em uma categoria específica, apenas os itens relacionados a essa categoria serão exibidos no cardápio.

## Itens do Cardápio

O cardápio contém uma variedade de itens fictícios, cada um com uma imagem, uma descrição e um preço.

Este projeto representa uma abordagem simples e interativa para um sistema de menu de restaurante, proporcionando uma experiência dinâmica na visualização do cardápio.

Menu Interativo - JavaScript
O arquivo JavaScript (script.js) desempenha um papel crucial na dinâmica do menu, controlando a visibilidade dos itens do cardápio com base nas categorias selecionadas. Aqui estão os principais pontos do código:

Seleção de Elementos HTML
javascript
Copy code
const listaTodos = document.querySelector("#listaTodos");
const listaLanches = document.querySelector("#listaLanches");
const listaPratos = document.querySelector("#listaPratos");
const listaBebidas = document.querySelector("#listaBebidas");
Essas linhas de código realizam a seleção dos elementos HTML relacionados aos botões de navegação e categorias do menu, permitindo manipulações dinâmicas.

Seleção de Itens do Cardápio
javascript
Copy code
const lanche01 = document.querySelector("#lanche01");
const lanche02 = document.querySelector("#lanche02");
// ... (outros itens)
Cada item do cardápio é individualmente selecionado, possibilitando a manipulação independente da visibilidade de cada elemento.

Funções de Filtragem por Categoria
javascript
Copy code
listaLanches.addEventListener("click", function() {
    // Código para exibir apenas itens da categoria "Lanches" e ocultar outros
});

listaPratos.addEventListener("click", function() {
    // Código para exibir apenas itens da categoria "Pratos" e ocultar outros
});

listaBebidas.addEventListener("click", function() {
    // Código para exibir apenas itens da categoria "Bebidas" e ocultar outros
});

listaTodos.addEventListener("click", function() {
    // Código para exibir todos os itens do cardápio
});
Cada função é acionada pelo evento de clique nos botões de navegação correspondentes a cada categoria do menu. O código dentro dessas funções controla quais itens do cardápio são exibidos ou ocultados com base na categoria selecionada.

Essas são as partes fundamentais do código JavaScript que oferecem a funcionalidade de filtragem do menu. As funções são ativadas dinamicamente à medida que o usuário interage com os botões de navegação, proporcionando uma experiência interativa ao explorar o cardápio.
