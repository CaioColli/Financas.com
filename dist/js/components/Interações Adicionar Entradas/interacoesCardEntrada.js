export function manipulacaoEntradas() {
    const cardAddDinheiro = document.querySelector('.card_addDinheiro');
    const tituloCardAddDinheiro = cardAddDinheiro.querySelector('#titulo_addDinheiro');
    const btnAddEntrada = cardAddDinheiro.querySelector('#add_entrada');
    const preFormulario = cardAddDinheiro.querySelector('#pre_formulario_entrada');
    const btnVoltarInicio = cardAddDinheiro.querySelector('#bnt_inicio_card_addDinheiro');
    const btnProximoFormulario = cardAddDinheiro.querySelector('#btn_prox_formulario');
    const formulario = cardAddDinheiro.querySelector('#formulario');
    const btnVoltar = cardAddDinheiro.querySelector('#bnt_voltar_pagina_entrada');
    btnAddEntrada.addEventListener('click', () => {
        btnAddEntrada.style.display = 'none';
        tituloCardAddDinheiro.style.display = 'none';
        preFormulario.style.display = 'flex';
        btnVoltarInicio.style.display = 'block';
    });
    btnVoltarInicio.addEventListener('click', () => {
        preFormulario.style.display = 'none';
        formulario.style.display = 'none';
        btnVoltarInicio.style.display = 'none';
        btnVoltar.style.display = 'none';
        tituloCardAddDinheiro.style.display = 'block';
        btnAddEntrada.style.display = 'block';
    });
    btnProximoFormulario.addEventListener('click', () => {
        if (btnProximoFormulario.classList.contains('btn_prox_form')) {
            preFormulario.style.display = 'none';
            formulario.style.display = 'block';
            btnVoltar.style.display = 'block';
        }
        else {
            console.log('Usuário não selecionou campo válido');
        }
    });
    btnVoltar.addEventListener('click', () => {
        formulario.style.display = 'none';
        btnVoltar.style.display = 'none';
        preFormulario.style.display = 'flex';
    });
}
