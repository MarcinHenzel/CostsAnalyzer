import { CostsStorageService } from '../services/costs-storage.service';
import { AbstractControl } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable()
export class CategoryValidator {
  constructor(private storage: CostsStorageService) { }


  checkCategory(control: AbstractControl): { [key: string]: any } | null {
    const isRepeated = this.storage.categories.reduce((acc, category) => {
      if (category === control.value) {
        acc = true;
      }
      return acc;
    }, false);
    return isRepeated ? { addCategoryControl: true } : null;
  }
}
