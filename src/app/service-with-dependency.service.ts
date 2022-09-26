import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceWithDependencyService {

  constructor() { }
  isItTrue(){
    return true ; 
  }
}
