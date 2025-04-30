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
  x=2;
  y=5;

  a='aman';
  b='kumar';

//function call on button click
  handleClickFunction(){
    alert("calling function");
    this.otherFunction()    //fun. calling within another function
  }

  otherFunction(){
    console.log("calling this")
  }

  //data types
  name:string='aman'
  data:string|number|boolean=true
  other:any=true  //when you dont know the exact datatype
  updateProperties(){
    this.data='aman',123,false
    this.name='kumar'
    console.log(this.name)
  }
  updateVariables(){
    let x=30;        //let x:number=130;
    console.log(x)
    this.updateParameters(2,4)            //calling function given below
  }
  updateParameters(a:number,b:number){
    console.log(a+b)
  }

  //counter
  //1st method
  // count=0
  // handleIncrement(){
  //   this.count=this.count+1
  // }
  // handleReset(){
  //   this.count=0
  // }
  // handleDecrement(){
  //   this.count=this.count-1
  // }
  // //2nd method
  // handleCounter(val:string){
  //   if (val=='plus'){
  //     this.count=this.count+1;
  //   }else if (val=='minus'){
  //     if (this.count<=0){
  //       this.count=0
  //     }else{
  //       this.count=this.count-1;
  //     }
  //   }else{
  //     this.count=0
  //   }
  // }

  //events
  handleEvent(){
    console.log("function called")
  }

  handleMouseEvent(event:any){
    console.log("function called",event)
    console.log("function called",event.type)
    console.log("function called",event.target)
    console.log("function called",(event.target as Element).className)
  }

  mouseEnterEvent(event:MouseEvent){
    console.log("MouseEvent called",event.type)
  }
  mouseLeaveEvent(event:MouseEvent){
    console.log("MouseEvent called",event.type)
  }

  handleInputEvent(event:Event){
    console.log("MouseEvent called",event.type)
    console.log("value",(event.target as HTMLInputElement).value)
  }
  focusEvent(event:Event){
    console.log("Event called",event.type)

  }
  blurEvent(event:Event){
    console.log("Event called",event.type)
  }
  //get and set input field value
  Name=""
  displayName=""
  email=""
  displayemail=""
  getName(event:Event){
    this.Name=(event.target as HTMLInputElement).value
    // const val=(event.target as HTMLInputElement).value
    // this.Name=val;
  }
  showName(){
    this.displayName=this.Name
  }

  setName(){
    this.Name='aman'
  }

  getEmail(event:Event){
    this.email=(event.target as HTMLInputElement).value
  }
  showEmail(){
    this.displayemail=this.email
  }

  setEmail(){
  this.email='default@gmail.com'
  }

  // getEmail(val:string){
  //   console.log(val)
  //   this.email=val
  // }

  //if-else
  display=true;
  m=20

  hide(){
    this.display=false
  }
  show(){
    this.display=true
  }
  toggle(){
    this.display=!this.display
  }

  togglediv=true
  toggletwo(){
    this.togglediv=!this.togglediv
  }
  
  //else-if
  color=2
  handleColor(val:number){
    this.color=val
  }
  handleInput(event:Event){
    // console.log(event)
    this.color=parseInt((event.target as HTMLInputElement).value)
  }

  //switch
  Color="blue"
  colorHandle(val:string){
    this.Color=val
  }
  handleInnput(event:Event){
    this.Color=(event.target as HTMLInputElement).value
  }

//for loop
users=["aman","akash","suman"]
students=[
  {name:'aman',age:23,email:'a@.com'},
  {name:'akash',age:24,email:'s@.com'},
  {name:'suman',age:27,email:'r@.com'},
  {name:'mohit',age:29,email:'v@.com'}
]
getname(age:number){
  console.log(age)
}
//signals
Count=signal(10)
X=12

// constructor(){
//   effect(()=>{
//     console.log(this.X)
//   })
// }
// updatevalue(){
//   this.X=30
// }

/*constructor(){
  effect(()=>{
    console.log(this.Count)
  })
}*/
updatevalue(){
  this.Count.set(this.Count())
}

updateValue(val:string){
  if(val=='inc'){
    this.Count.set(this.Count()+1)
  }
  else{
    this.Count.set(this.Count()-1)

  }
}

//computed signals
p=10
q=20
z=this.p+this.q
// showvalue(){
//   console.log(this.z)
//   this.x=10
//   console.log(this.z)
// }
// updatex(){
//   this.e.set(200)
// }

e=signal(10)
f=signal(20)
g=computed(()=>this.e()+this.f())
showvalue(){
  console.log(this.g())
  this.e.set(20)
  console.log(this.g())
}
updatex(){
  this.e.set(200)
}

//effects(a type of function mostly used in constructor)
username=signal('aman')
// constructor(){
//   effect(()=>{
//     console.log(this.username())
//   })
// }

countt=signal(0)
displayheading=false

// togglevalue(){
//   this.displayheading=!this.displayheading
// }

constructor(){
  effect(()=>{
    if(this.countt()==2){
      this.displayheading=true
      // setTimeout(()=>{
      //   this.displayheading=false
      // },2000)
    }else{
      this.displayheading=false
    }
  })
}
togglevalue(){
  this.countt.set(this.countt()+1)
}
//contextual variables(those variables which are used in for loop )

agents=['aman','kumar','sonu','jak','bablu','tonny']


//two way binding(by the help of two way binding we can keep properties of data syn in .html and .ts file)
//1st method
naam='aman'

//second method
// typename(event:Event){
//   this.naam=(event.target as HTMLInputElement).value
// }

//to-do list
/*task='';
tasklist:{id:number, task:string}[]=[]
addtask(){
  this.tasklist.push({id:this.tasklist.length+1 , task:this.task})
  this.task=''
  console.log(this.tasklist);
}
deletetask(taskid:number){
  this.tasklist=this.tasklist.filter((item)=>item.id!=taskid)
}*/

//dynamic styling(styling using main ts file)
colorr='green'
fontsize='60px'
headingSizebig='80px'
headingSizesmall='10px'
zoom=false
updateheadingSize(){
  this.zoom=!this.zoom
}

/*directives(it is a class that adds additional behaviour to elements in our appilication)
~ a feature in angular that help you to provide more power to DOM elements
~ directives( whenever we make component then one directive always see edited with ts.component file)
~ it is denoted by -ng
three types:-
1.Component Directives
      The most common type of directive
      Used in Component template file
2. Structural Directives
    Change the structure of the DOM by adding,
    removing, or manipulating elements.
3. Attribute Directives
    Modify the appearance or behavior of an existing element
*/
Show=true
// Show=false

// ngFor directive
// (we can do looping on templates file or elemets tags)
// the html component file called tempelate file
peoples=['aman','akash','suman']
persons=[
  {name:'aman',age:23,email:'a@.com'},
  {name:'akash',age:24,email:'s@.com'},
  {name:'suman',age:27,email:'r@.com'},
  {name:'mohit',age:29,email:'v@.com'}
]

//ngIf
/* Learn how to conditionally display or hide elements in your Angular templates based on specific conditions. We'll cover: Basic usage of ngIf: Show/hide elements based on boolean expressions. ngIf with else: Display alternative content when the condition is false. ngIf with *ngIf: Conditionally create or remove elements from the DOM. Advanced ngIf scenarios: Combining ngIf with other directives and techniques */

showw=true
login=false
block=1
tupdaeblock(){
  this.block++;
}

//ngswitch Directive (structuraldirective)
// coLorr="blue"
// colorchange(coLorr:string){
//   this.coLorr=coLorr
// }

//routing
// ( a type of mechanism to navtigate from one page to another )
// add routelink and routeroutlet-import

//header with routing

//4O4 page(page not found)

//pass data between one page to other(pass data with routerlink, button link, router)

/*forms(collection of input fields)
two types-
reactive(for complex form,)
tempelate-driven(for simple form,)
                      reactive                               tempelate-driven
                      with component class                   created with directive
Setup of form model-	Explicit, created in component class	 Implicit, created by directives
Data model-	          structured and immutable	             Unstructured and mutable
Data flow--	          Synchronous	                           Asynchronous
Form validation	-     Functions	                             Directives

*/
// basic reactive form
namme=new FormControl();
password=new FormControl();
displayvalue(){
  console.log(this.namme.value, this.password.value)
}
setvalues(){
  this.namme.setValue('aman')
  this.password.setValue('12345678')
}

//form grouping in reactive forms
/*organizing and readability
validation and error handling
accessing Groups Values
profileForm= new FormGroup({
  user:new FormControl('', [Validators.required]),//('aman'),
  password:new FormControl('', [Validators.required,Validators.minLength(5)]),//('1234'),
  email:new FormControl('',[Validators.required,Validators.maxLength(50),Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),//('werd@'),

})

onsubmit(){
  console.log(this.profileForm.value);
}*/

/*setValue(){
  this.profileForm.setValue({
    namee:'aman',
    password:'1234',
    email:'aman@gmail.com'
  })
}*/

// tempelate-driven form

userDetails:any       //variables
addDetails(val:NgForm){
  console.log(val)
  this.userDetails=val
}

//pass data parent to child
userName='Abhishek Sharma'
onuserchange(user:string){
  this.userName=user
}
//reuse
student=['aman','akash','suman']

//pass data child to parent
boys:undefined|string[];
handleboys(boys:string[]){
  console.log(boys);
  this.boys=boys
}

//pipes(import common module)
work='angular playlist'
date= new Date;
amount=10;

//practicals
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

