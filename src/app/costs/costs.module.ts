import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntryFormComponent } from './entry-form/entry-form.component';
import { EntryListComponent } from './entry-list/entry-list.component';
import { EntryElComponent } from './entry-el/entry-el.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { CategoryManagerComponent } from './category-manager/category-manager.component';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {TextFieldModule} from '@angular/cdk/text-field';

@NgModule({
  declarations: [EntryFormComponent, EntryListComponent, EntryElComponent, CategoryManagerComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatDialogModule,
    MatSelectModule,
    MatButtonModule,
    TextFieldModule
  ],
  exports: [
    [EntryFormComponent, EntryListComponent],
  ],
  entryComponents: [CategoryManagerComponent]
})
export class CostsModule { }
