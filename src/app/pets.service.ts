
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class petsService {
 public petsList:Array<any> = [{name:"Tokyo",age:3, type:"Dog", color:"Black"}];

}
