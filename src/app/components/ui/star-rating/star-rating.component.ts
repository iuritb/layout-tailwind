import { Component, OnInit, Renderer2, ElementRef, ViewChildren, QueryList } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.scss'
})
export class StarRatingComponent implements OnInit {

  @ViewChildren('stars') stars!: QueryList<ElementRef>;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.stars.forEach((star: ElementRef, index1: number) => {
      this.renderer.listen(star.nativeElement, 'click', () => {
        this.updateStars(index1);
      });
    });
  }

  updateStars(index1: number): void {
    this.stars.forEach((star: ElementRef, index2: number) => {
      if (index1 >= index2) {
        this.renderer.addClass(star.nativeElement, 'active');
      } else {
        this.renderer.removeClass(star.nativeElement, 'active');
      }
    });
    console.log(index1 + 1);
  }
}
