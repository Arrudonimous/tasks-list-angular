import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tasks-list',
  imports: [],
  templateUrl: './tasks-list.html',
  styleUrl: './tasks-list.css'
})
export class TasksList {
  @Input() tasks: { description: string; done: boolean, id: number }[] =[]

  getDoneTasksQtd(){
    return this.tasks.filter(task => task.done).length
  }
}
