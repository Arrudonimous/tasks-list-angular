import { Component, OnInit } from '@angular/core';
import { Header } from './components/header/header';
import { PageBody } from './components/page-body/page-body';
import { Task } from './models/task.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, PageBody],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  tasks: Task[] = [];
  taskDescription: string = ''

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
    this.taskDescription = ''
  };

  removeTask = (id: number) => {
    if(!id) return

    this.tasks = this.tasks.filter(task => task.id !== id);
    this.saveTasks();
  }

  changeTaskStatus = (task: Task) => {
    this.tasks = this.tasks.map(mapTask => ({
      ...mapTask,
      done: task.id === mapTask.id ? !task.done : mapTask.done,
    }))
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
