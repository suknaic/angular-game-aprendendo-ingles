import { Component, Input, OnInit } from '@angular/core';

import { Coracao } from 'src/app/mock/coracao.mock';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css'],
})
export class TentativasComponent implements OnInit {
  @Input()
  public tentativas: number;

  public coracoes: Coracao[] = [
    new Coracao(false),
    new Coracao(true),
    new Coracao(true),
  ];

  constructor() {}

  ngOnInit(): void {}
}
