import { Component } from '@angular/core';
import { PageHeaderComponent } from "../page-header/page-header.component";
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-sales',
    standalone: true,
    templateUrl: './sales.component.html',
    styleUrl: './sales.component.css',
    imports: [
      PageHeaderComponent,
      MatIconModule,
      RouterModule
    ]
})
export class SalesComponent {

}
