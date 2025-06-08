import { Component, Input as InputCore } from '@angular/core';
import { Input } from '../input/input';
import { Button } from '../button/button';
import { TasksList } from '../tasks-list/tasks-list';

@Component({
  selector: 'app-page-body',
  imports: [Input, Button, TasksList],
  templateUrl: './page-body.html',
  styleUrl: './page-body.css'
})
export class PageBody {
  @InputCore() tasks: { description: string; done: boolean, id: number }[] = []
  @InputCore() createTask! : (taskDescription: string) => void;

  taskDescription: string = ''
}
