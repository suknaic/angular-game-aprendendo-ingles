import { Component, Input, OnChanges, OnInit } from '@angular/core';

import { Coracao } from 'src/app/mock/coracao.mock';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css'],
})
export class TentativasComponent implements OnInit, OnChanges {
  @Input() public tentativas: number;

  public coracoes: Coracao[] = [
    new Coracao(true),
    new Coracao(true),
    new Coracao(true),
  ];

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    if (this.tentativas !== this.coracoes.length) {
      const indice = this.coracoes.length - this.tentativas;
      this.coracoes[indice - 1].cheio = false;
    }
  }
}
