import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-category-manager',
  templateUrl: './category-manager.component.html',
  styleUrls: ['./category-manager.component.scss']
})
export class CategoryManagerComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CategoryManagerComponent>) { }

  ngOnInit(): void {
  }
  close(): void {
    this.dialogRef.close();
  }
}
