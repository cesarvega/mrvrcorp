import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/shared.module';

import { SampleComponent } from './sample.component';
import { DynamicProfileModule } from '../dynamic-profile/dynamic-profile.module';

// const routes = [
//     {
//         path     : 'sample',
//         component: SampleComponent
//     }
// ];

@NgModule({
    declarations: [
        // SampleComponent
    ],
    imports     : [
        // RouterModule.forChild(routes),

        TranslateModule,

        FuseSharedModule,
        DynamicProfileModule
    ],
    exports     : [
        // SampleComponent
    ]
})

export class SampleModule
{
}
