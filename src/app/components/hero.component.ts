import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section class="hero is-large is-relative">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title is-1 has-text-white has-text-shadow">
            Відпочинок у серці історії
          </h1>
          <h2 class="subtitle is-3 has-text-white has-text-shadow">
            Guest House SunRise — затишок та гостинність у Кам'янці-Подільському
          </h2>
          <div class="buttons is-centered mt-5">
            <a href="#rooms" class="button is-primary is-large is-rounded">Переглянути номери</a>
            <a href="#contact" class="button is-light is-large is-rounded">Контакти</a>
          </div>
        </div>
      </div>
      <div class="overlay"></div>
    </section>
  `,
  styles: [`
    .hero {
      background-image: url('/assets/images/hero-bg.jpg') !important;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }
    .hero-body {
      z-index: 1;
    }
    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.4);
    }
    .has-text-shadow {
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
    }
  `]
})
export class HeroComponent {}
