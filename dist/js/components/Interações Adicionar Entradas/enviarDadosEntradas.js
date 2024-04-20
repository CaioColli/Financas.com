import { criarElementosEntrada } from './criacaoDadosEntrada.js';
const btnEnviarEntrada = document.querySelector('#btn_enviar_formulario_entrada');
import { formatoData } from '../../utils/Validações Formulários/validaData.js';
import { validaAvancoPreFormEntrada } from './verificaAvancoFormEntrada.js';
import { verificaEntrada } from './validaSubFormularioEntrada.js';
import { verificaInputsEntrada } from './validaSubFormularioEntrada.js';
import { resetarEntrada } from './funcResetarEntrada.js';
export function enviarElementosEntrada() {
    btnEnviarEntrada.addEventListener('click', () => {
        const entradaContainer = document.querySelector('#card_addEntrada');
        const titulo = entradaContainer.querySelector('#input_titulo');
        const opcao = entradaContainer.querySelector('input[name="opcao_entrada"]:checked');
        const data = entradaContainer.querySelector('#input_data');
        const dataFormatada = formatoData(new Date(data.value));
        const valor = entradaContainer.querySelector('#input_valor');
        const novoElemento = criarElementosEntrada(titulo.value, opcao.value, dataFormatada, valor.value);
        const entradasUsuario = document.querySelector('.dados_entradas');
        entradasUsuario.appendChild(novoElemento);
        const dadosEntrada = {
            titulo: titulo.value,
            opcao: opcao.value,
            data: dataFormatada,
            valor: valor.value
        };
        // Recupera dados ou cria caso não tiver nada salvo
        // .parse converte string em objeto
        const itensSalvos = JSON.parse(localStorage.getItem('DadosEntrada')) || [];
        // Adiciona o novo objeto ao Array 
        itensSalvos.push(dadosEntrada);
        // Salva o Array atualizando no localStorage 
        localStorage.setItem('DadosEntrada', JSON.stringify(itensSalvos));
        // Ao enviar reseta o formulário
        // Refazer em forma de função pura
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
