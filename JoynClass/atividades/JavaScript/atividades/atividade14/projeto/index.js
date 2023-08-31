//index.js
(async () => {
    const database = require('./db');
    const Produto = require('./produto');

    try {
        const resultado = await database.sync();
        console.log(resultado);

        const resultadoCreate = await Produto.create({
            nome: 'mouse',
            preco: 10,
            descricao: 'Ergonomico'
        })
        console.log(resultadoCreate);
    } catch (error) {
        console.log(error);
    }
})();