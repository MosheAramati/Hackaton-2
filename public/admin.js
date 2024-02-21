
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
  return new Promise( (resolve, reject) => {fetch(`http://localhost:3001/api/heroes/${id}`, {method: "put"})
  .catch(error => console.error('Error posting hero', error));})
}


fetchHeros()
.then(obj=>displayRobots(obj))


function displayRobots (heroes){
    for (const hero of heroes){
      console.log(hero)
        const html = 
        `<div ><img id="cardImage" src="${hero.photos[0].photo
        }"  alt=""></div>
        <h2>${hero.name}</h2>
       
        <button class="delete"  onclick="deleteHeros(${hero.id})" >Delete</button>`;

        const html2 = 
        `<div ><img id="cardImage" src="${hero.photos[0].photo
        }"  alt=""></div>
        <h2>${hero.name}</h2>
       
        <button class="upload"  onclick="" >post </button>
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

function openPopup(info) {
  const popoverText = document.getElementById('popoverText');
  popoverText.textContent = info;
  
  const popoverContent = document.getElementById('popoverContent');
  popoverContent.style.display = 'block';
}

function closePopup() {
  const popoverContent = document.getElementById('popoverContent');
  popoverContent.style.display = 'none';
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
