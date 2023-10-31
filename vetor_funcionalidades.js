// import { question } from "readline-sync";
import { get_text, print, get_positive_number, getnumber } from "../modulo3_while/utils/utils_io.js"; 
import {readFileSync} from'fs'

export function load_palavras(){
  const nome_arquivo = get_text('Nome do arquivo: ')
  const arquivo = readFileSync(nome_arquivo, 'utf-8')
  const valores = arquivo.split('\n')

  return valores
}

export function gerar_vetor() {
    const tamanho = get_positive_number('Tamanho do vetor: ')
    const vetor = Array(tamanho)
    
    return vetor
  }
  
  export function gerar_vetor_aleatorio(tamanho) {
    const vetor = Array(tamanho)
  
    for (let i = 0; i < tamanho; i++) {
      vetor[i] = obter_numero_aleatorio()
    }
  
    return vetor
  }
  
  export function obter_numero_aleatorio(limite = 100) {
    return Math.floor(Math.random() * limite)
  }
  
  export function tchau() {
    const tchaus = [
      "Tchau coração!",
      "Já estou com saudades!",
      "Volte sempre!"
    ]
  
    const index = Math.floor(Math.random() * tchaus.length)
  
    print(tchaus[index])
  }
  
  export function preencher_vetor_manualmente(vetor) {
    for (let i = 0; i < vetor.length; i++) {
      const item = get_text(`Digite o valor para a posição ${i}: `)
      vetor[i] = item
    }
  }
    
  
  export function limpar_tela() {
    get_text("<Enter>....")
    console.clear()
  }

  export function opcoes_menu() {
    let menu = '------------------PLAY NUMBERS---------------------'
    menu += '\n1 - Inicializar Vetor Numérico' // 3 opções aqui
    menu += '\n2 - Mostrar todos os valores'
    menu += '\n3 - Resetar Vetor (pedir valor número padrão)'
    menu += '\n4 - Ver quantidade de itens no vetor'
    menu += '\n5 - Ver Menor e Maior valores e suas posições'
    menu += '\n6 - Média dos Valores'
    menu += '\n7 - Somatório dos Valores'
    menu += '\n8 - Mostrar Valores Positivos e Quantidade'
    menu += '\n9 - Mostrar Valores Negativos e Suas Quantidade'
    menu += '\n10 - Atualizar todos os valores por uma das regras:' // 6 opcões de regras aqui
    menu += '\n11 - Adicionar Novos Valores'
    menu += '\n12 - Remover Itens por Valor exato'
    menu += '\n13 - Remover por Posição'
    menu += '\n14 - Editar valor específico por Posição'
    menu += '\n15 - Salvar valores em arquivo (https://www.geeksforgeeks.org/node-js-fs-writefilesync-method/)'
    menu += '\n16 - Sair (salvar valores automaticamente ao sair)'
    menu += '\n0 - Sair' 
    menu += '\n>>  '
  
    return menu
  }

  export function preencher_vetor_automaticamente(vetor) {
    const valor_maximo = getnumber('Limite máximo: ')
    const valor_minimo = getnumber('Limite mínimo: ')
    if (valor_minimo > valor_maximo) {
      print("O valor mínimo é maior que o valor máximo.")
      return        
    }
  
    for (let i = 0; i < vetor.length; i++) {
      vetor[i] = Math.floor(Math.random() * ((valor_maximo - valor_minimo )) + valor_minimo) // O limite máximo não será atingido
    }
  }

  export function opcoes_menu_alternativo(){
    let menu_alternativo = '------------------PLAY NUMBERS---------------------'
    menu_alternativo += '\n1 - Vetor Numérico Automático'
    menu_alternativo += '\n2 - Vetor Numérico Manual'
    menu_alternativo += '\n3 - Vetor Numérico com Arquivo'
    menu_alternativo += '\n0 - Sair'
    menu_alternativo += '\n>>  '

    return menu_alternativo
  }

export function maior_menor_e_sua_posicao(colecao){
  let maior = colecao[0]
  let menor = colecao[0]
  let posicao_maior = 0
  let posicao_menor = 0

  for (let i = 0; i < colecao.length; i++) { //percorrer a colecao
    let numero = colecao[i]

    if (numero > maior){
      maior = numero
      posicao_maior = i
    }
    
    if (numero < menor){
      menor = numero
      posicao_menor = i
    }
  }

  return `Maior: ${maior} 
  Posicao Maior: ${posicao_maior} 
  \nMenor: ${menor}
  Posicao Menor: ${posicao_menor}`
}

export function media(colecao){
  let geral = colecao.length

  for (let i = 0; i < colecao.length; i++) { // somatorio
    resultado_geral += colecao[i]
  } 
  
  return {
    Geral: `Média: ${(resultado_geral / geral).toFixed(2)}`
  }
}

export function somatorio(colecao){
  let resultado = 0
  for (let i = 0; i < colecao.length; i++) {
    let numero = colecao[i]

    resultado += numero
    
  }

  return `Somatorio: ${resultado}`
}

export function mostrar_contar_positivos(colecao){
  let positivos = 0

  for (let i = 0; i < colecao.length; i++){ //
    let numero = colecao[i]
    if (numero > 0) {
      print(numero)
      positivos++
    }
  }

  return positivos
}

export function mostrar_contar_negativos(colecao){
  let negativos = 0

  for (let i = 0; i < colecao.length; i++){ //
    let numero = colecao[i]
    if (numero < 0) {
      print(numero)
      negativos++
    }
  }

  return negativos
}