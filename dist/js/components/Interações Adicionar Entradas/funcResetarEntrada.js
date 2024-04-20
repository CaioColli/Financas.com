export function resetarEntrada() {
    const preFormulario = document.querySelector('#pre_formulario_entrada');
    const formulario = document.querySelector('.form_entrada');
    const btnVoltarInicio = document.querySelector('#bnt_inicio_card_addDinheiro');
    const btnVoltar = document.querySelector('#bnt_voltar_pagina_entrada');
    const tituloAddDinheiro = document.querySelector('#titulo_addDinheiro');
    const btnAddEntrada = document.querySelector('#add_entrada');
    preFormulario.style.display = 'none';
    formulario.style.display = 'none';
    btnVoltarInicio.style.display = 'none';
    btnVoltar.style.display = 'none';
    tituloAddDinheiro.style.display = 'block';
    btnAddEntrada.style.display = 'block';
}
