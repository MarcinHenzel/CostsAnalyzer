import { CostsStorageService } from '../../shared/services/costs-storage.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { LocalStorage } from 'ngx-webstorage';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { CategoryValidator } from 'src/app/shared/validators/category.validator';

@Component({
  selector: 'app-category-manager',
  templateUrl: './category-manager.component.html',
  styleUrls: ['./category-manager.component.scss'],
  providers: [CategoryValidator]
})
export class CategoryManagerComponent implements OnInit {
  addForm: FormGroup;
  catToDel: string;
  @LocalStorage() public categories;
  get newCat() { return this.addForm.get('addCategoryControl').value; }

  constructor(private categoryValidator: CategoryValidator,
              private storage: CostsStorageService,
              public dialogRef: MatDialogRef<CategoryManagerComponent>
  ) { }
  ngOnInit(): void {
    this.addForm = new FormGroup({
      addCategoryControl: new FormControl('',
        [Validators.required, this.categoryValidator.checkCategory.bind(this.categoryValidator)])
    });
  }
  addCategory(formDirective): void {
    this.storage.addCategory(this.newCat);
    formDirective.resetForm();
  }
  deleteCategory(): void {
    this.storage.deleteCategory(this.catToDel);
  }
  close(): void {
    this.dialogRef.close();
  }
}
