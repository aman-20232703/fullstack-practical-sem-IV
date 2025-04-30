import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sinup',
  imports: [],
  templateUrl: './sinup.component.html',
  styleUrl: './sinup.component.css'
})
export class SinupComponent {
  boys=['aman','akash','suman']
  @Output() getboys=new EventEmitter();


  loadboys(){
    this.getboys.emit(this.boys);
  }
}

