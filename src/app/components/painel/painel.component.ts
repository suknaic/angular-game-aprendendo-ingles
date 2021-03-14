import { Component, OnInit, EventEmitter, Output } from '@angular/core';
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

  @Output()
  public encerrarJogo: EventEmitter<string>;

  constructor() {
    this.frases = Frases;
    this.instrucao = 'Traduza a Frase:';
    this.rodadaFrase = this.frases[this.rodada];
    this.encerrarJogo = new EventEmitter();
  }

  ngOnInit(): void {}

  atualizaResposta(event: Event): void {
    const { value } = event.target as HTMLInputElement;

    this.resposta = value;
  }

  verificarResposta(): void {
    if (
      this.rodadaFrase.frasePortugues.toUpperCase() ===
      this.resposta.toUpperCase()
    ) {
      this.progresso = this.progresso + this.frases.length / 100;
      this.rodada++;

      if (this.rodada === 4) {
        this.encerrarJogo.emit('vitoria');
      }

      this.atualizaRodada();
    } else {
      this.tentativas--;

      if (this.tentativas === -1) {
        this.encerrarJogo.emit('derrota');
      }
    }
  }

  atualizaRodada(): void {
    this.rodadaFrase = this.frases[this.rodada];
    this.resposta = '';
  }
}
