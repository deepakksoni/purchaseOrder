import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReqHeaderComponent } from './req-header/req-header.component';
import { ReqItemsComponent } from './req-items/req-items.component';
import { MainPageComponent } from './main-page/main-page.component';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http';
import { OdataComponent } from './odata/odata.component';
 


@NgModule({
  declarations: [
    AppComponent,
    ReqHeaderComponent,
    ReqItemsComponent,
    MainPageComponent,
    OdataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
