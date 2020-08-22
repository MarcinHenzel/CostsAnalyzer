import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CategoryManagerComponent } from '../category-manager/category-manager.component';

@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.scss']
})
export class EntryFormComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
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
  categories = [{ value: 'dsa1' }, { value: 'dsa2' }, { value: 'dsa3' }]
  ngOnInit(): void {
  }
  addEntry() {
    console.log(this.value)
  }
  openCategoryManager() {
    const dialogRef = this.dialog.open(CategoryManagerComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }
}

