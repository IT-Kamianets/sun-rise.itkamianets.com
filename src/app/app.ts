import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar.component';
import { HeroComponent } from './components/hero.component';
import { AboutComponent } from './components/about.component';
import { RoomsComponent } from './components/rooms.component';
import { FeaturesComponent } from './components/features.component';
import { GalleryComponent } from './components/gallery.component';
import { ContactComponent } from './components/contact.component';
import { FooterComponent } from './components/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    RoomsComponent,
    FeaturesComponent,
    GalleryComponent,
    ContactComponent,
    FooterComponent
  ],
  template: `
    <app-navbar></app-navbar>
    <main>
      <app-hero></app-hero>
      <app-about></app-about>
      <app-rooms></app-rooms>
      <app-features></app-features>
      <app-gallery></app-gallery>
      <app-contact></app-contact>
    </main>
    <app-footer></app-footer>
  `,
  styles: [`
    main {
      padding-top: 3.25rem; /* Space for fixed navbar */
    }
    :host {
      display: block;
      scroll-behavior: smooth;
    }
  `],
})
export class App {}
