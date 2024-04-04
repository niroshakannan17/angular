import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { CommonModule } from "@angular/common";

@Component({
    selector:"app-safe-navigation",
    standalone:true,
    imports:[RouterOutlet,CommonModule],
    templateUrl:"./safe-navigation.components.html",
    styleUrl:"./safe-navigation.components.css"
})

export class safeNavaigation
{
    title ="Safe Navigantion Example"

    users =[
        {detail: {name:"shasha",email:"shasha@gmail.com"}},
        {detail: {name:"srither",email:"srither@gmail.com"}},
        {detail: {name:"jotha",email:"jotha@gmail.com"}},
        {}
    ]
}