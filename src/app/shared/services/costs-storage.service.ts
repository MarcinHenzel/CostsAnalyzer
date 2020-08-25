import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { Entry } from '../models/Entry';

@Injectable({
  providedIn: 'root'
})
export class CostsStorageService {
  get entries(): Entry[] { return this.webStorage.retrieve('entries'); }
  get categories(): string[] { return this.webStorage.retrieve('categories'); }

  constructor(private webStorage: LocalStorageService) {
    this.initLocalStorage();
  }
  addCategory(category: string): void {
    this.webStorage.store('categories', [...this.categories, category]);
  }
  deleteCategory(toDelete: string): void {
    const index = this.categories.indexOf(toDelete);
    this.categories.splice(index, 1);
    this.webStorage.store('categories', this.categories);
  }
  addEntry(entry: Entry): void {
    this.webStorage.store('entries', [entry, ...this.entries]);
  }
  deleteEntry(id: number): void {
    const filteredEntries = this.entries.filter(entry => {
      if (id !== entry.id) {
        return entry;
      }
    });
    this.webStorage.store('entries', filteredEntries);
  }
  editEntry(entryToEdit: Entry): void {
    const editedEntries = this.entries.map((entry) => {
      if (entry.id !== entryToEdit.id) {
        return entry;
      }
      const { category, date, description, value } = entryToEdit;
      return { id: entry.id, category, date, description, value };
    });
    this.webStorage.store('entries', editedEntries);
  }
  getUniqueEntryId(): number {
    let biggestId = this.entries.reduce((acc, entry) => {
      return (entry.id >= acc) ? entry.id : acc;
    }, 0);
    return ++biggestId;
  }
  initLocalStorage(): void {
    const initialEntries = [];
    const initialCategories = ['bills', 'transport', 'food'];
    if (!this.webStorage.retrieve('categories')) {
      this.webStorage.store('categories', initialCategories);
    }
    if (!this.webStorage.retrieve('entries')) {
      this.webStorage.store('entries', initialEntries);
    }
  }
}
