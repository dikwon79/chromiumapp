function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    document.getElementById('clock').innerText = `${hours}:${minutes}:${seconds}`;
}

function login() {
    const username = document.getElementById('username').value;
    if (username) {
        localStorage.setItem('username', username);
        document.getElementById('login').style.display = 'none';
    }
}

function loadTodos() {
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.forEach(todo => {
    const li = document.createElement('li');
    li.innerText = todo;
    todoList.appendChild(li);
    });
}

function loadWeather() {
    const weatherDiv = document.getElementById('weather');
    navigator.geolocation.getCurrentPosition(position => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    // You can implement a weather API call using latitude and longitude
    // and update the content of the weatherDiv.
    weatherDiv.innerText = `Location: ${latitude}, ${longitude} - Weather: Sunny`;
    weatherDiv.style.display = 'block';
    });
}

function setRandomBackground() {
    const backgrounds = [
    'url("https://www.10wallpaper.com/wallpaper/1366x768/2309/Avatar_The_way_of_Water_Frontiers_of_Pandora_5K_Game_1366x768.jpg")',
    'url("https://www.10wallpaper.com/wallpaper/1366x768/1502/uss_wisconsin-High_Quality_HD_Wallpaper_1366x768.jpg")',
    'url("https://www.10wallpaper.com/wallpaper/1366x768/1502/mini_cooper-High_Quality_HD_Wallpaper_1366x768.jpg")'
    // Add more background URLs as needed
    ];
    const randomIndex = Math.floor(Math.random() * backgrounds.length);
    document.body.style.backgroundImage = backgrounds[randomIndex];
}

// Initial setup
updateClock();
loadTodos();
loadWeather();
setRandomBackground();

// Update clock every second
setInterval(updateClock, 1000);
