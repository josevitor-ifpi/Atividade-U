import { question } from "readline-sync"
import { getnumber } from "../modulo3_while/utils/utils_io.js";

export function splitar_frase(frase = 'Digite a frase: '){
    const texto = question(frase)
    return texto.split(' ')
}

export function substituir_letras(entrada) {
    const trocado = new RegExp(alvo);
    return entrada.replace(trocado, substituto);
}
  

export function inverter_ordem_frase(frase) {
    return frase.split(' ').reverse().join()
}

export function contar_caracteres(entrada) {
    return entrada.length
}

export function caixa_alta(frase){
    return frase.toUpperCase()
}

export function caixa_baixa(frase){
    return frase.toLowerCase()
}

export function ordem_decrescente(colecao, opcao) {
    let referencia_pivot = Math.floor(colecao.length / 2);
    let pivot = colecao[referencia_pivot];
  
    let menores = [];
    let iguais = [];
    let maiores = [];
  
    if (colecao.length < 2) {
      return colecao;
    }
  
    if (opcao === "multiplos_negativos") {
      let n = getnumber('Digite o valor de N: ');
      for (let i = 0; i < colecao.length; i++) {
        if (colecao[i] < pivot) {
          menores = [...menores, colecao[i]];
        } else if (colecao[i] > pivot) {
          if (n && colecao[i] < 0 && colecao[i] % n === 0) {
            maiores = [...maiores, colecao[i]];
          }
        } else {
          iguais = [...iguais, colecao[i]];
        }
      }
  
      return [...ordem_decrescente(menores), ...iguais, ...ordem_decrescente(maiores)];
    }
  
    if (opcao === "multiplos_positivos") {
      let n = getnumber('Digite o valor de N: ');
      for (let i = 0; i < colecao.length; i++) {
        if (colecao[i] < pivot) {
          menores = [...menores, colecao[i]];
        } else if (colecao[i] > pivot) {
          if (n && colecao[i] > 0 && colecao[i] % n === 0) {
            maiores = [...maiores, colecao[i]];
          }
        } else {
          iguais = [...iguais, colecao[i]];
        }
      }
  
      return [...ordem_decrescente(menores), ...iguais, ...ordem_decrescente(maiores)];
    }
  
    if (opcao === "todos") {
      for (let i = 0; i < colecao.length; i++) {
        if (colecao[i] < pivot) {
          menores = [...menores, colecao[i]];
        } else if (colecao[i] > pivot) {
          maiores = [...maiores, colecao[i]];
        } else {
          iguais = [...iguais, colecao[i]];
        }
      }
      return [...ordem_decrescente(maiores), ...iguais, ...ordem_decrescente(menores)];
    }
  
    if (opcao === "pares") {
      for (let i = 0; i < colecao.length; i++) {
        if (colecao[i] % 2 === 0) {
          maiores = [...maiores, colecao[i]];
        } else {
          menores = [...menores, colecao[i]];
        }
      }
      return [...ordem_decrescente(menores), ...ordem_decrescente(maiores)];
    }
  
    if (opcao === "impares") {
      for (let i = 0; i < colecao.length; i++) {
        if (colecao[i] % 2 === 1) {
          maiores = [...maiores, colecao[i]];
        } else {
          menores = [...menores, colecao[i]];
        }
      }
      return [...ordem_decrescente(menores), ...ordem_decrescente(maiores)];
    }
  
    if (opcao === "positivos") {
      for (let i = 0; i < colecao.length; i++) {
        if (colecao[i] < pivot) {
          menores = [...menores, colecao[i]];
        } else if (colecao[i] > pivot) {
          if (colecao[i] > 0) {
            maiores = [...maiores, colecao[i]];
          }
        } else {
          iguais = [...iguais, colecao[i]];
        }
      }
  
      return [...ordem_decrescente(menores), ...iguais, ...ordem_decrescente(maiores)];
    }
  
    if (opcao === "negativos") {
      for (let i = 0; i < colecao.length; i++) {
        if (colecao[i] < pivot) {
          menores = [...menores, colecao[i]];
        } else if (colecao[i] > pivot) {
          if (colecao[i] < 0) {
            maiores = [...maiores, colecao[i]];
          }
        } else {
          iguais = [...iguais, colecao[i]];
        }
      }
  
      return [...ordem_decrescente(menores), ...iguais, ...ordem_decrescente(maiores)];
    }
  }