import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'] // Corrected property name and format
})
export class EducationComponent implements OnInit {
  showModal = true;
  modalTitle: string = '';

  constructor() { }

  ngOnInit(): void {
   
  }

  openModal(milestone: string): void {
    this.modalTitle = milestone;
    this.showModal = false;
  }


}
