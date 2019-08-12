import { Component, Inject } from '@angular/core';
import { SearchComponent } from "./search/search.component";
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'DesafioTOTVS';
  items = [
    {
      name: 'Golden Tulip',
      text: 'Golden Tulip é uma cadeia originalmente holandesa de hoteis e resorts. Em todo o mundo existem mais de 240 hoteis Golden Tulip Espalhados por 45 países.'
    },
    {
      name: 'Golden Tulip Inn',
      text: 'Golden Tulip Inn é uma cadeia originalmente holandesa de hoteis e resorts. Em todo o mundo existem mais de 240 hoteis Golden Tulip Espalhados por 45 países.'
    },
    {
      name: 'Ibis Hotel',
      text: 'Ibis Hotel é uma cadeia originalmente holandesa de hoteis e resorts. Em todo o mundo existem mais de 240 hoteis Golden Tulip Espalhados por 45 países.'
    },
    {
      name: 'Lapa Inn',
      text: 'Lapa Inn é uma cadeia originalmente holandesa de hoteis e resorts. Em todo o mundo existem mais de 240 hoteis Golden Tulip Espalhados por 45 países.'
    }
  ]
  selectedItems = []
  modalShow= false
  openAccordion = 9999
  accordionShow = false

  popUp() {
    this.modalShow = true
  }

  reciverFeedback(responseSearch) {
    this.selectedItems = []
    this.items.map((item) => {
      let match = item.name.indexOf(responseSearch)
      if( match != -1){ 
        return this.selectedItems.push(item)
      }
    })

    console.log(this.selectedItems);
  }

  reciverModalFeedback(resp) {
    debugger
    this.modalShow = resp
  }

  accordionRef(i){
    debugger
    if(this.openAccordion == i && this.accordionShow ) {
      this.accordionShow = false
    } else {
      this.accordionShow = true
    }
    this.openAccordion = i;
  }
}
