import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CostsModule } from './costs/costs.module';
import {MatInputModule} from '@angular/material/input';
import {NgxWebstorageModule} from 'ngx-webstorage';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CostsModule,
    MatInputModule,
    NgxWebstorageModule,
    NgxWebstorageModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
