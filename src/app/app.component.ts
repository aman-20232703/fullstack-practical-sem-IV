import { CommonModule, NgFor, NgIf, NgSwitch, NgSwitchCase } from '@angular/common';
import { Component, computed, effect, EventEmitter, Output, output, signal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { profileComponent } from './profile/profile.component';
import { SinupComponent } from './sinup/sinup.component';
import { HomeComponent } from './home/home.component';
import { StudentsComponent } from './students/students.component';
import { WelcomeComponent } from './welcome/welcome.component';
@Component({                // decorater start with @....
  selector: 'app-root',
  imports: [RouterOutlet,LoginComponent,SinupComponent,profileComponent, StudentsComponent, FormsModule,NgIf, NgFor, NgSwitch, NgSwitchCase, RouterLink, HeaderComponent, ReactiveFormsModule, HomeComponent, CommonModule, WelcomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular';//we will always take varibles or properties within class but if we have function within class then we can take const also....
  
/practicals
//practical 2
showtext=true
toggletext(){
  this.showtext=!this.showtext
}
//practical 3
names=['Aman','Akash','Suman','Rohit','Abhishek']//add NgFor into import
//practical 4
user_names=''
//practical 5
employeeData:any
Details(val:NgForm){
  console.log(val);
  this.employeeData=val
}
//practical 6
count=0
handleCounter(val:string){
  if(val=='plus'){
    this.count=this.count+1
  }else if(val=='minus'){
    if(this.count<=0){
      this.count=0
    }else{
      this.count=this.count-1
    }
  }else{
    this.count=0
  }
}

// practical 7
task='';
tasklist:{id:number, task:string}[]=[]
addtask(){
  this.tasklist.push({id:this.tasklist.length+1 , task:this.task})
  this.task=''
  console.log(this.tasklist);
}
deletetask(taskid:number){
  this.tasklist=this.tasklist.filter((item)=>item.id!=taskid)
}


}

