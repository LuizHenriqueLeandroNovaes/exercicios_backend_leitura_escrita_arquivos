const { listarPokemons, detalharPokemon } = require('utils-playground');

const pokemons = async (req,res) => {

    const {pagina} = req.query;

    try{

        const listarPokemons = await listarPokemons(pagina);

        return res.json(listarPokemons);

    }catch(erro){
        return res.status(400).json({mensagem: error.message});
    }
}

const pokemon = async (req,res) => {

    const { idOuNome } = req.params;

    try{

        const pokemonEncontrado = await detalharPokemon(idOuNome);

        const {id, nome, height , weight , base, forms, 
            abilities, species } = pokemonEncontrado;
       
            
        return res.json({id, nome, height , weight , base, forms, 
            abilities, species});    

    } catch(error){
        return res.status(400).json({mensagem: error.message});
    }

    module.exports = {
        pokemons,
        pokemon
    }

}