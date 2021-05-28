const pikachu = {
  name: "Pikachu",
  sprites: {
    front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
  }
}

/*
1. Save the name element in a variable (hint: That element has the selector ".pokemon-name")
2. Set the `textContent` of the name element to name property of the `pikachu` object
3. Save the image element in a variable (hint: That element has the selector ".pokemon-image")
4. Set the `src` of the image element to sprites.front_default property of the `pikachu` object
5. When you run the code, you should see Pikachu's name and picture on the screen!
*/

// Your code goes here
const $poke = document.querySelector(".pokemon-name")
$poke.textContent = pikachu.name

const $img = document.querySelector(".pokemon-image")
$img.src = pikachu.sprites.front_default