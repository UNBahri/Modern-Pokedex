const searchInput= document.querySelector('#poke-input');
const searchBtn = document.querySelector('.btn-search');
const pokeContainer= document.querySelector('.poke-container');

const colors={
    normal: '#A8A77A',
	fire: '#EE8130',
	water: '#6390F0',
	electric: '#F7D02C',
	grass: '#7AC74C',
	ice: '#96D9D6',
	fighting: '#C22E28',
	poison: '#A33EA1',
	ground: '#E2BF65',
	flying: '#A98FF3',
	psychic: '#F95587',
	bug: '#A6B91A',
	rock: '#B6A136',
	ghost: '#735797',
	dragon: '#6F35FC',
	dark: '#705746',
	steel: '#B7B7CE',
	fairy: '#D685AD',

}

const pokeCount=151;
const initPokemon=async()=> {
for(let i = 1;i<= pokeCount; i++){
    await getPokemon(i);
}
};
const getPokemon = async(id) => {
    let url =`https://pokeapi.co/api/v2/pokemon/${id}/`;
    let res= await fetch(url)
    let data =await res.json();
    createPokemonBox(data);
};

const createPokemonBox = (pokemon) => {
    const name =pokemon.name[0].toUpperCase()+ pokemon.name.slice(1);
    const id =pokemon.id.toString().padStart(3, '0');
    const weight =pokemon.weight;
    const type= pokemon.types[0].type.name;
    const color = colors[type];

const pokemonEL=document.createElement('div');
pokemonEL.classList.add('poke-box');
pokemonEL.style.backgroundColor= `${color}`;
pokemonEL.innerHTML=`

<img
src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png" 
alt="${name} image"
/>
<h4 class="poke-name">${name}</h4>
<p class="poke-id">#${id}</p>
<p class="poke-weight">${weight} Kg</p>
<p class="poke-type">Type:${type}</p>
`;

pokeContainer.appendChild(pokemonEL);


};

initPokemon();

searchInput.addEventListener("input", function (e) {
    const pokeNames = document.querySelectorAll('.poke-name');
    const search = searchInput.value.toLowerCase();

    console.log(pokeNames); // Just for debugging, remove this later

    pokeNames.forEach(pokeNameElement => {
        pokeNameElement.style.display = 'block'; // Reset display for all elements

        if (!pokeNameElement.innerHTML.toLowerCase().includes(search)) {
            pokeNameElement.parentElement.style.display = 'none';
        }
    });
});



