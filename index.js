function calcular2() {
    const valor = parseFloat(document.getElementById('valor').value);

    if (!isNaN(valor)) {
        const resultado = valor + (valor * 0.45); // Soma 45% do valor
        const resultado2 = valor + (valor * 0.50); // Soma 50% do valor
        const resultado3 =  valor + (valor * 0.55); // Soma 55% do valor
        const resultado4 = valor + (valor * 0.60); // Soma 60% do valor
        const resultado5 = valor + (valor * 0.75); // Soma 75% do valor
        document.getElementById('resultado').textContent = `45% EXTREMO: R$${resultado.toFixed(2)}`;
        document.getElementById('resultado2').textContent = `50% PADRÃO: R$${resultado2.toFixed(2)}`;
        document.getElementById('resultado3').textContent = `55% REGULAR: R$${resultado3.toFixed(2)}`;
        document.getElementById('resultado4').textContent = `60% BOM: R$${resultado4.toFixed(2)}`;
        document.getElementById('resultado5').textContent = `75% ÓTIMO: R$${resultado5.toFixed(2)}`;
        document.getElementById('resultado').style.color = 'red';
        document.getElementById('resultado2').style.color = 'OrangeRed';
        document.getElementById('resultado3').style.color = 'Gold';
        document.getElementById('resultado4').style.color = 'GreenYellow';
        document.getElementById('resultado5').style.color = 'Green';

    } else {

        document.getElementById('resultado').textContent = ' ';
        document.getElementById('resultado2').textContent = ' ';
        document.getElementById('resultado3').textContent = ' ';
        document.getElementById('resultado4').textContent = ' ';
        document.getElementById('resultado5').textContent = ' ';
        
    }
}

    function calcular3() {
        const valor = parseFloat(document.getElementById('valor').value);
    var res1 = valor + (valor * 0.15)
        if (!isNaN(valor)) {
            const resultado = res1 + (res1 * 0.45); // Soma 45% do valor
            const resultado2 = res1 + (res1 * 0.50); // Soma 50% do valor
            const resultado3 = res1 + (res1 * 0.55); // Soma 55% do valor
            const resultado4 = res1 + (res1 * 0.60); // Soma 60% do valor
            const resultado5 = res1 + (res1 * 0.75); // Soma 75% do valor
            document.getElementById('resultado').textContent = `45% EXTREMO: R$${resultado.toFixed(2)}`;
            document.getElementById('resultado2').textContent = `50% PADRÃO: R$${resultado2.toFixed(2)}`;
            document.getElementById('resultado3').textContent = `55% REGULAR: R$${resultado3.toFixed(2)}`;
            document.getElementById('resultado4').textContent = `60% BOM: R$${resultado4.toFixed(2)}`;
            document.getElementById('resultado5').textContent = `75% ÓTIMO: R$${resultado5.toFixed(2)}`;
            document.getElementById('resultado').style.color = 'red';
            document.getElementById('resultado2').style.color = 'OrangeRed';
            document.getElementById('resultado3').style.color = 'Gold';
            document.getElementById('resultado4').style.color = 'GreenYellow';
            document.getElementById('resultado5').style.color = 'Green';
    
        } else {
    
            document.getElementById('resultado').textContent = ' ';
            document.getElementById('resultado2').textContent = ' ';
            document.getElementById('resultado3').textContent = ' ';
            document.getElementById('resultado4').textContent = ' ';
            document.getElementById('resultado5').textContent = ' ';



}

}


