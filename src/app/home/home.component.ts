
import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule,
    HomeComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] // Fixed: 'styleUrl' -> 'styleUrls'
})
export class HomeComponent implements OnInit {
  text = 'Portfolio';
  typedText = '';
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    // Check if the code is running in the browser
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    if (this.isBrowser) {
      // Only run animations in the browser
      this.typeWriter();
    }
  }

  typeWriter() {
    if (this.typedText.length < this.text.length) {
      this.typedText += this.text.charAt(this.typedText.length);
      setTimeout(() => {
        this.typeWriter();
      }, 200); // Adjust the delay as needed
    } else {
      setTimeout(() => {
        this.typedText = '';
        this.typeWriter();
      }, 10);
    }
  }

}
