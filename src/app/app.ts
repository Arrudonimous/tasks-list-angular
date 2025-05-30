import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { PageBody } from './components/page-body/page-body';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, PageBody],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'primeiro-projeto';
}
