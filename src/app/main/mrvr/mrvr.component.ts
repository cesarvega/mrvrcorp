import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import { FuseConfigService } from '@fuse/services/config.service';
import { MrvrService } from './mrvr.service';
import { log } from 'util';
@Component({
  selector: 'app-mrvr',
  templateUrl: './mrvr.component.html',
  styleUrls: ['./mrvr.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class MrvrComponent implements OnInit {

  constructor(
    private _fuseConfigService: FuseConfigService,
    private _mrvrservice: MrvrService
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
    // this._mrvrservice.getItemData().subscribe(res => {
    //   console.log(res);

    // });

    // this._mrvrservice.putItemData().subscribe(res => {
    //   console.log(res);

    // });

    // this._mrvrservice.postItemData().subscribe( res => {
    //     console.log(res);
    // });

    // this._mrvrservice.getItemDatabyId('34').subscribe(res => {
    //   console.log(res);

    // });

    // this._mrvrservice.deleteItemData().subscribe( res => {
    //   console.log(res);

    // });
  }
}
