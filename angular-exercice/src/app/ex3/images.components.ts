import { Component } from "@angular/core";

@Component({
    selector: 'app-images',
    templateUrl: './images.component.html'
})
export class ImagesComponent {
    imgUrl = ''

    changeImage(index: number) {
        if (index == 1) {
            this.imgUrl = 'https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
        } else if (index == 2) {
            this.imgUrl = "https://images.unsplash.com/photo-1552053831-71594a27632d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZG9nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
        } else if (index == 3) {
            this.imgUrl = "assets/images/fish.jpeg"
        } else {
            this.imgUrl = ""
        }
    }
}