import { Component, Input as InputCore } from '@angular/core';
import { Input } from '../input/input';
import { Button } from '../button/button';
import { TasksList } from '../tasks-list/tasks-list';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-page-body',
  imports: [Input, Button, TasksList],
  templateUrl: './page-body.html',
  styleUrl: './page-body.css'
})
export class PageBody {
  @InputCore() tasks: Task[] = []
  @InputCore() createTask!: (taskDescription: string) => void;
  @InputCore() removeTask! : (id: number) => void;
  @InputCore() changeTaskStatus! : (task: Task) => void;

  taskDescription: string = ''
}
