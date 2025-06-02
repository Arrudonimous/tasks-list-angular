import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { PageBody } from './components/page-body/page-body';

@Component({
  selector: 'app-root',
  imports: [Header, PageBody],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'primeiro-projeto';
}
