import { Component, Input } from '@angular/core';
import { TaskCard } from '../task-card/task-card';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-tasks-list',
  imports: [TaskCard],
  templateUrl: './tasks-list.html',
  styleUrl: './tasks-list.css'
})
export class TasksList {
  @Input() tasks: Task[] =[]
  @Input() removeTask!: (id: number) => void;
  @Input() changeTaskStatus!: (task: Task) => void;

  getDoneTasksQtd(){
    return this.tasks.filter(task => task.done).length
  }
}
