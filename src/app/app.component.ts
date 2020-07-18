import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angularauth';
  example = "@App Changes";
  TextNote = "";
  TextNoteArray = [];

  constructor() {
  }

  GetNoteText(textNote) {
    this.TextNote = "";
    if(textNote != "") {
      this.TextNoteArray.push(textNote);
    }
    console.log(textNote);
  }

  deleteNote(indexing) {
    this.TextNoteArray.splice(indexing, 1);
  }

}
