import { Component } from '@angular/core';

@Component({
    selector: 'app-interpolation',
    templateUrl: './interpolation.component.html',
    styles: ['p { color: red; }', 'a { text-decoration: none}']
})
export class InterpolationComponent {
    message = "Occaecat sit qui laboris fugiat quis occaecat ex magna culpa ad deserunt nulla mollit."

    sayHello() {
        return "Hello !"
    }
}