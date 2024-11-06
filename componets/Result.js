export default function Result(result, playerChoice, computerChoice) {
    const resultElement = document.createElement('div');
    resultElement.className = 'result';

    const resultText = document.createElement('p');
    resultText.innerText = `Resultado: ${result}`;
    
    const choicesText = document.createElement('p');
    choicesText.innerText = `Tú elegiste: ${playerChoice}, Computadora eligió: ${computerChoice}`;
    
    const image = document.createElement('img');
    image.src = `./images/${result === 'Ganaste' ? 'ganaste' : 'perdiste'}.png`;

    resultElement.appendChild(resultText);
    resultElement.appendChild(choicesText);
    resultElement.appendChild(image);
    
    return resultElement;
}
