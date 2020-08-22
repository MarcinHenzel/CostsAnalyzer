import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntryFormComponent } from './entry-form/entry-form.component';
import { EntryListComponent } from './entry-list/entry-list.component';
import { EntryElComponent } from './entry-el/entry-el.component';



@NgModule({
  declarations: [EntryFormComponent, EntryListComponent, EntryElComponent],
  imports: [
    CommonModule
  ],
  exports: [
    [EntryFormComponent, EntryListComponent ],
  ]
})
export class CostsModule { }
