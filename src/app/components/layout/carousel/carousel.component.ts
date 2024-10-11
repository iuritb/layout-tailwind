import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  currentIndex: number = 0;
  totalItems: number = 5; // Total de itens no carousel (5 imagens)

  next() {
    if (this.currentIndex < this.totalItems - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0; // Volta para o primeiro slide
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.totalItems - 1; // Vai para o último slide
    }
  }

  getTransform() {
    return `translateX(-${this.currentIndex * 100}%)`;
  }
}
