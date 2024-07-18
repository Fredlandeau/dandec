import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-avant-propos',
  standalone: true,
  imports: [
    MatCardModule,
    MatIconModule
  ],
  templateUrl: './avant-propos.component.html',
  styleUrl: './avant-propos.component.scss'
})
export class AvantProposComponent {

}
