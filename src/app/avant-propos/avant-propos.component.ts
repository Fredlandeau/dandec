import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, HostListener, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-avant-propos',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatDivider,
  
  ],
  templateUrl: './avant-propos.component.html',
  styleUrl: './avant-propos.component.scss',
  

})
export class AvantProposComponent {
  isVisible = true;

  @Input() isHandset$ : Observable<boolean> = new Observable<boolean>();
  @Input() isNotHandset$ : Observable<boolean> = new Observable<boolean>();

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    console.log(scrollPosition);
    // Adjust the value 100 to the scroll position you want the effect to trigger
    this.isVisible = scrollPosition < 100;
  }
}
