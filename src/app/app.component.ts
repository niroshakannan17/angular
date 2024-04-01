import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  //templateUrl: './app.component.html',
  template:"<h2>Hello {{title}} ,Welcome to first angular program</h2>",
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Nirosha Kannan';
}
