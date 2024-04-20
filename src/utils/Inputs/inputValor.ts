import { FormatacaoMonetaria } from '../../types/formatacaoMonetaria.js'
import { msgErroValor } from '../mensagensErro.js'
import { verificaEntrada } from '../../components/Interações Adicionar Entradas/validaSubFormularioEntrada.js'

export function inputValor() {
    const valorEntrada = document.querySelectorAll('#input_valor')

    valorEntrada.forEach((input: HTMLInputElement) => {
        msgErroValor(input)
        
        input.addEventListener('input', () => {
            let limitarANumero = input.value
            const valorNumerico: number = parseFloat(limitarANumero) / 100
        
            const resultadoFormatado: string = FormatacaoMonetaria.formatarMoeda
            (valorNumerico)
        
            input.value = resultadoFormatado
    
            verificaEntrada()
        })
    })
}