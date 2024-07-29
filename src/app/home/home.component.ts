import { AfterViewInit, Component, HostListener, OnInit, Output, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe, CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AvantProposComponent } from "../avant-propos/avant-propos.component";
import { ServicesComponent } from "../services/services.component";
import { ContactComponent } from "../contact/contact.component";
import { FooterComponent } from "../footer/footer.component";
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    AsyncPipe,
    AvantProposComponent,
    ServicesComponent,
    ContactComponent,
    FooterComponent
  ],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition(':enter, :leave', [
        animate(500)
      ])
    ])
  ]
})
export class HomeComponent implements OnInit, AfterViewInit {
  fragment: string | null = null;

  private breakpointObserver = inject(BreakpointObserver);

  @Output() isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  @Output() isNotHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => !result.matches),
      shareReplay()
    );

  constructor(
    private readonly route: ActivatedRoute,
    router: Router
  ) {

    router.events.subscribe(s => {
      if (s instanceof NavigationEnd) {
        const tree = router.parseUrl(router.url);
        if (tree.fragment) {
          const element = document.querySelector("#" + tree.fragment);
          if (element) { element.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
        }
      }
    });
  }


  ngOnInit(): void {
    this.route.fragment.subscribe(fragment => { this.fragment = fragment; });
  }

  ngAfterViewInit(): void {
    if (this.fragment) {
      console.log(this.fragment);
      try {
        document.querySelector('#' + this.fragment)?.scrollIntoView({ behavior: 'smooth' });
      } catch (e) {
        console.error(e);
      }
    }
  }

  isVisible = true;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    console.log('scroll');
    const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    console.log(scrollPosition);
    // Adjust the value 100 to the scroll position you want the effect to trigger
    this.isVisible = scrollPosition < 100;
  }





}
