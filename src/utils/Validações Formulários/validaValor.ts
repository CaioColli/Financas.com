export function apenasNumero(inputElement: HTMLInputElement): any {
    let limitarANumero = inputElement.value.replace(/\D/g, '')
    inputElement.value = limitarANumero

    return limitarANumero.length > 0
}