

/*
  Stoped at line 27 or so I was getting the respond back from each name of the region but the problem I'm having is that is returning the name and but url for which pokemon names come up is based on the number. Like Kando is = 1 I need to figure out a way to turn that string (Kando) so I can insurt it into the url of pokemon search. 
*/

const selectRegion = document.querySelector('.pokemonRegion');
const selectPokemon = document.querySelector('.pokemonNames');


// Gets the API on What ever the user types in
function getRegion() {
  fetch(`https://pokeapi.co/api/v2/region`)
  .then(res => res.json())
  .then(data => {
    const region = data.results;
    for (let i = 0; i < region.length; i++) {
      const option = document.createElement('option');
      option.value = region[i].name;
      option.innerText = region[i].name.toUpperCase();
      selectRegion.appendChild(option);
    }

    /*
      This is where is stop 
    */
    selectRegion.addEventListener('change', event => {
    })
  })
  .catch(err => {
    console.log(`error ${err}`)
  })
}

getRegion();




// Gets the API on What ever the user types in
function getPokemon() {
  fetch(`https://pokeapi.co/api/v2/generation/1/`)
  .then(res => res.json())
  .then(data => {
    // Data Im getting back form gen 1 
    console.log(data);

    // pokemonNames is my array
    const pokemonNames = data.pokemon_species;
    console.log(pokemonNames)

    // Goes though the array, takes the name and attach it to the option drop down menu
    for (let i = 0; i < pokemonNames.length; i++ ) {
      const option = document.createElement('option');
      option.value = pokemonNames[i].name;
      option.innerText = pokemonNames[i].name;
      selectPokemon.appendChild(option);
    }
  })
  .catch(err => {
    console.log(`error ${err}`)
  })
}

getPokemon();

