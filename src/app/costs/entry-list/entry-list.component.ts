import { Component, OnInit } from '@angular/core';
import { Entry } from 'src/app/models/Entry';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.scss']
})
export class EntryListComponent implements OnInit {

  constructor() { }
  entries: Entry[] = [{ category: 'food', date: new Date(), description: 'dsa', value: 22 }, { category: 'food2', date: new Date(), description: 'dsa2', value: 22 }]
  ngOnInit(): void {
    console.log(this.entries)
  }

}
