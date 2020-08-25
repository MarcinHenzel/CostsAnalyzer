import { Component, OnInit, Inject, Optional } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CategoryManagerComponent } from '../category-manager/category-manager.component';
import { LocalStorage } from 'ngx-webstorage';
import { CostsStorageService } from 'src/app/shared/services/costs-storage.service';

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
      date: new FormControl('', Validators.required),
      value: new FormControl('', [Validators.required, Validators.pattern('[0-9]*')]),
      category: new FormControl('', Validators.required),
      description: new FormControl(''),
    });
    if (this.isEditMode) {
      this.fillForm();
    }
  }
  submitEntry(): void {
    this.isEditMode ? this.editEntry() : this.addEntry();
  }
  editEntry(): void {
    this.storage.editEntry({
      id: this.dialogData.id,
      category: this.category,
      date: this.date,
      description: this.description,
      value: this.value
    });
  }
  addEntry(): void {
    this.storage.addEntry({
      id: this.storage.getUniqueEntryId(),
      category: this.category,
      date: this.date,
      description: this.description,
      value: this.value
    });
  }
  openCategoryManager(): void {
    this.dialog.open(CategoryManagerComponent);
  }

  fillForm(): void {
    const { category, date, description, value } = this.dialogData;
    this.entryForm.setValue({
      category, date, description, value
    });
  }
}

