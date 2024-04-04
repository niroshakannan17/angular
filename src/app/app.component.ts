import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloWorldComponents } from './hello-world/hello-world.components';
import { Twowaybinding } from './data-binding/two-way-binding.components';
import { safeNavaigation } from './safe-navigation/safe-navigation.components';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HelloWorldComponents,Twowaybinding,safeNavaigation],
  templateUrl: './app-new.components.html',
  //template:"<h2>Hello {{title}} ,Welcome to first angular program</h2>",
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Nirosha Kannan';
}
