import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { SalesComponent } from './sales/sales.component';
import { CustomerComponent } from './customer/customer.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
      },
      {
        path: '',
        component: LayoutComponent,
        children: [
          {
            path: 'home',
            component: HomeComponent
          },
          {
            path: 'sales',
            component: SalesComponent
          },
          {
            path: 'customers',
            component: CustomerComponent
          }
        ]
      }
];
