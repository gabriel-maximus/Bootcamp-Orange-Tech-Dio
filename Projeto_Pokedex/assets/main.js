pokeApi.getPokemons().then((pokemonList) => { 
    for (let index = 0; index < pokemonList.length; index++) {
        const pokemon = pokemonList[index];
        console.log(convertPokemonToHtml(pokemon))

        document.getElementById('pokemonList').innerHTML += convertPokemonToHtml(pokemon)
        
    }    
})

function convertPokemonToHtml(pokemon){
    return `
    <li class="pokemon grass">
        <span class="number">#001</span>
        <span class="name">${pokemon.name}</span>
        <div class="detail">
            <ol class="types">
                <li>Grass</li>
                <li>Poison</li>
            </ol>
        
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="${pokemon.name}">
        </div>
    </li>
    `
}