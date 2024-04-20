import { FormatacaoMonetaria } from '../../types/formatacaoMonetaria.js';
import { msgErroValor } from '../mensagensErro.js';
import { verificaEntrada } from '../../components/Interações Adicionar Entradas/validaSubFormularioEntrada.js';
export function inputValor() {
    const valorEntrada = document.querySelectorAll('#input_valor');
    valorEntrada.forEach((input) => {
        msgErroValor(input);
        input.addEventListener('input', () => {
            let limitarANumero = input.value;
            const valorNumerico = parseFloat(limitarANumero) / 100;
            const resultadoFormatado = FormatacaoMonetaria.formatarMoeda(valorNumerico);
            input.value = resultadoFormatado;
            verificaEntrada();
        });
    });
}
