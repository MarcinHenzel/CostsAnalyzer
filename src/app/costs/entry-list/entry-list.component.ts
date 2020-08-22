import { Component, OnInit } from '@angular/core';
import { Entry } from 'src/app/models/Entry';
import { LocalStorage, LocalStorageService } from 'ngx-webstorage';
import { CostsStorageService } from '../costs-storage.service';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.scss']
})
export class EntryListComponent implements OnInit {

  @LocalStorage() public entries: Entry[];
  constructor(private storage:  CostsStorageService) { }
/*   entries: Entry[] = [{ category: 'food', date: new Date(), description: 'dsa', value: 22 },
   { category: 'food2', date: new Date(), description: 'dsa2', value: 22 }] */
  ngOnInit(): void {
  }

  editEntry(symbol){
    console.log(symbol)
    console.log(symbol)
  }
  deleteEntry(id: number) {
    this.storage.deleteEntry(id);

  }
}
