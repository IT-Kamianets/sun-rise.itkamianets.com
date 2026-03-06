import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  template: `
    <section id="contact" class="section">
      <div class="container">
        <h2 class="title is-2 has-text-centered mb-6">Як нас знайти</h2>
        <div class="columns">
          <div class="column is-5">
            <div class="box contact-box">
              <h3 class="title is-4">Контакти</h3>
              <p class="mb-4">
                <strong>Адреса:</strong><br>
                вул. Тадеуша Костюшка, 3,<br>
                м. Кам'янець-Подільський, Хмельницька область, 32302
              </p>
              <p class="mb-4">
                <strong>Телефон:</strong><br>
                <a href="tel:+380679169154">+38 (067) 916-91-54</a>
              </p>
              <p class="mb-4">
                <strong>Email:</strong><br>
                <a href="mailto:sunrise.kp@gmail.com">sunrise.kp@gmail.com</a>
              </p>
              <p class="mb-4">
                <strong>Графік роботи:</strong><br>
                Цілодобово (24/7)
              </p>
              <div class="mt-5">
                <a class="button is-primary is-fullwidth" href="tel:+380679169154">Зателефонувати зараз</a>
              </div>
            </div>
          </div>
          <div class="column is-7">
            <div class="map-container shadow">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2618.393437251786!2d26.566396076932486!3d48.67990881324706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4733c778ca5f7e0b%3A0x569bb056b6a2fbc2!2sSunRise!5e0!3m2!1suk!2sua!4v1741289876543!5m2!1suk!2sua" 
                width="100%" 
                height="450" 
                style="border:0;" 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact-box {
      height: 100%;
      border-radius: 12px;
    }
    .map-container {
      border-radius: 12px;
      overflow: hidden;
      line-height: 0;
    }
    .shadow {
      box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    }
  `]
})
export class ContactComponent {}
