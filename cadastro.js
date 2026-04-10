let filmes=[];

//Cadastro
document.getElementById("btnCadastrar").addEventListener("click", cadastrarFilme);
//document é o objeto que representa a página HTML no JavaScript e permite acessá-la e manipulá-la dentro da DOM.
//addEventListener serve para reagir a ações do usuário (clique, teclado, mouse, etc.)

//Filtros
document.getElementById("btnFiltrarClassificacao").addEventListener("click", filtrarClassificacao);
document.getElementById("btnFiltrarAno").addEventListener("click", filtrarAno);

function cadastrarFilme(){
    let titulo =  document.getElementById("titulo").value;
    let ano = document.getElementById("ano").value;
    let classificacao = document.getElementById("classificacao").value;

    //Validação
    if(titulo === "" || ano === "" || classificacao === ""){
        alert("Preencha todos os campos");
        return;
    }
    let filme = {
        titulo:titulo,
        ano:Number(ano),
        classificacao:classificacao
    };
    filmes.push(filme);
    limparCampos();
    exibirFilmes(filmes);
    //push é um método de array que adiciona um novo elemento no final da lista.
}
function exibirFilmes(lista){
    let texto = lista.map(f=>`${f.titulo} (${f.ano}) - Classificação: ${f.classificacao} `).join("<br>");
    document.getElementById("listaFilmes").innerHTML = texto;
    //Transforma uma lista de objetos em uma única string formatada usando map() (transforma) e join() (junta tudo).
}
//Filtrar Classificação
function filtrarClassificacao(){
    let filtro = document.getElementById("filtroClassificacao").value;
    let resultado = filmes.filter(f=>f.classificacao === filtro);
    exibirFilmes(resultado);
}
//Filtrar Ano
function filtrarAno(){
    let filtro = Number(document.getElementById("filtroAno"). value);
    let resultado = filmes.filter(f=>f.ano === filtro);
    exibirFilmes(resultado);
}
//Limpar Campos
function limparCampos(){
    document.getElementById("titulo").value = "";
    document.getElementById("ano").value = "";
    document.getElementById("classificacao").value = "";
    //value é o valor atual de um campo de formulário (input, textarea, select).
}
