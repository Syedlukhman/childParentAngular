import { Component,OnInit } from '@angular/core';
import { UserService } from './user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'parent-child';
  list:any
  id:any
  age:any;


  constructor(private service:UserService){}

  ngOnInit():void{
   this.getData()
  }
  getData() {
    this.service.getParent().subscribe((response)=>{
      this.list=response
    })
  }
  getAge(event:any){
    this.age=event
  }
  log(x:any){
    this.id=x.value
  }
}
