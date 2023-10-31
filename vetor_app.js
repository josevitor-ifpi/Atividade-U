import { gerar_vetor, preencher_vetor_manualmente, tchau, opcoes_menu,
    preencher_vetor_automaticamente, load_palavras, opcoes_menu_alternativo,
    maior_menor_e_sua_posicao, media, somatorio, mostrar_contar_positivos,
    mostrar_contar_negativos,
    limpar_tela} from "./vetor_funcionalidades.js"
import { getnumber, print, get_positive_number } from "../modulo3_while/utils/utils_io.js"


function main(){
    const menu = opcoes_menu()
    let produtos = []
    let casos = getnumber(menu)
    

    while (casos != 0) {
        if (casos === 1) {
            
            produtos = gerar_vetor() // produtos assume o tamanho q o usuario digitar
            const menu_alternativo = opcoes_menu_alternativo()
            let casos_alternativos = getnumber(menu_alternativo)

            //while (casos_alternativos != 0){
                if (casos_alternativos === 1){ // nao sei pq n ta declarando as variaveis
                    
                    const valores_automaticos = preencher_vetor_automaticamente(produtos) // vai ser preenchido numa faixa max/min 
                
                }else if (casos_alternativos === 2){

                    const valores_manuais = preencher_vetor_manualmente(produtos)     
                    
                }else if (casos_alternativos === 3){

                    const valores_em_arquivo = load_palavras()

                }
            //}
    

        } else if(casos === 2 ) {
            
            print(produtos)

        } else if(casos === 3 ) {
            // Resetar Vetor (pedir valor número padrão)


        } else if(casos === 4 ) {
            // Ver quantidade de itens no vetor
            
            print(produtos.length)

        } else if(casos === 5 ) {
            // Ver Menor e Maior valores e suas posições

            print('Colecao: ')  
            print(produtos)
            produtos = maior_menor_e_sua_posicao(produtos)
            print(produtos)

        } else if(casos === 6 ) {
            // Média dos Valores
            
            print('Coleção: ')
            print(produtos)
            produtos = media(produtos)
            print(produtos)
        
        } else if(casos === 7 ) {
            // Somatório dos Valores

            print('Coleção: ')
            print(produtos)
            produtos = somatorio(produtos)
            print(produtos)
          
        } else if(casos === 8) {
            // Mostrar Valores Positivos e Quantidade

            print('Coleção: ')
            print(produtos)
            produtos = mostrar_contar_positivos(produtos)
            print(produtos)


        } else if(casos === 9 ) {
            // Mostrar Valores Negativos e Suas Quantidades

            print('Coleção: ')

            print(produtos)
            produtos = mostrar_contar_negativos(produtos)
            print(produtos)

        } else if(casos === 10 ) {
            // Atualizar todos os valores por uma das regras:

            const menu_regra = opcoes_menu_regra() // falta criar a funcao no vetor_funcionalidades
            let casos_regra = getnumber(menu_regra)

            while (casos_regra != 0){
                if (casos_regra === 1){
                    // Multiplicar por um valor
                    
                
                }else if (casos_regra === 2){
                    // Elevar a um valor (exponenciação)
                         
                    
                }else if (casos_regra === 3){
                    // Reduzir a uma fração (pedir  a fração fração ex: ⅕)
                    

                }else if (casos_regra === 4){
                    // Substituir valores negativos por um número aleatórios da uma faixa(min, max)
                    

                }else if (casos_regra === 5){
                    // Ordenar valores (reverse?)
                    

                }else if (casos_regra === 6){
                    // Embaralhar valores
                    

                }
            }
        
        } else if(casos === 11 ) {
            // Adicionar Novos Valores

        
        } else if(casos === 12 ) {
            // Remover Itens por Valor exato

        
        } else if(casos === 13 ) {
            // Remover por Posição


        } else if(casos === 14 ) {
            // Editar valor específico por Posição


        } else if(casos === 15 ) {  
            // Salvar valores em arquivo (https://www.geeksforgeeks.org/node-js-fs-writefilesync-method/)
        

        } else if(casos === 16 ) {
            // Sair (salvar valores automaticamente ao sair)
        
        }
        casos = getnumber(menu)
        limpar_tela()
    }
    
    
    tchau()
}

main()