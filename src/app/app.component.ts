import { AfterViewInit, Component, HostListener, OnInit, inject } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { ActivatedRoute, NavigationEnd, Router, RouterModule, RouterOutlet } from '@angular/router';
import { Meta } from '@angular/platform-browser';
import { HomeComponent } from "./home/home.component";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, map, share, shareReplay } from 'rxjs';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,

    AsyncPipe,
    CommonModule, RouterOutlet, RouterModule, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [
    trigger('fadeInOut', [
      state('visible', style({
        opacity: 1
      })),
      state('hidden', style({
        opacity: 0
      })),
      transition('visible <=> hidden', [
        animate('0.5s')
      ])
    ])
  ]
})
export class AppComponent implements OnInit, AfterViewInit {

  

  title = 'AMAGA CYBER';
  fragment: string | null =null;

  isVisible = true;

  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  isNotHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => !result.matches),
      shareReplay()
    );

    
    activeFragment = this.route.fragment.pipe(share());
    constructor(
      private metaTagService: Meta,
      public route: ActivatedRoute,
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
     // this.fragment = this.route.snapshot.paramMap.get('id');
      this.route.fragment.subscribe(fragment => { this.fragment = fragment; });
     // console.log(this.route)
    // console.log(this.fragment)
    this.metaTagService.addTags([
      { name: 'keywords', content: 'cybersécurité, cyber-sécurité, Mahtieu DANDEC, consultant, freelance, conseil en cybersécurité, approche holistique, services, gourvernance cyber, conformité, audit, évaluation des risques, architecture cybersécurité' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Frédéric LANDEAU' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'date', content: '2024-07-22', scheme: 'YYYY-MM-DD' },
      { charset: 'UTF-8' }
    ]);
    }

    ngAfterViewInit(): void {
      console.log(this.route.snapshot)
      console.log(this.fragment)
      if (this.fragment) {
        console.log(this.fragment);
        try {
          document.querySelector('#' + this.fragment)?.scrollIntoView({ behavior: 'smooth' });
        } catch (e) {
          console.error(e);
         }
      }
    }

    @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    console.log('scroll');
    const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    console.log(scrollPosition);
    // Adjust the value 100 to the scroll position you want the effect to trigger
    this.isVisible = scrollPosition < 100;
  }

}
