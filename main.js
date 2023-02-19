let summonerName;
let imgName;
let nameTeam;
let rolePlayer;
let numPlayer;

document.getElementById("button-addon2").addEventListener("click",function() {
  let guess = document.getElementById("searchInput").value;
  if(guess===summonerName){
    console.log("Bonne reponse"); 
    
  }else{
    console.log("Mauvaise reponse"); 
  }
  
  
})


const url ='https://api-esportplayers.vercel.app/randomTeamByLeague/LEC'
fetch(url)
.then(reponse=>reponse.json())
.then(data=>{
    console.log(data);
    randomPlayer(data);
    afficherTeam(data);
    afficherRole(data);
  })
.catch(error => {
    console.log(error);
})

function findPlayer(data,name){
  for(let i=0; i<data.teams.length;i++){
    if (data.teams[i].players.find(item=>item.summonerName=== name)){
      return data.teams[i].players.find(item=>item.summonerName)
    }
  }
}

function randomPlayer(data){

  numPlayer = Math.floor(Math.random() * (data.team.players.length ));
  console.log(numPlayer);
  /*let imagePlayer = document.createElement("img")
  
  imagePlayer.src = data.team.players[numPlayer].image;*/
  summonerName = data.team.players[numPlayer].summonerName;
  imgName = data.team.players[numPlayer].image;
  document.getElementById("namePlayer").textContent = summonerName;
  document.getElementById("imagePlayer").src = imgName;
 
}

function afficherTeam(data){
  nameTeam = data.team.code;
  document.getElementById("nameTeam").textContent = nameTeam;
}

function afficherRole(data){
  rolePlayer = data.team.players[numPlayer].role;
  document.getElementById("poste").textContent = rolePlayer;
}

function afficherIndices (data){
  
}