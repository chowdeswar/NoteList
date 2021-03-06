import { Component, OnInit } from '@angular/core';
import { Datas } from './../data.interface';
import { DataService } from './../data.service';
@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {

  title = '@NoteList';
  example = "@App Changes";
  // LogoImageUrl = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==";
  TextNote = "";
  TextNoteArray = [];
  disableFlag = true;
  badHtml: string = "Hello <script src=''>alert('Hacked');</script> wordl!";
  colSpanProp = 3;
  combo: any;
  nameVAL: string = "Tim cook";
  loopData: Datas[] = [];
  selectedRadioButton = 'all';

  constructor(private _dataService: DataService) {
    this.combo = {
      'colorClass': true,
      'boldClass': true,
      fontStles: true
    }
  }

  ngOnInit() {
    this.loopData = this._dataService.getData();
  }

  getAll() {
    // console.log(this.loopData.length)
    return this.loopData.length;
  }

  getMaleData() {
    return this.loopData.filter(m => m.gender === 'Male').length;
  }

  getFemaleData() {
    return this.loopData.filter(m => m.gender === 'Female').length;
  }

  emittedEvent(event) {
    this.selectedRadioButton = event;
    // console.log(typeof event, ' and type is::: ', event);
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
