import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {

  public porcentagem: number = 0;
  public minutosUltimaLeitura: number = 0;


  constructor() { }

  ngOnInit() {
    this.minutosUltimaLeitura = 18;
    this.porcentagem = 20;
    this.encherBotijao();
  }

  encherBotijao() {

    const liquido = document.getElementById('liquido') as HTMLElement;
    let cor = '';

    if (this.porcentagem > 70) {
      cor = '#22c55e'; // verde
    } else if (this.porcentagem >= 40) {
      cor = '#eab308'; // amarelo (40 a 70)
    } else {
      cor = '#ef4444'; // vermelho (abaixo de 40)
    }

    // altura do líquido = a própria porcentagem (ex.: 40 -> 40% do botijão)
    liquido.style.height = this.porcentagem + '%';

    document.documentElement.style.setProperty(
      '--cor-liquido',
      cor
    );
  }
}
