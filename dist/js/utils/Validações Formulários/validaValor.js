export function apenasNumero(inputElement) {
    let limitarANumero = inputElement.value.replace(/\D/g, '');
    inputElement.value = limitarANumero;
    return limitarANumero.length > 0;
}
