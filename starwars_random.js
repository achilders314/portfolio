function randomCharacterGenerator() {
    let randomCharacter = Math.ceil(Math.random() * 83);
    if (randomCharacter === 17){
        randomCharacter++;
    }
    console.log(randomCharacter);
    fetch(`https://swapi.dev/api/people/${randomCharacter}/`)
        .then(res => res.json())
        .then(data => {
            fetch(data.homeworld)
            .then(res => res.json())
            .then(data => {document.getElementById("planet").innerText = `Home World: ${data.name}`});
            document.getElementById("characterName").innerText = data.name;
            document.getElementById("birthYear").innerText = `Birth Year: ${data.birth_year}`;
            document.getElementById("hairColor").innerText = `Hair Color: ${data.hair_color}`;
            document.getElementById("eyeColor").innerText = `Eye Color: ${data.eye_color}`;
        });
        
    }