function calcular2() {
    const valor = parseFloat(document.getElementById('valor').value);

    if (!isNaN(valor)) {
<<<<<<< HEAD
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
        
=======
        const porcentagens = [0.45, 0.50, 0.55, 0.60, 0.75];
        let resultadosHtml = '';

        porcentagens.forEach(porcentagem => {
            const resultado = valor + (valor * porcentagem);
            resultadosHtml += `
                <div class="resultado-item">
                    <strong>${(porcentagem * 100).toFixed(0)}%</strong>: R$ ${resultado.toFixed(2)}
                </div>
             `;
        });

        document.getElementById('resultados').innerHTML = resultadosHtml;
    } else {
        document.getElementById('resultados').innerHTML = 'Por favor, insira um valor válido!';
>>>>>>> bea4d0b2c61cfdf547a6e96a8f083df49f9b5bf2
    }

}



