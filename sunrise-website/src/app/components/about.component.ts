import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section id="about" class="section">
      <div class="container">
        <div class="columns is-vcentered">
          <div class="column is-6">
            <h2 class="title is-2">Про SunRise</h2>
            <p class="content is-medium">
              SunRise — це не просто місце для ночівлі. Це ваш затишний дім у Кам'янці-Подільському. 
              Ми пропонуємо комфортне проживання в тихому районі міста, всього за декілька хвилин 
              від історичного центру та Старої Фортеці.
            </p>
            <p class="content is-medium">
              Наші гості цінують нас за домашній затишок, бездоганну чистоту та щиру українську гостинність. 
              Незалежно від того, чи ви подорожуєте у справах, чи з родиною, ми зробимо ваш відпочинок незабутнім.
            </p>
          </div>
          <div class="column is-6">
            <figure class="image is-4by3">
              <img src="/assets/images/about.jpg" alt="SunRise interior" class="is-rounded shadow">
            </figure>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .shadow {
      box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    }
  `]
})
export class AboutComponent {}
