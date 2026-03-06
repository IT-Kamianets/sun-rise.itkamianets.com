import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  standalone: true,
  template: `
    <section id="features" class="section">
      <div class="container">
        <h2 class="title is-2 has-text-centered mb-6">Зручності та послуги</h2>
        <div class="columns is-multiline">
          @for (feature of features; track feature.title) {
            <div class="column is-3 has-text-centered">
              <div class="box feature-box">
                <span class="icon is-large has-text-primary">
                  <i class="fas fa-2x" [class]="feature.icon"></i>
                </span>
                <p class="title is-5 mt-4">{{ feature.title }}</p>
                <p class="content">{{ feature.desc }}</p>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .feature-box {
      height: 100%;
      border-radius: 12px;
      transition: all 0.3s;
      border: 1px solid transparent;
    }
    .feature-box:hover {
      border-color: #00d1b2;
      box-shadow: 0 10px 20px rgba(0,0,0,0.05);
      transform: translateY(-5px);
    }
  `]
})
export class FeaturesComponent {
  features = [
    { title: 'Wi-Fi', desc: 'Безкоштовний швидкісний інтернет у всіх номерах.', icon: 'fa-wifi' },
    { title: 'Паркінг', desc: 'Власний безкоштовний паркінг на території.', icon: 'fa-parking' },
    { title: 'Кухня', desc: 'Повністю обладнана кухня для спільного користування.', icon: 'fa-utensils' },
    { title: 'Трансфер', desc: 'Зустрінемо вас на вокзалі за домовленістю.', icon: 'fa-car' },
    { title: 'Барбекю', desc: 'Зона з мангалом для відпочинку на свіжому повітрі.', icon: 'fa-fire' },
    { title: 'Консьєрж', desc: 'Допоможемо організувати екскурсію містом.', icon: 'fa-info-circle' },
    { title: 'Чистота', desc: 'Щоденне прибирання та свіжа білизна.', icon: 'fa-broom' },
    { title: 'Затишок', desc: 'Тиха атмосфера для вашого спокійного сну.', icon: 'fa-moon' }
  ];
}
