import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Entry } from 'src/app/models/Entry';


@Component({
  selector: 'app-entry-el',
  templateUrl: './entry-el.component.html',
  styleUrls: ['./entry-el.component.scss']
})
export class EntryElComponent implements OnInit {
  @Input() public entry: Entry;
  @Output() public deleteEl = new EventEmitter();
  @Output() public editEl = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  edit(){
/*     console.log(this.entry.id)
    console.log(this.entry.id === JSON.parse(this.entry.id.toString())); */

    this.editEl.emit(this.entry.id);
  }
  delete(){
    this.deleteEl.emit(this.entry.id);
  }
}
