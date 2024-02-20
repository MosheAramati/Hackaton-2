

fetch("http://localhost:3001/api/heroes")
.then(data => data.json())
.then(obj=> console.log(obj))


const robots = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      image: 'https://robohash.org/1?200x200'
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      image: 'https://robohash.org/2?200x200'
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      image: 'https://robohash.org/3?200x200'
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      image: 'https://robohash.org/4?200x200'
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      image: 'https://robohash.org/5?200x200'
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
      image: 'https://robohash.org/6?200x200'
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
      image: 'https://robohash.org/7?200x200'
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
      image: 'https://robohash.org/8?200x200'
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
      image:'https://robohash.org/9?200x200'
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
      image:'https://robohash.org/10?200x200'
    }
    ];
function displayRobots (robots){
    for (const robot of robots){
        const html = 
        `<div ><img id="cardImage" src="${robot.image}"  alt=""></div>
        <h2>${robot.name}</h2>
       
        <button class="btn btn-primary"  onclick="openPopup('${robot.name}')" >About  me</button>
        <button class="btn btn-primary"  onclick="openPopup('${robot.email}')" >Pray for me </button>`;

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

displayRobots(robots)
    const input = document.querySelector('input')

    input.addEventListener('keyup', handleEnter)

    function handleEnter(e) {
        e.preventDefault;
        const value = e.target.value;
        const filterRobot = robots.filter((robot) => robot.name.toLowerCase().includes(value.toLowerCase()));
        console.log(filterRobot);
        eraseContent();
        displayRobots(filterRobot);
    }

    function eraseContent(){
        document.querySelector('#content').innerHTML = ''
    }
  //   function openPopup() {
  //     // Define the URL and other properties of the popup window
  //     var url = "popup.html";
  //     var windowName = "popupWindow";
  //     var windowFeatures = "width=300,height=200";
  
  //     // Open the popup window
  //     window.open(url, windowName, windowFeatures);
  // }

  // function openPopup(){
  //   const html = 
  //   `<div id="popoverContent" class="popover-content">
  //   <span class="close">&times;</span>
  //   <p>This is popover content.</p>
  // </div>`;

  //   const newDiv = document.createElement('div');
  //   newDiv.id = 'card';
  //   newDiv.innerHTML = html;

  //   document.querySelector('#content').appendChild(newDiv) 
  //   popoverButton.addEventListener('click', function () {
  //     popoverContent.style.display = 'block';
  //   });
  
  //   closeButton.addEventListener('click', function () {
  //     popoverContent.style.display = 'none';
  //   });
  // };

 
