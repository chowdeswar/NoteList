import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from './../data.service';
@Component({
  selector: 'app-list-details',
  templateUrl: './list-details.component.html',
  styleUrls: ['./list-details.component.scss']
})
export class ListDetailsComponent implements OnInit {
  routeCode: any;
  listDetails: any = [];

  constructor(private route: ActivatedRoute, private _dataService: DataService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (routeParam) => {
        console.log(routeParam.get('code'));
        this.routeCode = routeParam.get('code');
      }
    )
    this.listDetails = this._dataService.getCodeDetails(this.routeCode);
  }

}
