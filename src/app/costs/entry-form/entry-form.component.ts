import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CategoryManagerComponent } from '../category-manager/category-manager.component';
import { CostsStorageService } from '../costs-storage.service';
import { LocalStorage } from 'ngx-webstorage';

@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.scss']
})
export class EntryFormComponent implements OnInit {

  @LocalStorage() public categories;
  constructor(public dialog: MatDialog, private storage: CostsStorageService) { }
  entryForm = new FormGroup({
    category: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
    description: new FormControl(''),
    value: new FormControl('', Validators.required),
  })
  get category() {
    return this.entryForm.get('category').value;
  }
  get date() {
    return this.entryForm.get('date').value;
  }
  get description() {
    return this.entryForm.get('description').value;
  }
  get value() {
    return this.entryForm.get('value').value;
  }
  /* categories = [{ value: 'dsa1' }, { value: 'dsa2' }, { value: 'dsa3' }] */

  ngOnInit(): void {

  }
  addEntry() {
    this.storage.add({id: this.storage.getUniqueEntryId(), category: 'food', date: new Date(), description: 'dsa', value: 22 });
  }
  openCategoryManager() {
    this.dialog.open(CategoryManagerComponent);
  }

  clear(){
    this.storage.clear();
  }

}

