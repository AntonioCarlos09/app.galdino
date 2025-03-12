function calcular() {
    const valor = parseFloat(document.getElementById('valor').value);

    if (!isNaN(valor)) {
        const resultado = valor + (valor * 0.50); // Soma 50% do valor
        document.getElementById('resultado').textContent = `Resultado: R$ ${resultado.toFixed(2)}`;
    } else {
        document.getElementById('resultado').textContent = 'Por favor, insira um valor válido!';
    }
}
