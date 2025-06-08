import { Component, Input } from '@angular/core';
import { TaskCard } from '../task-card/task-card';

@Component({
  selector: 'app-tasks-list',
  imports: [TaskCard],
  templateUrl: './tasks-list.html',
  styleUrl: './tasks-list.css'
})
export class TasksList {
  @Input() tasks: { description: string; done: boolean, id: number }[] =[]
  @Input() removeTask!: (id: number) => void;

  getDoneTasksQtd(){
    return this.tasks.filter(task => task.done).length
  }
}
