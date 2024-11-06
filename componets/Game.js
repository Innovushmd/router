import Result from './Result.js';

export default function Game() {
    const gameContainer = document.createElement('div');
    const options = ['piedra', 'papel', 'tijera'];
    
    const resultContainer = document.createElement('div');
    resultContainer.className = 'result';

    const buttons = options.map(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.onclick = () => playGame(option);
        return button;
    });

    buttons.forEach(button => gameContainer.appendChild(button));
    gameContainer.appendChild(resultContainer);

    function playGame(playerChoice) {
        const computerChoice = options[Math.floor(Math.random() * options.length)];
        const result = getResult(playerChoice, computerChoice);
        resultContainer.innerHTML = '';
        resultContainer.appendChild(Result(result, playerChoice, computerChoice));
    }

    function getResult(player, computer) {
        if (player === computer) return 'Empate';
        if (
            (player === 'piedra' && computer === 'tijera') ||
            (player === 'papel' && computer === 'piedra') ||
            (player === 'tijera' && computer === 'papel')
        ) return 'Ganaste';
        return 'Perdiste';
    }

    return gameContainer;
}
