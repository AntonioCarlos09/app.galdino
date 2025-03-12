let display = document.getElementById('display');

// Função para formatar números com pontuação automaticamente
function formatNumber(number) {
    // Verifica se há vírgula (caso o número tenha casas decimais)
    let parts = number.split(',');
    let integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.'); // Adiciona ponto para milhar
    let decimalPart = parts[1] ? ',' + parts[1] : ''; // Mantém a vírgula como separador decimal
    return integerPart + decimalPart;
}

function appendToDisplay(value) {
    // Se o valor for vírgula, convertê-lo para ponto
    if (value === ',') {
        value = '.';
    }

    // Se a tela já contém um ponto, evitar duplicações
    if (value === '.' && display.value.includes('.')) return;

    display.value += value;
    display.value = formatNumber(display.value); // Adiciona pontuação após cada entrada
}

function clearDisplay() {
    display.value = '';
}

function calculateResult() {
    try {
        // Substituindo os sinais para compatibilidade com a avaliação
        let expression = display.value.replace(/\./g, '').replace(/,/g, '.').replace('x', '*').replace('÷', '/');
        
        // Tratamento para calcular porcentagens corretamente
        if (expression.includes('%')) {
            let parts = expression.split('%');
            let number = parseFloat(parts[0].replace(',', '.'));
            expression = `${number / 100}`;
        }
        
        let result = eval(expression);
        display.value = formatNumber(result.toString());
    } catch (error) {
        display.value = 'Erro';
    }
}

function backspace() {
    // Remove o último caractere do visor
    display.value = display.value.slice(0, -1);
    // Reformatar novamente após apagar
    display.value = formatNumber(display.value)
}
