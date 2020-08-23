import { CostsStorageService } from './../costs-storage.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { LocalStorage } from 'ngx-webstorage';

@Component({
  selector: 'app-category-manager',
  templateUrl: './category-manager.component.html',
  styleUrls: ['./category-manager.component.scss']
})
export class CategoryManagerComponent implements OnInit {
  newCat: any;
  CatToDel: any;
  constructor(private storage: CostsStorageService, public dialogRef: MatDialogRef<CategoryManagerComponent>) { }

  @LocalStorage() public categories;
  ngOnInit(): void {
  }

  addCategory(){
    this.storage.addCategory(this.newCat);
    this.newCat = '';
  }
  deleteCategory() {
    this.storage.deleteCategory(this.CatToDel);
  }
  close(): void {
    this.dialogRef.close();
  }
}
