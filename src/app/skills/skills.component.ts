import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterModule } from '@angular/router';
import AOS from 'aos'; // Import AOS library

// Define the Skill interface
interface Skill {
  id: number;
  name: string;
  content: string;
  imageUrl: string;
  showFullContent: boolean;
  category: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [
    { id: 1, name: 'HTML', content: 'Intermediate', imageUrl: 'html.png', showFullContent: false, category: 'languages' },
    { id: 2, name: 'CSS', content: 'Intermediate', imageUrl: 'css-3.png', showFullContent: false, category: 'languages' },
    { id: 3, name: 'JavaScript', content: 'Intermediate', imageUrl: 'js.png', showFullContent: false, category: 'languages' },
    { id: 4, name: 'Python', content: 'Intermediate', imageUrl: 'python.png', showFullContent: false, category: 'languages' },
    { id: 5, name: 'C', content: 'Intermediate', imageUrl: 'letter-c.png', showFullContent: false, category: 'languages' },
    { id: 7, name: 'React', content: 'Intermediate', imageUrl: 'library.png', showFullContent: false, category: 'frameworks' },
    { id: 8, name: 'Next.js', content: 'Intermediate', imageUrl: 'nextjs.png', showFullContent: false, category: 'frameworks' },
    { id: 9, name: 'Angular', content: 'Intermediate', imageUrl: 'favicon.ico', showFullContent: false, category: 'frameworks' },
    { id: 10, name: 'Django', content: 'Intermediate', imageUrl: 'django.png', showFullContent: false, category: 'frameworks' },
    { id: 11, name: 'ExpressJS', content: 'Intermediate', imageUrl: 'express.png', showFullContent: false, category: 'backend' },
    { id: 12, name: 'Node.js', content: 'Intermediate', imageUrl: 'nodejs.png', showFullContent: false, category: 'backend' },
    { id: 13, name: 'SQL', content: 'Intermediate', imageUrl: 'sql-server.png', showFullContent: false, category: 'databases' },
    { id: 14, name: 'MongoDB', content: 'Intermediate', imageUrl: 'mongo.png', showFullContent: false, category: 'databases' },
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    // Ensure AOS is initialized only in the browser
    if (isPlatformBrowser(this.platformId)) {
      AOS.init({
        duration: 1000, // Animation duration
        easing: 'ease-in-out', // Easing style
        once: true, // Trigger animation only once
      });
    }
  }

  toggleContent(skill: Skill): void {
    skill.showFullContent = !skill.showFullContent;
  }
}
