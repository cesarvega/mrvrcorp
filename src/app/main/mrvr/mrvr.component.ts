import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import { FuseConfigService } from '@fuse/services/config.service';
@Component({
  selector: 'app-mrvr',
  templateUrl: './mrvr.component.html',
  styleUrls: ['./mrvr.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class MrvrComponent implements OnInit {

  constructor(
    private _fuseConfigService: FuseConfigService
  ) {
    // Configure the layout
    this._fuseConfigService.config = {
      layout: {
        navbar: {
          hidden: true
        },
        toolbar: {
          hidden: true
        },
        footer: {
          hidden: true
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
