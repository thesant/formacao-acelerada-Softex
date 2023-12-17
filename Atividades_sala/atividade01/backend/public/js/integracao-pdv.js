const vendas = [];

const id = document.getElementById('product-code');
id.addEventListener('keypress', async (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        await obterNomeDoProduto();
        adicionarLinhaVenda();
        atualizarSubtotal();
       
    }
    
});

function adicionarLinhaVenda() {
    const tabela = document.getElementById('table-vendas');
    const newRow = tabela.insertRow();

    for (let i = 0; i < 6; i++) {
        const cell = newRow.insertCell(i);
        cell.innerText = ''; 
    }
    vendas.forEach((item) => {

        newRow.cells[0].innerHTML  = `<p class="p-5 font-medium  whitespace-nowrap dark:text-black">${item.descricao }</p>`;
        newRow.cells[4].innerHTML = '<p class="p-5">1</p>';
        newRow.cells[5].innerHTML = `<p class="p-5 font-medium text-blue-600 dark:text-blue-500">${item.valor}</p>`;
       
    });
}

function atualizarSubtotal() {
    const subtotal = document.getElementById('subtotal');
    const total = vendas.reduce((accumulator, currentValue) => accumulator + parseFloat(currentValue.valor), 0);
    subtotal.innerHTML = total.toFixed(2);
    
}
document.addEventListener('keypress', (event) => {
    if (event.key === 's') {
        venda();
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

function venda() {
    const subtotal = document.getElementById('subtotal');
    const valorSubtotal = subtotal.innerText;
    const id_cliente = prompt('identifique o cliente: ');
    const formaDePagamento = prompt('Forma de Pagamento: ');
    
    const apiUrl = '/api/v1/create-venda';
    let data = {
        'id_cliente': parseInt(id_cliente),
        'forma_pgm': `${formaDePagamento}`,
        'valor_total': parseInt(valorSubtotal)
    };
    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            
        },
        body: JSON.stringify(data),
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('Success:', data);
        
        })
        .catch(error => {
            console.error('Error:', error);
    
        });
    
    alert(`cod cliente: ${id_cliente} \n forma de pagamento: ${formaDePagamento}\n Subtotal ${valorSubtotal} `);
}