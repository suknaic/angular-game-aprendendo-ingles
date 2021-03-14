import { Component, OnInit, Output } from '@angular/core';
import { Frase } from 'src/app/model/frase.model';
import Frases from 'src/app/mock/frases.mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css'],
})
export class PainelComponent implements OnInit {
  public frases: Frase[];
  public instrucao: string;
  public resposta = '';

  public rodadaFrase: Frase;
  private rodada = 0;

  public tentativas = 3;

  public progresso = 0;
  constructor() {
    this.frases = Frases;
    this.instrucao = 'Traduza a Frase:';
    this.rodadaFrase = this.frases[this.rodada];
  }

  ngOnInit(): void {}

  atualizaResposta(event: Event): void {
    const { value } = event.target as HTMLInputElement;

    this.resposta = value;
  }

  verificarResposta(): void {
    if (
      this.rodadaFrase.frasePortugues.toUpperCase === this.resposta.toUpperCase
    ) {
      this.rodada++;
      this.progresso = this.progresso + this.frases.length / 100;
      this.atualizaRodada();
    } else {
      this.tentativas--;

      if (this.tentativas === 0) {
        console.log('voce perdeu');
      }
    }
  }

  atualizaRodada(): void {
    this.rodadaFrase = this.frases[this.rodada];
    this.resposta = '';
  }
}
