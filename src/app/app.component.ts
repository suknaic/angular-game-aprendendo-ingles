import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public jogoEmAndamento = true;
  public tipoEncerramento: string;

  public encerrarJogo(message: string): void {
    this.jogoEmAndamento = false;
    this.tipoEncerramento = message;
  }

  public reiniciarGame(): void {
    this.jogoEmAndamento = true;
  }
}
