import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Top Navbar for Desktop -->
    <nav class="navbar is-fixed-top is-transparent is-hidden-touch" role="navigation" aria-label="main navigation">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item has-text-weight-bold is-size-4 has-text-primary" href="#">
            SunRise
          </a>
        </div>
        <div class="navbar-menu is-active">
          <div class="navbar-end">
            <a class="navbar-item" href="#about">Про нас</a>
            <a class="navbar-item" href="#rooms">Номери</a>
            <a class="navbar-item" href="#features">Послуги</a>
            <a class="navbar-item" href="#gallery">Галерея</a>
            <a class="navbar-item" href="#contact">Контакти</a>
            <div class="navbar-item">
              <a class="button is-primary" href="tel:+380679169154">
                <strong>Зателефонувати</strong>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <!-- Header only for Mobile -->
    <div class="is-hidden-desktop mobile-top-bar has-background-white">
      <div class="has-text-centered py-3 has-text-weight-bold is-size-4 has-text-primary">
        SunRise
      </div>
    </div>

    <!-- Bottom Nav for Mobile -->
    <div class="mobile-bottom-nav is-hidden-desktop">
      <div class="columns is-mobile is-gapless mb-0" style="width: 100%;">
        <a class="column has-text-centered" href="#about">
          <span class="icon"><i class="fas fa-info-circle"></i></span>
          <p>Про нас</p>
        </a>
        <a class="column has-text-centered" href="#rooms">
          <span class="icon"><i class="fas fa-bed"></i></span>
          <p>Номери</p>
        </a>
        <a class="column has-text-centered" href="#gallery">
          <span class="icon"><i class="fas fa-images"></i></span>
          <p>Галерея</p>
        </a>
        <a class="column has-text-centered" href="#contact">
          <span class="icon"><i class="fas fa-map-marker-alt"></i></span>
          <p>Контакти</p>
        </a>
        <a class="column has-text-centered call-item" href="tel:+380679169154">
          <span class="icon"><i class="fas fa-phone"></i></span>
          <p>Дзвінок</p>
        </a>
      </div>
    </div>
  `,
  styles: [`
    /* Desktop adjustments */
    .navbar {
      background-color: rgba(255, 255, 255, 0.98) !important;
      box-shadow: 0 2px 10px rgba(0,0,0,0.05);
      z-index: 1000;
    }

    /* Mobile bar at top */
    .mobile-top-bar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      box-shadow: 0 1px 5px rgba(0,0,0,0.1);
      border-bottom: 1px solid #eee;
    }

    /* Mobile bar at bottom */
    .mobile-bottom-nav {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      background: white;
      box-shadow: 0 -1px 10px rgba(0,0,0,0.1);
      height: 60px;
      display: flex;
      align-items: center;
      padding-bottom: env(safe-area-inset-bottom);
    }

    .mobile-bottom-nav a {
      color: #4a4a4a;
      text-decoration: none;
      font-size: 10px;
      padding-top: 8px;
    }

    .mobile-bottom-nav .icon {
      font-size: 1.25rem;
      margin-bottom: 2px;
    }

    .call-item {
      background-color: #00d1b2;
      color: white !important;
    }

    .call-item .icon i {
      animation: pulse 2s infinite;
    }

    @keyframes pulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.15); }
      100% { transform: scale(1); }
    }
  `]
})
export class NavbarComponent {}
