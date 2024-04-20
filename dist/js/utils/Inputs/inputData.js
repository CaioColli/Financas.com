import { formatoData } from '../Validações Formulários/validaData.js';
import { validaMesData } from '../Validações Formulários/validaData.js';
import { validaAnoData } from '../Validações Formulários/validaData.js';
export function inputData() {
    const data = document.querySelectorAll('#input_data');
    let dataFormatada;
    data.forEach((input) => {
        input.addEventListener('blur', () => {
            const [ano, mes, dia] = input.value.split('-').map(Number);
            if (!validaMesData(dia, mes, ano) || !validaAnoData(ano)) {
                input.type = 'text';
                input.value = '';
                dataFormatada = undefined;
                input.dispatchEvent(new CustomEvent('anoInvalido'));
            }
            else {
                dataFormatada = formatoData(new Date(ano, mes - 1, dia));
            }
        });
    });
    return dataFormatada;
}
