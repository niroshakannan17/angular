import { Component } from "@angular/core";
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
    selector:"two-way-binding",
    standalone:true,
    imports: [RouterOutlet,FormsModule],
    templateUrl:"./two-way-binding.components.html",
    styleUrl:"./two-way-binding.components.css"
})

export class Twowaybinding{
    names = "nirosha"
}