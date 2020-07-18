import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss']
})
export class NoteListComponent implements OnInit {

  @Input() textNotes: any = [];
  @Output() noteDeletion = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    console.log(this.textNotes);
  }

  deleteNote(index) {
    this.noteDeletion.emit(index);
  }

}
