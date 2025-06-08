import { Component, Input } from '@angular/core';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-card',
  imports: [],
  templateUrl: './task-card.html',
  styleUrl: './task-card.css'
})
export class TaskCard {
  @Input() task: Task = {
    description: '',
    id: 0,
    done: false
  };
  @Input() removeTask!: (id: number) => void;
  @Input() changeTaskStatus!: (task: Task) => void;

}
