import { Component } from "@angular/core";

@Component({
    selector: 'app-property-binding',
    templateUrl: 'property-binding.component.html'
})
export class PropertyComponent {
    public lien = "https://dawan.fr";
    isDisabled = true;
}