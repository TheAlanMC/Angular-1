import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tercer_parcial';
  values = '';

  onValueChange(value: any) {
    console.log(value.target.value);
    this.values = (value.target.value / 6.96).toFixed(2) + ' USD';

  }


}
