import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Task } from '../model/task';
import { CrudService } from '../service/crud.service';
import {Subscription} from 'rxjs'
import { NgForm } from '@angular/forms';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  arrayTodos : Task[] = []
  editTodo : Task = {
    task_name: ''
  }
  value1 : string
  edit : boolean = false
  index : number
  private subscription : Subscription
  constructor(public crudService : CrudService){

  }
  addTaskValue : string = ''
  ngOnInit(){
    this.arrayTodos = this.crudService.getTasks()
    
    this.subscription = this.crudService.edit.subscribe((index)=>{
      
    })
  }
  
  addTask(){
    if(!this.edit){
      this.crudService.addTask({
        task_name : this.addTaskValue
      })
      
    }
    else{
      this.arrayTodos[this.index].task_name = this.addTaskValue
    }
    this.index = null
    this.addTaskValue = ''
    this.edit=false
    
  }
  
  onDelete(index : number){
    this.crudService.deleteService(index)
  }

  onEdit(i : number){
    this.index = i
    this.value1 = this.arrayTodos[this.index].task_name
    this.edit = true
  }

  ngOnDestroy(){
    this.subscription.unsubscribe()
  }
}
