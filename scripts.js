async function fetchData() {
    hideError();

    try {
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        const response2 = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if (!response.ok || !response2.ok) {
            showError();
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        const data2 = await response2.json();

        const frontSprite = data.sprites.front_default;
        const backSprite = data2.sprites.back_default;

        const frontImg = document.getElementById("pokemonSprite");
        const backImg = document.getElementById("pokemonSpriteBack");

        frontImg.src = frontSprite;
        backImg.src = backSprite;

        frontImg.style.display = "block";
        backImg.style.display = "block";
    } catch (error) {
        console.error(error);
    }
}

function showError() {
    const errorMessageElement = document.getElementById('errorText');
    errorMessageElement.style.display = 'block';
}


function hideError() {
    const errorMessageElement = document.getElementById('errorText');
        errorMessageElement.style.display = 'none';

    const imgElement = document.getElementById("pokemonSprite");

        imgElement.src = pokemonSprite;
        imgElement.style.display = "none";
    
    const imgElement2 = document.getElementById("pokemonSpriteBack");

    imgElement2.src = pokemonSprite;
    imgElement2.style.display = "none";
}