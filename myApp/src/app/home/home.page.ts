import { Component, OnInit } from '@angular/core';
import { User } from '../ViewModule/user';
import { ServiceShareService } from '../Services/service-share.service';
// references
// https://stackblitz.com/edit/angular-sort-filter?file=src%2Fapp%2Fapp.component.ts
// https://www.freakyjolly.com/ionic-4-ion-reorder-list-drag-drop-sorting-list-in-ionic-4-using-ion-reorder-component/
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  ListOfUserToShow: User[];
  public searchTerm: string = "";
  isDesc: boolean = false;
  column;
 
  constructor(private services:ServiceShareService) {
  
  }
  ngOnInit(){
  this.ListOfUserToShow =this.services.ListOfUsers;
  console.log(this.ListOfUserToShow);
    for(let i=0;i<this.ListOfUserToShow.length;i++){
     { console.log(this.ListOfUserToShow[i].Name)
   this.column  = (this.ListOfUserToShow[i].Name);

    }
  }}
  setFilteredItems() {
    this.ListOfUserToShow = this.services.filterItems(this.searchTerm);
  }

  onRenderItems(event) {
    console.log(`Moving item from ${event.detail.from} to ${event.detail.to}`);
     let draggedItem = this.ListOfUserToShow.splice(event.detail.from,1)[0];
     this.ListOfUserToShow.splice(event.detail.to,0,draggedItem)
    event.detail.complete();
  }
 
  getList() {
    console.table(this.ListOfUserToShow);
    console.log(this.ListOfUserToShow);

  }
  sort(property) {
    
    this.isDesc = !this.isDesc; //change the direction    
   this.column = property;
    let direction = this.isDesc ? 1 : -1;

    this.ListOfUserToShow.sort(function (a, b) {
      if (a[property] < b[property]) {
        return -1 * direction;
      }
      else if (a[property] > b[property]) {
        return 1 * direction;
      }
      else {
        return 0;
      }
    });
  };
}
