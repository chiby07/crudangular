import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/modules/task';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  tasks : Task[] = [];

  constructor(private taskService : TaskService) { }

  ngOnInit() {
    this.getTasks();
  }
 getTasks() {
   this.taskService.findAll()
   .subscribe(tasks => this.tasks = tasks)
 }

 deleteTask(id: number) {

  this.taskService.delete(id)
  .subscribe(() => {
    this.tasks = this.tasks.filter(task => task.id != id)
  })
 }
}
