import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { Entry } from '../models/Entry';

@Injectable({
  providedIn: 'root'
})
export class CostsStorageService {

  /*   entries: Entry[];
    categories: string[]; */
  get entries(): Entry[] {
    return this.webStorage.retrieve('entries');
  }
  get categories() {
    return this.webStorage.retrieve('categories');
  }
  constructor(private webStorage: LocalStorageService) {


    this.initLocalStorage()
  }
  clear() {
    this.webStorage.clear();
  }
  deleteCategory(toDelete) {
    const index = this.categories.indexOf(toDelete);
    this.categories.splice(index, 1);
    this.webStorage.store('categories', this.categories);
  }
  addCategory(category) {
    this.webStorage.store('categories', [...this.categories, category]);
  }
  deleteEntry(id: number): void {
    const filteredEntries = this.entries.filter(entry => {
      if (id !== entry.id) return entry;
    })
    this.webStorage.store('entries', filteredEntries);
  }
  add(entry: Entry) {
    this.webStorage.store('entries', [...this.entries, entry]);
  }
  getUniqueEntryId() {
    let biggestId = this.entries.reduce((acc, entry) => {
      return (entry.id >= acc) ? entry.id : acc;
    }, 0);
    return ++biggestId;
  }
  initLocalStorage() {
    const initialEntries = [];
    const initialCategories = ['bills', 'transport', 'food'];
    if (!this.webStorage.retrieve('categories')) {
      console.log('initCategories');
      this.webStorage.store('categories', initialCategories);
    }
    if (!this.webStorage.retrieve('entries')) {
      console.log('initEntries');
      this.webStorage.store('entries', initialEntries);
    }
    this.webStorage.observe('entries').subscribe((entry) => {
      console.log(entry)
    });
    this.webStorage.observe('categories').subscribe((category) => {
      console.log(category)
    })
  }
}
