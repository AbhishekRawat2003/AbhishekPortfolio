import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  emailid: string = 'abhirawathdr@gmail.com';

  onSubmit(contacts: { name: string; email: string; message: string }) {
    console.log('Form Data Submitted:', contacts);
    alert(`Message sent by: ${contacts.name}\nEmail: ${contacts.email}\nMessage: ${contacts.message}`);
  }
}
