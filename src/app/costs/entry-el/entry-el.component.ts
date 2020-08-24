import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EntryFormComponent } from '../entry-form/entry-form.component';
import { Entry } from 'src/app/shared/models/Entry';


@Component({
  selector: 'app-entry-el',
  templateUrl: './entry-el.component.html',
  styleUrls: ['./entry-el.component.scss']
})
export class EntryElComponent implements OnInit {
  @Input() public entry: Entry;
  @Output() public deleteEl = new EventEmitter();
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  edit() {
    this.dialog.open(EntryFormComponent, { data: this.entry, width: '80vw', panelClass: 'no-padding-dialog' });
  }
  delete() {
    this.deleteEl.emit(this.entry.id);
  }
}
