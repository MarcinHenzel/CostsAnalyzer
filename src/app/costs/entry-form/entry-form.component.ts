import { Component, OnInit, Inject, Optional } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CategoryManagerComponent } from '../category-manager/category-manager.component';
import { CostsStorageService } from '../costs-storage.service';
import { LocalStorage } from 'ngx-webstorage';

@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.scss']
})
export class EntryFormComponent implements OnInit {
  entryForm: FormGroup;
  @LocalStorage() public categories;
  isEditMode = this.dialogData ? true : false;
  get category() { return this.entryForm.get('category').value; }
  get date() { return this.entryForm.get('date').value; }
  get description() { return this.entryForm.get('description').value; }
  get value() { return this.entryForm.get('value').value; }

  constructor(private dialog: MatDialog,
    @Optional() @Inject(MAT_DIALOG_DATA) private dialogData,
    private storage: CostsStorageService
  ) { }
  ngOnInit(): void {
    this.entryForm = new FormGroup({
      category: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      description: new FormControl(''),
      value: new FormControl('', Validators.required),
    });
    if (this.isEditMode) this.fillForm();
  }
  submitEntry() {
    this.isEditMode ? this.editEntry() : this.addEntry();
  }
  editEntry() {
     this.storage.editEntry({
       id: this.dialogData.id,
       category: this.category,
       date: this.date,
       description: this.description,
       value: this.value
     });
  }
  addEntry() {
    this.storage.addEntry({
      id: this.storage.getUniqueEntryId(),
      category: this.category,
      date: this.date,
      description: this.description,
      value: this.value
    });
  }
  openCategoryManager() {
    this.dialog.open(CategoryManagerComponent);
  }

  fillForm() {
    const { category, date, description, value } = this.dialogData;
    this.entryForm.setValue({
      category, date, description, value
    });
  }
}

