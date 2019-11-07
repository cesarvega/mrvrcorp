import { Component, OnInit } from '@angular/core';
import { FuseConfigService } from '@fuse/services/config.service';
import { MrvrService } from '../mrvr.service';

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.scss']
})
export class VendorsComponent implements OnInit {

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
