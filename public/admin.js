
function fetchHeros(){
  return new Promise( (resolve, reject) => {fetch("http://localhost:3001/api/heroes/admin")
  .then(data => data.json())
  .then(obj=> resolve (obj))
  .catch(error => console.error('Error fetching robots:', error));})
}
function deleteHeros(id){
  return new Promise( (resolve, reject) => {fetch(`http://localhost:3001/api/heroes/${id}`, {method: "delete"})
  .catch(error => console.error('Error deleting hero:', error));})
}
function postHeros(id){
  return new Promise( (resolve, reject) => {fetch(`http://localhost:3001/api/heroes/${id}`, {method: "put", body: JSON.stringify({confirmed:true}), headers:{'Content-Type':'application/json'}})
  .catch(error => console.error('Error posting hero', error));})
}


fetchHeros()
.then(obj=>displayRobots(obj))


function displayRobots (heroes){
    for (const hero of heroes){
      console.log(hero)
        const html = 
        `<div ><p id="pAuto">AUTHORIZED</p>
        <img id="cardImage" src="${hero.photos[0].photo
        }"  alt=""></div>
        <h2>${hero.name}</h2>
       
        <button class="delete"  onclick="deleteHeros(${hero.id})" >Delete</button>`;

        const html2 = 
        `<div ><p id="p">WATING FOR AUTORIZATION</p>
        <img id="cardImage" src="${hero.photos[0].photo
        }"  alt=""></div>
        <h2>${hero.name}</h2>
       
        <button class="upload"  onclick="postHeros(${hero.id}) " >Upload</button>
        <button class="delete"  onclick="deleteHeros(${hero.id})" >Delete</button>`;

        const newDiv = document.createElement('div');
        newDiv.id = 'card';

        function selectHtml(){
          if(hero.confirmed){
            newDiv.innerHTML = html
          }else{
            newDiv.innerHTML = html2
          }
        }

        selectHtml()

        document.querySelector('#content').appendChild(newDiv) 
        
    }
}



const input = document.querySelector('input')

input.addEventListener('keyup', handleEnter)

function handleEnter(e) {
  e.preventDefault();
  const value = e.target.value;
  fetchHeros()
      .then(heroes => {
          const filterHeroes = heroes.filter(hero => hero.name.toLowerCase().includes(value.toLowerCase()));
          console.log(filterHeroes);
          eraseContent();
          displayRobots(filterHeroes);
      })
      .catch(error => console.error('Error filtering heros', error));
}

function eraseContent(){
    document.querySelector('#content').innerHTML = ''
}
