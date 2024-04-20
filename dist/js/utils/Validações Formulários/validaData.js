export function formatoData(data) {
    const dataISO = new Date(data).toISOString().slice(0, 10);
    const partesData = dataISO.split('-');
    let dataFormatada = `${partesData[2]}/${partesData[1]}/${partesData[0]}`;
    return dataFormatada;
}
export function validaMesData(dia, mes, ano) {
    // Func que valida quantidade de dia depenendo do mês e até ano ano bissexto
    if (dia < 1 || dia > 31) {
        return false;
    }
    if (mes < 1 || mes > 12) {
        return false;
    }
    if (mes === 2) {
        if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
            if (dia > 29) {
                return false;
            }
        }
        else if (dia > 28) {
            return false;
        }
    }
    else if (mes === 4 || mes === 6 || mes === 9 || mes === 11) {
        if (dia > 30) {
            return false;
        }
    }
    return true;
}
export function validaAnoData(ano) {
    const anoAtual = new Date().getFullYear();
    if (ano < 2000) {
        return false;
    }
    if (ano > anoAtual) {
        return false;
    }
    return true;
}
