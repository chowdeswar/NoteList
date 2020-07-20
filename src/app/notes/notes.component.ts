import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  TextNote = "";
  TextNoteArray = [];
  constructor() { }

  ngOnInit(): void {
  }

  GetNoteText(textNote) {
    this.TextNote = "";
    if (textNote != "") {
      this.TextNoteArray.push(textNote);
    }
    console.log(textNote);
  }

  deleteNote(indexing) {
    this.TextNoteArray.splice(indexing, 1);
  }


}
