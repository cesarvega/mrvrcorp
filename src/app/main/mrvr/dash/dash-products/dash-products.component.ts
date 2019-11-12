import { Component, OnInit } from '@angular/core';
import { FuseConfigService } from '@fuse/services/config.service';
import { MrvrService } from '../../mrvr.service';

@Component({
  selector: 'app-dash-products',
  templateUrl: './dash-products.component.html',
  styleUrls: ['./dash-products.component.scss']
})
export class DashProductsComponent implements OnInit {

  products: any;

  constructor(
    private _fuseConfigService: FuseConfigService,
    private _mrvrservice: MrvrService
  ) {
    // Configure the layout
    this._fuseConfigService.config = {
      layout: {
        navbar: {
          hidden: false
        },
        toolbar: {
          hidden: false
        },
        footer: {
          hidden: false
        },
        sidepanel: {
          hidden: false
        }
      }
    };
  }
  ngOnInit(): void {
    this._mrvrservice.getIProducts().subscribe(res => {
      console.log(res);
      this.products = Object.keys(res).map(productsIndex => {
        const product = res[productsIndex];
        return product;
      });
    });
  }

}
