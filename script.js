const player = document.querySelector('#player');
const enemy = document.querySelector('#enemy');
const startBtn = document.querySelector('#start-btn');
const startWindow = document.querySelector('.start');
const gameWindow = document.querySelector('.game');
const gamer = document.querySelector('#player');

let gamerSkin = 'skin_1';
const selectSkin1 = document.querySelector('#skin_1');
const selectSkin2 = document.querySelector('#skin_2');
const selectSkin3 = document.querySelector('#skin_3');
const selectSkin4 = document.querySelector('#skin_4');

const endWindow = document.querySelector('.end');
const restartBtn = document.querySelector('#end-btn');


// кнопка Start
startBtn.onclick = function () {
    startGame();
}

// функція старту гри
function startGame() {
    startWindow.style.display = 'none';
    gameWindow.style.display = 'block';
    
    gamer.className = gamerSkin;
    enemyChange();
}

// вибір гравця
selectSkin1.onclick = function() {
    selectSkin1.className = 'selected';
    selectSkin2.className = '';
    selectSkin3.className = '';
    selectSkin4.className = '';
    gamerSkin = 'skin_1';
}

selectSkin2.onclick = function() {
    selectSkin2.className = 'selected';
    selectSkin1.className = '';
    selectSkin3.className = '';
    selectSkin4.className = '';
    gamerSkin = 'skin_2';
}

selectSkin3.onclick = function() {
    selectSkin3.className = 'selected';
    selectSkin1.className = '';
    selectSkin2.className = '';
    selectSkin4.className = '';
    gamerSkin = 'skin_3';
}

selectSkin4.onclick = function() {
    selectSkin4.className = 'selected';
    selectSkin1.className = '';
    selectSkin2.className = '';
    selectSkin3.className = '';
    gamerSkin = 'skin_4';
}
// зміна ворога
function enemyChange() {
    if(gamerSkin == 'skin_1') {
        enemy.classList.add('enemy_1');
    }
    if(gamerSkin == 'skin_2') {
        enemy.classList.add('enemy_2');
    }
    if(gamerSkin == 'skin_3') {
        enemy.classList.add('enemy_3');
    }
    if(gamerSkin == 'skin_4') {
        enemy.classList.add('enemy_4');
    }
}

// стрибок
document.addEventListener('keydown', function(ev) {
    jump();
})

function jump() {
    if (player.classList != 'jump') {
        player.classList.add('jump');
    }
   setTimeout( function() {
    player.classList.remove('jump');
   }, 500) 
}

// зіткнення гравця та ворога
let isAlive = setInterval( function() {
    let playerTop = parseInt(window.getComputedStyle(player).getPropertyValue('top'));
    let enemyLeft = parseInt(window.getComputedStyle(enemy).getPropertyValue('left'));

    if (enemyLeft < 300 && enemyLeft > 200 && playerTop >= 300) {
        gameWindow.style.display = 'none';
        endWindow.style.display = 'block';
    }
}, 10);

// перезагрузка сторінки
restartBtn.onclick = function() {
    location.reload();
} 