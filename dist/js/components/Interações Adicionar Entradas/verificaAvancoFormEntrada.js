import { validaOpcaoPreFormulario } from '../../utils/Validações Formulários/validaEscolhaPreFormulario.js';
export function atualizarBotao() {
    const preForm = document.querySelector('#pre_formulario_entrada');
    const proxFormulario = preForm.querySelector('#btn_prox_formulario');
    const escolha = validaOpcaoPreFormulario();
    if (escolha) {
        proxFormulario.classList.remove('btn_prox_form_desabilitado');
        proxFormulario.classList.add('btn_prox_form');
        proxFormulario.disabled = false;
    }
    else {
        proxFormulario.classList.remove('btn_prox_form');
        proxFormulario.classList.add('btn_prox_form_desabilitado');
        proxFormulario.disabled = true;
    }
}
export function validaAvancoPreFormEntrada() {
    const preForm = document.querySelector('#pre_formulario_entrada');
    const opcoes = preForm.querySelectorAll('[name=opcao_entrada]');
    atualizarBotao();
    opcoes.forEach((input) => {
        input.addEventListener('click', atualizarBotao);
    });
}
