import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('Fade1', [

      // the "in" style determines the "resting" state of the element when it is visible.
      state('in', style({
        width: 10,
        transform: 'translateX(-100px)',
         opacity: 1
      })),
      // fade in when created. this could also be written as transition('void => *')
      transition(':enter', [
        style({
          width: 120,
          transform: 'translateX(100px)',
           opacity: 0
        }),
        
        animate('3s cubic-bezier(0.35, 0, 0.25, 1)')
      ]),

      // fade out when destroyed. this could also be written as transition('void => *')
      transition(':leave',
        animate('3s cubic-bezier(0.35, 0, 0.25, 1)', style({
          width: 10,
          transform: 'translateX(-100px)',
          opacity: 0
        })))
    ])
  ],
})
export class HeaderComponent implements OnInit {
  selectedImage: any;
  topOverlay: any;
  bottomOverlay: any;
  sticky = false;
  showText = false;
  globalCounter = 0;
  animationSTate = 'in';
  mainImage = [
    { image: 'assets/images/slide0.jpg', top: 'Absolute Of Excellent', bottom: ' Tabaccos' },
    { image: 'assets/images/slide1.jpg', top: 'One stop source for', bottom: 'Premium Cigars' },
    { image: 'assets/images/slide2.jpg', top: 'Absolute the best store to', bottom: 'Go for Cigars' },
    { image: 'assets/images/slide3.jpg', top: 'Cigars you', bottom: 'Will Love' },
    { image: 'assets/images/slide5.jpg', top: 'Absolute source of', bottom: 'Great Cigars' },
    { image: 'assets/images/slide6.jpg', top: 'Shop', bottom: 'Great Cigars' },
    { image: 'assets/images/slide7.jpg', top: 'A Wide Range of ', bottom: 'Premium Cigars' },
    { image: 'assets/images/slide11.jpg', top: 'You Will Love', bottom: 'Our Cigars' },
    { image: 'assets/images/slide8.jpg', top: 'The Cigars Wiht', bottom: ' Most Flavor' }];
  isGlowing = true;
  

  constructor(  private router: Router) { }

  ngOnInit(): void {
    this.selectedImage = this.mainImage[0].image;
    this.topOverlay = this.mainImage[3].top;
    this.bottomOverlay = this.mainImage[3].bottom;

    let counter = 0;
    setTimeout(() => {
    this.isGlowing = false;
    }, 2000);
    setInterval(() => {
      if (counter === 9) {
        counter = 0;
      }

      setTimeout(() => {
      
        this.showText = !this.showText;
        counter++;
      }, 200);

      this.showText = !this.showText;
      this.selectedImage = this.mainImage[counter].image;
      this.topOverlay = this.mainImage[counter].top;
      this.bottomOverlay = this.mainImage[counter].bottom;
      

    }, 5000);
  }


  nextSlide(): void {
    if (this.globalCounter === 9) {
      this.globalCounter = 0;
    }
    this.selectedImage = this.mainImage[this.globalCounter].image;
    this.topOverlay = this.mainImage[this.globalCounter].top;
    this.bottomOverlay = this.mainImage[this.globalCounter].bottom;
    this.globalCounter++;
  }

  navigateMenu(event): void {
    this.router.navigate(['/products']);
    console.log(event);

  }
}
