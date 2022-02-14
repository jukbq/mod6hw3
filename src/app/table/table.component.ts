import { style } from '@angular/animations';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() arr! : any;
  @Output() index = new EventEmitter<any>();
  @Output() status = new EventEmitter<any>();

  public statusName ='IN PROGRESS';;
  public isColor = false
  public delStatus = true


/* @Input()
  set taskStatus(name: any){
    if(name === true){
    this.statusName = 'Done';
    this.isColor = true;
    this.delStatus = false
  }
  else{
    this.statusName ='IN PROGRESS';
    this.isColor = false;
    this.delStatus = true
  }
} */
  
 




  ngOnInit(): void {

  }


  onChangeStatus($event: any) {
      const id = $event.target.value; 
      const check = $event.target.checked
   
      this.index.emit(id)
      this.status.emit(check)
      console.log(id);
      console.log(check);
      console.log(this.arr);
    

     if(check === true){
    this.statusName = 'Done';
    this.isColor = true;
    this.delStatus = false
  }
  else{
    this.statusName ='IN PROGRESS';
    this.isColor = false;
    this.delStatus = true
  }

    
  }



  edit(): void {}
  del() { }

}
