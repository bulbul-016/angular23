import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private router: Router) {}

  navigateToSection(sectionName: string) {
    this.router.navigate([sectionName]);
  }

  sectionClickCounts: number[] = [0, 0, 0, 0];

  incrementClickCount(sectionIndex: number) {
    this.sectionClickCounts[sectionIndex]++;
  }
}
