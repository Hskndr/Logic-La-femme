import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-relation-type',
  templateUrl: './relation-type.component.html',
  styleUrls: ['./relation-type.component.css']
})
export class RelationTypeComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

// button file
  change() {
    let pdrs = (<HTMLInputElement>document.getElementById('file-upload')).files[0].name;
    document.getElementById('info').innerHTML = pdrs;
  }

  // button file
}
