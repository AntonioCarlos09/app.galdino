function calcular() {
    const valor = parseFloat(document.getElementById('valor').value);

    if (!isNaN(valor)) {
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
    }
}

