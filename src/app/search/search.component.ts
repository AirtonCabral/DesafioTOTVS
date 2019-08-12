import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CompleterService, CompleterData } from 'ng2-completer';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
  @Output() responseSearch = new EventEmitter();

  constructor () {}
  ngOnInit() {}

  protected searchStr: string;
  protected captain: string;
  protected captains = ['Golden Tulip','Golden Tulip Inn', 'Ibis Hotel', 'Lapa Inn' ];
 
  search(text: string) {
    this.responseSearch.emit(text)
  }
}



  
