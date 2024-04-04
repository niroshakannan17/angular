import { Component } from "@angular/core";

@Component({
    selector:"binding-components",
    standalone:true,
    templateUrl:"./binding.components.html",
    styleUrl:"./binding.components.css"
})

export class bindingComponents{
    titile = "Binding (Both event and property binding)";

    counter = 0;
    addClieck(){
        this.counter++;
    }
}