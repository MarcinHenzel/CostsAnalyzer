import { Component, OnInit, Input } from '@angular/core';
import { Entry } from 'src/app/models/Entry';

@Component({
  selector: 'app-entry-el',
  templateUrl: './entry-el.component.html',
  styleUrls: ['./entry-el.component.scss']
})
export class EntryElComponent implements OnInit {
  @Input() public entry: Entry;
  constructor() { }

  ngOnInit(): void {
  }

}
