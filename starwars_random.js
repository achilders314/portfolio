function randomCharacterGenerator() {
    //Calls in text areas so I can add to them later
    const characterName = document.getElementById("characterName");
    const birthYear = document.getElementById("birthYear");
    const hairColor = document.getElementById("hairColor");
    const eyeColor = document.getElementById("eyeColor");
    const planet = document.getElementById("planet");

    //Displays loading... in each box while I run the rest of the function
    characterName.innerHTML = '<img src="/images/bb8loading.gif">'
    birthYear.innerHTML = '<img src="/images/bb8loading.gif">'
    hairColor.innerHTML = '<img src="/images/bb8loading.gif">'
    eyeColor.innerHTML = '<img src="/images/bb8loading.gif">'
    planet.innerHTML = '<img src="/images/bb8loading.gif">'

    //Generates random number, then displays the character with that number in its url
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
            .then(data => {planet.innerText = data.name});
            characterName.innerText = data.name;
            birthYear.innerText = data.birth_year;
            hairColor.innerText = data.hair_color;
            eyeColor.innerText = data.eye_color;
        });
        
    }
