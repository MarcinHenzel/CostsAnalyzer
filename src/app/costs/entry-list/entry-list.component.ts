import { Component, OnInit } from '@angular/core';
import { LocalStorage} from 'ngx-webstorage';
import { Entry } from 'src/app/shared/models/Entry';
import { CostsStorageService } from 'src/app/shared/services/costs-storage.service';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.scss'],
})
export class EntryListComponent implements OnInit {

  @LocalStorage() public entries: Entry[];
  constructor(private storage: CostsStorageService) { }
  ngOnInit(): void {
  }
  deleteEntry(id: number): void {
    this.storage.deleteEntry(id);
  }
}
