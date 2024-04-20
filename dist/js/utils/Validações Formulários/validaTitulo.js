import { verificaEntrada } from '../../components/Interações Adicionar Entradas/validaSubFormularioEntrada.js';
export function validaEntrada(inputElemennt) {
    const limitaALestras = inputElemennt.value.replace(/[^a-zA-Z]/g, '');
    inputElemennt.value = limitaALestras;
    verificaEntrada();
    return limitaALestras.length > 0;
}
