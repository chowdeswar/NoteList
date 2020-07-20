import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NoteListComponent } from './note-list/note-list.component';
import { GenderPipe } from './gender.pipe';
import { FilterCountComponent } from './filter-count/filter-count.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteListComponent,
    GenderPipe,
    FilterCountComponent
  ],
  imports: [
    BrowserModule,
     FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
