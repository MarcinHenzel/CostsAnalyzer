import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CostsModule } from './costs/costs.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CostsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
