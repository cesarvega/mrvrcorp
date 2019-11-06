import { Component, OnInit } from '@angular/core';
import { FuseConfigService } from '@fuse/services/config.service';
import { MrvrService } from '../mrvr.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

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
