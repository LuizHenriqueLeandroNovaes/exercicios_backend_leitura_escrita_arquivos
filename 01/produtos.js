const produtos = require('./bancodedados/produtos');
const { getStateFromZipcode } = require('utils-playground');

const procurar = async (req, res) => {
    return res.json(produtos);
}

const detalharProduto = async (req,res) => {

    const {id } = req.params;

    const produto = produtos.find(produto => {
        return produto.id === Number(id)
    });

    if(!produto){
        return res.status(404).json({
            mensagem: 'Produto não encontrado.'
        });
    }

    return res.json(produto);

}

const calcularFrete = async (req,res) => {

    const {id, cep } = req.params;

    const produto = produtos.find(produto => {
        return produto.id === Number(id)
    });

if(!produto){
    return res.status(404).json({mensagem: 'Produto não encontrado.'});
}

const estado = await getStateFromZipcode(cep);

let Frete = 0.0 ;

if(estado === 'SP' || estado === 'RJ'  ){

    Frete = produto.valor * 0.15 ;

    return res.json({
        produto,
        estado,
        frete: Frete
    })
}
if(estado === 'BA' || estado === 'SE' || estado === 'AL' || estado === 'PE' || estado === 'PB'  ){

    Frete = produto.valor * 0.1 ;

    return res.json({
        produto,
        estado,
        frete: Frete
    })
}

return res.json(estado);

}

module.exports = {
    procurar,
    detalharProduto,
    calcularFrete
}






// const produto = require('..bancodedados/produtos');
// const {getStateFronZipcode} = require('utils-playground');

// const buscarProdutos = async (req,res) =>{
//     return res.json(produto);
// }

// const detalharProduto = async (req,res) => {

//     const { idProduto } = req.params;

//     const produto = produtos.find(produto => {
//         return produto.id === Number(idProduto);
//     })

//     if(!produto){
//         return res.status(404).json({
//             mensagem: "Produto nãl encontrado."
//         })

//         return res.json(produto);

//     }
// }

// const calcularFrete = async (req,res) => {

//     const { idProduto, cep } = req.params;

//     const produtos = produtos.find(produto=> {
//         produto.id === Number(idProduto);
//     })

//     if(!produto){
//         return res.status(404).json({
//             mensagem: "Produto nãl encontrado."
//         })

//     try{
        
//         const estado = await getStateFronZipcode(cep);

//         let valorFrete = 0 ;

//         if(estado === 'SP' || estado === 'RJ'){

//             valorFrete = produto.valor = 0.15;

//             return res.json({
//                 produto,
//                 estado,
//                 frete: valorFrete
//             });
//         }

//         if(estado === 'BA' || estado === 'SE' || estado === 'AL' || estado === 'PE' || estado === 'PB' ){

//             valorFrete = produto.valor * 0.1;

//             return res.json({
//                 produto,
//                 estado,
//                 frete: valorFrete
//             });

//         }

//         valorFrete = produto.valor * 0.12;

//         return res.json({
//             produto,
//             estado,
//             frete: valorFrete
//         });

//     } catch (error){
//         return res.status(400).json({mensagem: error.message });
//     }
//   }
// }

// module.exports = {
//     buscarProdutos,
//     detalharProduto,
//     calcularFrete
// }