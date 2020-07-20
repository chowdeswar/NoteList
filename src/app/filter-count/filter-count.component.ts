import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-count',
  templateUrl: './filter-count.component.html',
  styleUrls: ['./filter-count.component.scss']
})
export class FilterCountComponent implements OnInit {

  @Input() allData: number;
  @Input() maleData: number;
  @Input() femaleData: number;
  selectedOption = 'all';
 
  @Output() emitType: EventEmitter<string> = new EventEmitter<string>();
  constructor() {
    // this.emitType.emit(this.selectedOption)
  }

  ngOnInit(): void {
    // console.log('all is: ', this.allData, this.maleData, this.femaleData);
  }

  onChangeType() {
    // console.log('change type selectedOption: ', this.selectedOption);
    this.emitType.emit(this.selectedOption);
  }

}
