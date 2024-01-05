import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { PageHeaderComponent } from "../page-header/page-header.component";
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [
        MatIconModule,
        PageHeaderComponent,
        RouterModule
    ]
})
export class HomeComponent {

}
