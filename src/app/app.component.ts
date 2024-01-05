import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { HeaderComponent } from './layout/header/header.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ 
    CommonModule, 
    RouterOutlet,
    MatButtonModule, 
    MatDividerModule, 
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    HeaderComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-material';
}
