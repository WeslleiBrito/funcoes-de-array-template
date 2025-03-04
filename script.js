const pokemons = [
  { nome: 'Bulbasaur', tipo: 'grama', vida: 40 },
  { nome: 'Bellsprout', tipo: 'grama', vida: 20 },
  { nome: 'Charmander', tipo: 'fogo', vida: 35 },
  { nome: 'Vulpix', tipo: 'fogo', vida: 25 },
  { nome: 'Squirtle', tipo: 'água', vida: 45 },
  { nome: 'Psyduck', tipo: 'água', vida: 25 },
]

// Letra A
function modificarVida(objeto) {

    return {...objeto, vida: 100}
}

// Letra B
const pokemonsVidaCheia = pokemons.map(modificarVida)
//console.log(pokemonsVidaCheia)

// Letra c
const pokemonsDeFogo = pokemons.filter((elemento) => 
  elemento.tipo === 'fogo'
)

console.log(pokemonsDeFogo)