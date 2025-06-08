import { Component } from '@angular/core';
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
}
