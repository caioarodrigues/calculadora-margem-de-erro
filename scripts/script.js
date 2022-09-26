const bgColor = [
    '#ff7f50',
    '#bc8f8f',
    '#d0d0d0',
    '#20b2aa',
    '#120a8f'
]

function getCorAleatoria(){
    const num = Math.floor(Math.random() * 10);

    if(num < bgColor.length)    return bgColor[num];
    return getCorAleatoria();
}

function setCorAleatoria(){
    const color = getCorAleatoria();
    console.log(color)
    document.body.style.background = color;
}

function resetarValores(){
    document.getElementById('individual-value').value = '';
    document.getElementById('medium-value').value = '';
}

function transformaVirguaEmPonto(num){
    let result = '';

    for(let i = 0; i < num.length; i++){
        if(num.charAt(i) != ',')    result += num.charAt(i);
        else if (num.charAt(i) == ',')  result += '.';
    }

    return result;
}

function retornaDesvioPercentual(valorIndividual, valorMedio){
    const valInd = parseFloat(transformaVirguaEmPonto(valorIndividual));
    const valMed = parseFloat(transformaVirguaEmPonto(valorMedio));

    if (valInd && valMed){
        const result = (((valInd - valMed) / valMed) * 100);
    
        return `resultado ≈ ${result.toFixed(2)}%`;
    }

    return "Insira os valores para calcular o desvio";
}

function retornaDesvioUnidades(valorIndividual, valorMedio){
    const valInd = parseFloat(transformaVirguaEmPonto(valorIndividual));
    const valMed = parseFloat(transformaVirguaEmPonto(valorMedio));
    const result = valMed - valInd;

    if (valInd && valMed){
        return `A diferença é de ${result.toFixed(2)} unidades`;
    }
    return '';
}

function calculaDesvio(){
    const individualValueArea = document.getElementById('individual-value').value;
    const mediumValueArea = document.getElementById('medium-value').value;
    const spanPercentageResultArea = document.getElementById('percentage-results-span');
    const spanUnityResultArea = document.getElementById('unity-results-span');

    const resultDesvioPercentual = retornaDesvioPercentual(individualValueArea, mediumValueArea);
    const resultDesvioUnidades = retornaDesvioUnidades(individualValueArea, mediumValueArea);

    spanPercentageResultArea.innerHTML = resultDesvioPercentual;
    spanUnityResultArea.innerHTML = resultDesvioUnidades;
}

(() => {
    setCorAleatoria();
})()

setInterval(() => {
    calculaDesvio();
}, 100);