import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public encerrarJogo(type: string): void {
    if (type === 'vitoria') {
      console.log('encerrar jogo com vitoria');
    } else {
      console.log('encerrar jogo com derrota');
    }
  }
}
