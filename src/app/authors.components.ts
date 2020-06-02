import { Component } from "@angular/core";
@Component ({
    selector: "authors",
    template: `
    <h2>{{title}}</h2>
    <ul>
        <li *ngFor = "let name of names">
         {{name}}
        </li>
    </ul>
    `

})
export class authorComponent {
    title = "3 Authors";
    names = ["author1", "author2", "author3"];

}