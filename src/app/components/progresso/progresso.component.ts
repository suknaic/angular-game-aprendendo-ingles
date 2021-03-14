import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progresso',
  templateUrl: './progresso.component.html',
  styleUrls: ['./progresso.component.css'],
})
export class ProgressoComponent implements OnInit {
  @Input('progresso') public progresso = 0;

  constructor() {}

  ngOnInit(): void {}
}
