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
  constructor(private storage: CostsStorageService) { }
  ngOnInit(): void {
  }
  deleteEntry(id: number) {
    this.storage.deleteEntry(id);

  }
}
