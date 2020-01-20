import { Injectable } from '@angular/core';
import { User } from '../ViewModule/user';

@Injectable({
  providedIn: 'root'
})
export class ServiceShareService {
  ListOfUsers:User[];
  constructor() { 
    // console.log("services");
    this.ListOfUsers=
    [
      new User(1,'Ahmed',154),
      new User(2,'Omar',654),
      new User(3,'Ali',254),
      new User(4,'Basma',369),
      new User(5,'Soha',243),
      new User(6,'Yasser',651),
    ]
  }
  filterItems(searchTerm) {
    return this.ListOfUsers.filter(item => {
      return item.Name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }
  
}
