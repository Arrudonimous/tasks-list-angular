import { Component } from '@angular/core';
import { Input } from '../input/input';
import { Button } from '../button/button';

@Component({
  selector: 'app-page-body',
  imports: [Input, Button],
  templateUrl: './page-body.html',
  styleUrl: './page-body.css'
})
export class PageBody {
}
