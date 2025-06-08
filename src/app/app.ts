import { Component, OnInit } from '@angular/core';
import { Header } from './components/header/header';
import { PageBody } from './components/page-body/page-body';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, PageBody],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  tasks: { description: string; done: boolean; id: number }[] = [];

  ngOnInit() {
    const stored = localStorage.getItem('tasks');
    this.tasks = stored ? JSON.parse(stored) : [];
  }

  createTask = (taskDescription: string) => {
    const desc = taskDescription.trim();
    if (!desc) return;

    const newTask = {
      description: desc,
      done: false,
      id: Date.now()
    };

    this.tasks.push(newTask);
    this.saveTasks();
  };

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
