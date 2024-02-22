
function fetchHeros(){
  return new Promise( (resolve, reject) => {fetch("http://localhost:3001/api/heroes")
  .then(data => data.json())
  .then(obj=> resolve (obj))
  .catch(error => console.error('Error fetching robots:', error));})
}

fetchHeros()
.then(obj=>displayRobots(obj))


function displayRobots (heroes){
    for (const hero of heroes){
      console.log(hero)
        const html = 
        `<div ><img id="cardImage" src="${hero.photos[0].photo
        }"  alt=""></div>

        <div id="cardContent">
        <img id="candle" src="candle.png"  alt="">
        <h2>${hero.name}</h2>
        </div>
        
        <button class="btn btn-primary"  onclick="openPopup('${hero.about_me}')" >About  me</button>
        <button class="btn btn-primary"  onclick="openPopup('${hero.name_in_hebrew}')" >Pray for me </button>`;

        const newDiv = document.createElement('div');
        newDiv.id = 'card';
        newDiv.innerHTML = html;



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
