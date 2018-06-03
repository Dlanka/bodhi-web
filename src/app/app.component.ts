import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

    windowHeight = 0;

    ngOnInit() {
        this.windowHeight = window.innerHeight;
    }
}
