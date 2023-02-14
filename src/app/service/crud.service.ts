import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Task } from '../model/task'
import {Observable, Subject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})

export class CrudService {

  taskArray : Task[] = []
  task = new Subject<Task>()
  edit = new Subject<number>()
  // taskArray = new Subject<Task[]>()

  addTask(addTaskValue : Task){
    this.taskArray.push(addTaskValue)
      console.log(this.taskArray)
  }

  getTasks(){
    return this.taskArray
  }

  deleteService(index : number){
    return this.taskArray.splice(index,1)
  }

  editTodo(index : number, Todos : Task){

  }



  // addTask(task : Task) : Observable<Task> {
  //   return this.http.post<Task>('https://angularapp-6eabe-default-rtdb.firebaseio.com/posts.json',task)
  // }
  // getAllTask() : Observable<Task[]> {
  //   return this.http.get<Task[]>('https://recipe-96135-default-rtdb.firebaseio.com/todo')
  // }
  // deleteTask(task : Task) : Observable<Task> {
  //   return this.http.delete<Task>('https://recipe-96135-default-rtdb.firebaseio.com/todo'+'/'+task.id)
  // }
  // editTask(task : Task) : Observable<Task> {
  //   return this.http.put<Task>('https://recipe-96135-default-rtdb.firebaseio.com/todo'+'/'+task.id,task)
  // }

}
