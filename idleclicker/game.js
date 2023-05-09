var coins = 0;
var autoClickers = 0;

var counter = document.getElementById('counter');
var clickerCounter = document.getElementById('clickerCounter');

var button = document.getElementById('button');
var buyClicker = document.getElementById('buy_clicker');
var buyTit = document.getElementById('buy_tit');

var greatTit = document.getElementById('great_tit');

button.addEventListener('click', (event) => {
    coins += 1;
})

buyClicker.addEventListener('click', (event) => {
    if(coins < 10) {
        return;
    }

    autoClickers += 1;
    coins -= 10;
})

buyTit.addEventListener('click', (event) => {
    if(coins < 1000) {
        return;
    }

    greatTit.hidden = false;
    coins -= 1000;
})

function autoClickerHandler() {
    coins += autoClickers;
}

function updateCounters() {
    counter.textContent = `boob bux: ${coins} ($${calculateIncome()} per second)`;
    clickerCounter.textContent = `clickers: ${autoClickers}`;

    window.requestAnimationFrame(updateCounters);
}

function calculateIncome() {
    var income = 0;

    income += autoClickers * 2;

    return income;
}

window.requestAnimationFrame(updateCounters);

setInterval(autoClickerHandler, 500);