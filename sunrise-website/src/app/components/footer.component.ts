import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer has-background-dark has-text-light py-6">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-8 has-text-centered">
            <h4 class="title is-4 has-text-white mb-3">SunRise</h4>
            <p class="is-size-5 mb-5">
              Ваш ідеальний відпочинок у Кам'янці-Подільському. Затишок, комфорт та гостинність.
            </p>
            <hr class="has-background-grey-dark">
            <div class="content mt-5">
              <div class="is-flex is-align-items-center is-justify-content-center is-flex-wrap-wrap">
                <p class="is-size-6 has-text-grey-light mb-0 mr-3">
                  &copy; 2024 Guest House SunRise. Усі права захищені.
                  <span class="ml-2">Designed by <strong class="has-text-grey-lighter">Vyluk</strong></span>
                </p>
                <a href="https://github.com/IT-Kamianets/sun-rise.itkamianets.com" target="_blank" class="button is-dark is-small is-inverted is-outlined" title="GitHub Repository" style="border-radius: 50%;">
                  <span class="icon">
                    <i class="fab fa-github"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      border-top: 1px solid #4a4a4a;
    }
    hr {
      max-width: 200px;
      margin: 0 auto;
    }
  `]
})
export class FooterComponent {}
