import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import 'hammerjs';

import { FuseModule } from '@fuse/fuse.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseProgressBarModule, FuseSidebarModule, FuseThemeOptionsModule } from '@fuse/components';

import { fuseConfig } from 'app/fuse-config';

import { AppComponent } from 'app/app.component';
import { LayoutModule } from 'app/layout/layout.module';
import { DynamicProfileModule } from './main/dynamic-profile/dynamic-profile.module';
import { ToastrModule } from 'ngx-toastr';
import { APP_BASE_HREF } from '@angular/common';
// import { SampleModule } from './main/sample/sample.module';
// import { NameRulesComponent } from './main/name-rules/name-rules.component';

const appRoutes: Routes = [
    {
        path      : '**',
        redirectTo: 'names'
    }
];

@NgModule({
    declarations: [
        AppComponent,
        // NameRulesComponent
    ],
    imports     : [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),
        ToastrModule.forRoot(),
        TranslateModule.forRoot(),

        // Material moment date module
        MatMomentDateModule,

        // Material
        MatButtonModule,
        MatIconModule,

        // Fuse modules
        FuseModule.forRoot(fuseConfig),
        FuseProgressBarModule,
        FuseSharedModule,
        FuseSidebarModule,
        FuseThemeOptionsModule,
        DynamicProfileModule,

        // App modules
        LayoutModule,
        // SampleModule
    ],
    bootstrap   : [
        AppComponent
    ],
    providers: [
        { provide: APP_BASE_HREF, useValue: '/BNRSRules/' },
    ]
})
export class AppModule
{
}
