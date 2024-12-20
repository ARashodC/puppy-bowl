const state = {
  everyPlayer: []
}


const getEvent = async() => {
  //get api for puppy bowl
  //pending response needs to await
  const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2410-FTB-MT-WEB-PT/players`);
  //await json
  const responsejson = await response.json();
  //pull array of players from response
  const players = responsejson.data.players;
  //make a global state for the array of puppy names to be used in other functions
  state.everyPlayer = players;

  renderAllPlayers();
}

//put list of names on the webpage and have user clock on names to view details
const renderAllPlayers = () => {
  const playerNameLIs = state.everyPlayer.map((player) => {
    //make array with just names of players
    return `<li>${player.name}</li>`;
    
  });

  //grab main and add LIs
  const main = document.querySelector(`main`);
  main.innerHTML =
    //remove commas
      `
    <ol>
      ${playerNameLIs.join(``)}
    </ol>
      `;

    //grab ol and add a click action for every ol in the LI
  const ol = document.querySelector(`ol`);
    ol.addEventListener(`click`, (event) => {
      if(event.target.tagName === "LI") {
        renderSinglePlayer(event.target.innerText);
      }
  });

}

  //get player details on page
  //make a find function and playerFound variable
  //return the name of the player equal to the name clicked by the user
const renderSinglePlayer = (clickedPlayerName) => {
  const playerFound = state.everyPlayer.find((player) => {
    return player.name === clickedPlayerName;
    
})

  const playerDetailHTML = `
  <h2>${clickedPlayerName}</h2>
  `;

  main.innerHTML = playerDetailHTML;
};

getEvent();