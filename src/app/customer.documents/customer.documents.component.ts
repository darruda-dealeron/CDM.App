import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-customer.documents',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './customer.documents.component.html',
  styleUrl: './customer.documents.component.css'
})
export class CustomerDocumentsComponent {

  public documentType = ["RG", "CPF", "CNH", "Passaporte", "Certidão de Nascimento"]

}
