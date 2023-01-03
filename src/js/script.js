let secaoVitrine = document.getElementsByClassName("produtoslista")[0];

function mostrarProduto(listaProdutos, secao) {
    secao.innerHTML = " ";
    for (let i = 0; i < listaProdutos.length; i++) {
        let produto = listaProdutos[i];

        adicionarProdutos(produto)
    }
}
mostrarProduto(produtos, secaoVitrine);

function adicionarProdutos(produtos) {

    let lista = document.createElement('li')
    let imagem = document.createElement('img')
    let nome = document.createElement('h3')
    let categoria = document.createElement('span')
    let preco = document.createElement('p')

    secaoVitrine.classList.add('ListaProdutos')
    lista.classList.add('lista')

    imagem.src = produtos.img
    nome.innerText = produtos.nome
    categoria.innerText = produtos.categoria
    preco.innerText = 'R$ ' + produtos.preco

    secaoVitrine.append(lista)
    lista.append(imagem, nome, categoria, preco)

    return lista
}

function buscar(valorPesquisa) {
    let resultado = [];

    for (let i = 0; i < produtos.length; i++) {
        let pesquisa = valorPesquisa.toLowerCase();
        let nomeProduto = produtos[i].nome.toLowerCase();

        if (nomeProduto.includes(pesquisa)) {
            resultado.push(produtos[i]);
        }
    }
    return resultado;
}

let inputBusca = document.querySelector(".campoBuscaPorNome");

inputBusca.addEventListener("keyup", function () {

    let pesquisaUsuario = inputBusca.value;

    let resultado = buscar(pesquisaUsuario);

    mostrarProduto(resultado, secaoVitrine);
    calcularTotal(resultado)

});

function calcularTotal(produto) {
    let total = 0;
    for (let i = 0; i < produto.length; i++) {
        total += produto[i].preco;

    }
    document.querySelector(".priceContainer span").innerText = "R$" + total;
}

// Botoes Filtrar por seçao ----

function filtrarSecao(event) {

    const filtrarPorSecao = produtos.filter((objeto) => {
        return objeto.secao === event
    })
    calcularTotal(filtrarPorSecao)
    mostrarProduto(filtrarPorSecao, secaoVitrine)
}
const botaoSecao = document.querySelectorAll('.estiloGeralBotoes--filter')

for (let i = 0; i < botaoSecao.length; i++) {

    botaoSecao[i].addEventListener("click", function (event) {
       
        let secao = event.target.innerText

        filtrarSecao(secao)
    });
}

//Botão mostrar todos ----

let botaoMostrarTodos = document.querySelector("#botoesContainer button");

botaoMostrarTodos.addEventListener("click", function () {

    mostrarProduto(produtos, secaoVitrine);
});
