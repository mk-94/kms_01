import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DoneComponent } from './done/done.component';
import { ListComponent } from './list/list.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { CategoryComponent } from './category/category.component';
import {FormsModule} from '@angular/forms';
import { DeleteAlertComponent } from './delete-alert/delete-alert.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DoneComponent,
    ListComponent,
    AddTaskComponent,
    CategoryComponent,
    DeleteAlertComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
