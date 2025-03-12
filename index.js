function calcular() {
    const valor = parseFloat(document.getElementById('valor').value);
    const porcentagem = parseFloat(document.getElementById('porcentagem').value);

    if (!isNaN(valor)) {
        const resultado = valor + (valor * porcentagem); // Soma a porcentagem selecionada
        document.getElementById('resultado').textContent = `Resultado: R$ ${resultado.toFixed(2)}`;
    } else {
        document.getElementById('resultado').textContent = 'Por favor, insira um valor válido!';
    }
}
