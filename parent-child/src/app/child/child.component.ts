import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { UserService } from '../user.service';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() id:any;
  @Output() ageEvent=new EventEmitter<any>()
  arr: any;
  temp:any;
 

  constructor(private service:UserService) { }

  ngOnInit(): void {
   
  }
  ngOnChanges(change:SimpleChanges){
    this.getData()
  }


  getData(){
    this.service.getChild().subscribe((response)=>{
        this.arr=response
        this.temp=this.arr.filter((ele:any)=> ele.Id==this.id)
        if(this.temp.length)this.ageEvent.emit(this.temp[0].age)
        else this.ageEvent.emit( "No data present")
    })
  }

}
