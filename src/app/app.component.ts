import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularUnitTesting';
  isOn = true ; 

  clicked():void{
    this.isOn = ! this.isOn
  }
  get message():string{
    return `${this.isOn}`
  }
}
