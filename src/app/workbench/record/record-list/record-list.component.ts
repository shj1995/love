import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup
} from '@angular/forms';
import { Record } from '../../../model/record';

@Component({
  selector: 'app-workbench/record/record-list',
  templateUrl: './record-list.component.html',

  styleUrls: ['./record-list.component.css']
})
export class RecordListComponent implements OnInit {
  validateForm: FormGroup;
  controlArray = [];
  isCollapse = true;

  private recordList:any[];

  toggleCollapse(): void {
    this.isCollapse = !this.isCollapse;
    this.controlArray.forEach((c, index) => {
      c.show = this.isCollapse ? (index < 6) : true;
    });
  }

  resetForm(): void {
    this.validateForm.reset();
  }

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.recordList=[{id:'123',content:'这是内容',title:'这是标题',date:new Date()}];
    this.validateForm = this.fb.group({});
    for (let i = 0; i < 10; i++) {
      this.controlArray.push({ index: i, show: i < 6 });
      this.validateForm.addControl(`field${i}`, new FormControl());
    }
  }
}
