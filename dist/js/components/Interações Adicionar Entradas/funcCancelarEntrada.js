import { validaAvancoPreFormEntrada } from './verificaAvancoFormEntrada.js';
import { verificaEntrada } from './validaSubFormularioEntrada.js';
import { verificaInputsEntrada } from './validaSubFormularioEntrada.js';
import { resetarEntrada } from './funcResetarEntrada.js';
export function cancelaEntrada() {
    const btnVoltarInicio = document.querySelector('#bnt_inicio_card_addDinheiro');
    btnVoltarInicio.addEventListener('click', () => {
        const data = document.querySelector('#input_data');
        const titulo = document.querySelector('#input_titulo');
        const opcao = document.querySelector('input[name="opcao_entrada"]:checked');
        const valor = document.querySelector('#input_valor');
        const formulario = document.querySelector('#formulario');
        const btnsApagar = formulario.querySelectorAll('button');
        btnsApagar.forEach((input) => {
            input.style.display = 'none';
        });
        data.value = "";
        titulo.value = "";
        opcao.checked = false;
        valor.value = "";
        resetarEntrada();
        verificaEntrada();
        verificaInputsEntrada();
        validaAvancoPreFormEntrada();
    });
}
