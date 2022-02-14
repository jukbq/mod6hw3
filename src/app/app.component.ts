import { Component } from '@angular/core';
import { convertTypeAcquisitionFromJson } from 'typescript';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mod6hw3';
  public text = ''
  public taskArr: any = [];
  public taskNumb: number =  0
  public index!: number;

  add() {
    let task = {
      taskName: this.text,
      status: false
    }
    this.taskArr.push(task);
    this.text = ''
    for (let i = 0; i < this.taskArr.length; i++) {
      this.taskNumb = i + 1
    }


  }

indexElement(data: number){
  this.index = data;
}

changeStatus(data: any){
    let task = this.taskArr[this.index];
    task.status = data;
}


}
