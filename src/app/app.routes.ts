import { Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { CustomerDocumentsComponent } from './customer.documents/customer.documents.component';

export const routes: Routes = [
    { path: 'customer', component: CustomerComponent },
    { path: 'customerDocuments/:id', component: CustomerDocumentsComponent },
];
