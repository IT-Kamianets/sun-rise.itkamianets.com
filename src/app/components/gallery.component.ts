import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: true,
  template: `
    <section id="gallery" class="section has-background-dark has-text-white">
      <div class="container">
        <h2 class="title is-2 has-text-centered has-text-white mb-6">Галерея</h2>
        <div class="columns is-multiline">
          @for (img of images; track img) {
            <div class="column is-3">
              <figure class="image is-1by1 gallery-img">
                <img [src]="img" class="is-rounded" alt="SunRise Gallery">
              </figure>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .gallery-img {
      overflow: hidden;
      border-radius: 12px;
      cursor: pointer;
      transition: transform 0.3s;
    }
    .gallery-img:hover {
      transform: scale(1.05);
    }
  `]
})
export class GalleryComponent {
  images = [
    '/assets/images/gallery/1.jpg',
    '/assets/images/gallery/2.jpg',
    '/assets/images/gallery/3.jpg',
    '/assets/images/gallery/4.jpg',
    '/assets/images/gallery/5.jpg',
    '/assets/images/gallery/6.jpg',
    '/assets/images/gallery/7.jpg',
    '/assets/images/gallery/8.jpg'
  ];
}
