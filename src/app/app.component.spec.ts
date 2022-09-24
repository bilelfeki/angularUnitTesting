import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent',function(){
  //Test a component that have not a dependency 
  it("should switch isOn when calling #clicked()",function(){
    const appComponent = new AppComponent() ; 
      expect(appComponent.isOn).toEqual(true);
      appComponent.clicked() ;
      expect(appComponent.isOn).toEqual(false);
      appComponent.clicked() ;
  })
})