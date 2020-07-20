import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NoteListComponent } from './note-list/note-list.component';
import { GenderPipe } from './gender.pipe';
import { FilterCountComponent } from './filter-count/filter-count.component';
import { ListingComponent } from './listing/listing.component';

import { AppRoutingModule } from './app-routing.module';
import { NotesComponent } from './notes/notes.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ListDetailsComponent } from './list-details/list-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteListComponent,
    GenderPipe,
    FilterCountComponent,
    ListingComponent,
    NotesComponent,
    NotFoundComponent,
    ListDetailsComponent
  ],
  imports: [
    BrowserModule,
     FormsModule,AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
