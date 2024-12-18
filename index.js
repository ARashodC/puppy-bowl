const getEvent = async() => {
  const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2410-FTB-MT-WEB-PT/players`);
  const responsejson = await response.json();
  const players = responsejson.data;
  console.log(players)
}

getEvent()