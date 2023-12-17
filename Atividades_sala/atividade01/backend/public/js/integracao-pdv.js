const vendas = [];

const id = document.getElementById('product-code');
id.addEventListener('keypress', async (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        await obterNomeDoProduto();
        adicionarLinhaVenda();
    }
    // if (vendas.length > 0) {
    //     const descricaoVendaProduto = document.getElementById('descricaoVendaProduto');
    //     const valorVendaProduto = document.getElementById('valorVendaProduto');
        
    //     descricaoVendaProduto.innerText = vendas[0].descricao;
    //     valorVendaProduto.innerText = vendas[0].valor;
    // } else {
    //     console.log('Nenhum item de venda disponível.');
    // }
    
});

function adicionarLinhaVenda() {
    const tabela = document.getElementById('table-vendas');
    const newRow = tabela.insertRow();
    
    for (let i = 0; i < 6; i++) {
        const cell = newRow.insertCell(i);
        cell.innerText = ''; 
    }
    vendas.forEach((item) => {

        verificarAdicionarClasseOverflow();
        newRow.cells[0].innerHTML  = `<p class="p-5 font-medium  whitespace-nowrap dark:text-black">${item.descricao }</p>`;
        newRow.cells[4].innerHTML = '<p class="p-5">1</p>';
        newRow.cells[5].innerHTML = `<p class="p-5 font-medium text-blue-600 dark:text-blue-500">${item.valor}</p>`;
    });
}

function verificarAdicionarClasseOverflow() {
    const tabela = document.getElementById('table-vendas'); // Substitua 'table-vendas' pelo ID correto da sua tabela

    if (tabela.rows.length >= 3) {
        tabela.classList.add( 'overflow-y-scroll');
    } else {
        tabela.classList.remove('overflow-y-scroll');
    }
}

document.addEventListener('keypress', (event) => {
    if (event.key === 's') {
        imprimirVendas();
    }
});


function imprimirVendas() {
    console.log('Itens do Array Vendas:');
    vendas.forEach((item, index) => {
        console.log(`Item ${index + 1}: Descrição - ${item.descricao}, Valor - ${item.valor}`);
    });
}

async function fetchData() {
    try {
        const url = `/api/v1/list-product/${id.value}`;
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erro ao obter dados da API:', error.message);
    }
}

async function obterNomeDoProduto() {
    try {
        const respostaDaPromise = await fetchData();
        const nomeDoProduto = respostaDaPromise.Produtos.nome;
        const precoDoProduto = respostaDaPromise.Produtos.valor;

        description(nomeDoProduto, precoDoProduto);
        vendas.push({
            descricao: nomeDoProduto,
            valor: precoDoProduto,
        });

    } catch (erro) {
        console.error('Erro ao obter o nome do produto:', erro.message);
    }
}

function description(desc, value) {
    const descricao = document.getElementById('product-information');
    const valor = document.getElementById('price-of-the-product');

    valor.innerHTML = `${value}`;
    descricao.innerHTML = `${desc}`;
}