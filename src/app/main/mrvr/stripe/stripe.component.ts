import { Component, OnInit } from '@angular/core';
import { FuseConfigService } from '@fuse/services/config.service';
import { MrvrService } from '../mrvr.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-stripe',
  templateUrl: './stripe.component.html',
  styleUrls: ['./stripe.component.scss']
})
export class StripeComponent implements OnInit {
  name = new FormControl('');

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
  }

}
