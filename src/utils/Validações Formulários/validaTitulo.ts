import { verificaEntrada } from '../../components/Interações Adicionar Entradas/validaSubFormularioEntrada.js'

export function validaEntrada(inputElemennt: HTMLInputElement): boolean {
    const limitaALestras = inputElemennt.value.replace(/[^a-zA-Z]/g, '')
    inputElemennt.value = limitaALestras
    verificaEntrada()

    return limitaALestras.length > 0
}