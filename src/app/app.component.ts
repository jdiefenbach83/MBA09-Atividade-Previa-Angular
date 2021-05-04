import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'imc';

  height: number;
  weight: number;
  
  calculateIMC(): string {    
    const imc: number = +this.weight / ((+this.height / 100) ** 2);
    const imcToReturn = imc.toFixed(2);
    
    if (imc >= 16 && imc < 17) {
      return `${imcToReturn} kg/m²: Muito abaixo do peso`;
    }

    if (imc >= 17 && imc < 18.5) {
      return `${imcToReturn} kg/m²: Abaixo do peso`;
    }

    if (imc >= 18.5 && imc < 25) {
      return `${imcToReturn} kg/m²: Peso normal`;
    }

    if (imc >= 25 && imc < 30) {
      return `${imcToReturn} kg/m²: Acima do peso`;
    }

    if (imc >= 30 && imc < 35) {
      return `${imcToReturn} kg/m²: Obesidade grau 1`;
    }

    if (imc >= 35 && imc <= 40) {
      return `${imcToReturn} kg/m²: Obesidade grau 2`;
    }

    if (imc > 40) {
      return `${imcToReturn} kg/m²: Obesidade grau 3`;
    }
    
    return '';
  }
}
