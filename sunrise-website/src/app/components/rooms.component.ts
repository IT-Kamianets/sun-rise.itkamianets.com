import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="rooms" class="section has-background-light">
      <div class="container">
        <h2 class="title is-2 has-text-centered mb-6 has-text-black">Наші номери</h2>
        <div class="columns is-multiline">
          @for (room of rooms; track room.title) {
            <div class="column is-4">
              <div class="card room-card">
                <div class="card-image">
                  <figure class="image is-3by2">
                    <img [src]="room.image" [alt]="room.title">
                  </figure>
                </div>
                <div class="card-content">
                  <p class="title is-4">{{ room.title }}</p>
                  <p class="subtitle is-6">{{ room.price }}</p>
                  <div class="content">
                    <ul>
                      @for (feature of room.features; track feature) {
                        <li>{{ feature }}</li>
                      }
                    </ul>
                  </div>
                  <div class="buttons">
                    <a href="tel:+380679169154" class="button is-primary is-fullwidth">Забронювати</a>
                  </div>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .room-card {
      height: 100%;
      transition: transform 0.3s ease;
      border-radius: 8px;
      overflow: hidden;
    }
    .room-card:hover {
      transform: translateY(-5px);
    }
  `]
})
export class RoomsComponent {
  rooms = [
    {
      title: 'Стандартний двомісний',
      price: 'від 800 грн / ніч',
      image: '/assets/images/room-standard.jpg',
      features: ['Двоспальне ліжко', 'Власна ванна кімната', 'Телевізор', 'Wi-Fi']
    },
    {
      title: 'Тримісний номер',
      price: 'від 1100 грн / ніч',
      image: '/assets/images/room-triple.jpg',
      features: ['Двоспальне + односпальне ліжка', 'Власна ванна кімната', 'Телевізор', 'Wi-Fi']
    },
    {
      title: 'Сімейний номер',
      price: 'від 1400 грн / ніч',
      image: '/assets/images/room-family.jpg',
      features: ['Два двоспальних ліжка', 'Велика ванна кімната', 'Робоче місце', 'Wi-Fi']
    }
  ];
}
