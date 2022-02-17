import { style } from '@angular/animations';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { convertTypeAcquisitionFromJson } from 'typescript';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() arr!: any;
  @Input() editBtn!: any;
  @Output() index = new EventEmitter<any>();
  @Output() status = new EventEmitter<any>();
  @Output() editTask = new EventEmitter<any>();
  @Output() delete = new EventEmitter<any>();

  public openEdit = false;
  public editStatus = this.editBtn;

  constructor() { };

  ngOnInit(): void { };


  changeStatus($event: any) {
    const id = $event.target.value;
    const check = $event.target.checked;
    this.index.emit(id);
    this.status.emit(check);
  };



  edit($event: any): void {
    const id = $event.target.value;
    this.openEdit = true;
    this.index.emit(id);
    this.editTask.emit(this.openEdit);

  };


  del(index: number): void {
    this.delete.emit(index);
  }

};
