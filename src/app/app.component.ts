import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tercer_parcial';

  onValueChange(value: any) {
    console.log(value.target.value);


  }


}
