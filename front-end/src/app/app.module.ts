import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TreeDiagramComponent } from './tree-diagram/tree-diagram.component';
import {ListTreeComponent} from "./list-trees/list-tree.component";

@NgModule({
  declarations: [
    AppComponent,
    TreeDiagramComponent,
    ListTreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
