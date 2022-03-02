import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';

// import "./assets/js/owl.carousel.min.js";
import { OwlCarousel } from 'ngx-owl-carousel';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {

  @ViewChild('owlElement') owlElement: OwlCarousel;

  mySlideImages = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1].map((i) => `./assets/images/${i}.jpg`);
  mySlideOptions = { items: 5, dots: true, nav: true };

  private timer;
  constructor(private ref: ChangeDetectorRef) {

    this.timer = setInterval(() => {
      console.log(this.owlElement);
      this.owlElement.next([200]);

    }, 1000)

  }
  ngOnInit() {
  }
  ngOnDestroy() {

    if (this.timer) {

      clearInterval(this.timer);

    }

  }
}
