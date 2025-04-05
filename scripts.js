async function fetchData() {
    hideError();

    try {
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        console.info(`Fetching ${pokemonName} from pokeAPI`)
        
        if (!response.ok) {
            showError();
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();

        const frontSprite = data.sprites.front_default;
        const backSprite = data.sprites.back_default;
        const shinySprite = data.sprites.front_shiny;
        const shinyBackSprite = data.sprites.back_shiny;

        const frontImg = document.getElementById("pokemonSprite");
        const backImg = document.getElementById("pokemonSpriteBack");
        const shinyImg = document.getElementById("pokemonSpriteShiny");
        const shinyBackImg = document.getElementById("pokemonSpriteShinyBack");

        frontImg.src = frontSprite;
        backImg.src = backSprite;
        shinyImg.src = shinySprite;
        shinyBackImg.src = shinyBackSprite;

        frontImg.style.display = "block";
        backImg.style.display = "block";
        shinyImg.style.display = "block";
        shinyBackImg.style.display = "block";

        const pokeName2 = document.getElementById("pokemonName").value.toLowerCase()
        console.info(`${pokeName2} was found!`);
    }
    catch (error) {
        const pokeName = document.getElementById("pokemonName").value.toLowerCase()
        console.error(`${pokeName} was not found. Ensure proper spelling and try again.`);
    }
}


function showError() {
    const errorMessageElement = document.getElementById('errorText');
    errorMessageElement.style.display = 'block';

    const errorMessageElement2 = document.getElementById('errorInfo');
    errorMessageElement2.style.display = 'block';

    const errorMessageElement3 = document.getElementById('errorDiv');
    errorMessageElement3.style.display = 'block';
}


function hideError() {
    const errorMessageElement = document.getElementById('errorText');
        errorMessageElement.style.display = 'none';

    const errorMessageElement2 = document.getElementById('errorInfo');
    errorMessageElement2.style.display = 'none';

    const errorMessageElement3 = document.getElementById('errorDiv');
    errorMessageElement3.style.display = 'none';

    const imgElement = document.getElementById("pokemonSprite");

        imgElement.src = pokemonSprite;
        imgElement.style.display = "none";
    
    const imgElement2 = document.getElementById("pokemonSpriteBack");

    imgElement2.src = pokemonSprite;
    imgElement2.style.display = "none";

    const imgElement3 = document.getElementById("pokemonSpriteShiny");

    imgElement3.src = pokemonSprite;
    imgElement3.style.display = "none";

    const imgElement4 = document.getElementById("pokemonSpriteShinyBack");

    imgElement4.src = pokemonSprite;
    imgElement4.style.display = "none";
}