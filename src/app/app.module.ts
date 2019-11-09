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
import { MrvrModule } from './main/mrvr/mrvr.module';
import { environment } from 'environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AuthService } from './main/core/auth.service';

import {ApolloBoostModule, ApolloBoost} from 'apollo-angular-boost';
const appRoutes: Routes = [
    {
        path: '**',
        redirectTo: 'home'
    }
];
const config = environment.firebaseConfig;
@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        ApolloBoostModule,
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

        // firebase 
        AngularFireModule.initializeApp(config),
        AngularFirestoreModule, // firestore
        AngularFireAuthModule, // auth
        AngularFireStorageModule, // storage
        AngularFireDatabaseModule,


        // App modules
        LayoutModule,
        MrvrModule
    ],
    bootstrap: [
        AppComponent
    ],
    providers: [AuthService,
        { provide: APP_BASE_HREF, useValue: '/tab2/' },
    ]
})
export class AppModule {
    constructor(apollo: ApolloBoost) {
        apollo.create({
          uri: 'https://5vxky4z9pl.sse.codesandbox.io/graphql',
          httpOptions: {
            withCredentials: true
          },
          request: async (operation) => {
            // const token = await AsyncStorage.getItem('token');
            // operation.setContext({
            //   headers: {
            //     authorization: token
            //   }
            // });
          },
          onError: ({ graphQLErrors, networkError }) => {
            if (graphQLErrors) {
            //   sendToLoggingService(graphQLErrors);
            }
            if (networkError) {
            //   logoutUser();
            }
          },
          clientState: {
            defaults: {
              isConnected: true
            },
            resolvers: {
              Mutation: {
                updateNetworkStatus: (_, { isConnected }, { cache }) => {
                  cache.writeData({ data: { isConnected }});
                  return null;
                }
              }
            }
          },
          cacheRedirects: {
            Query: {
              movie: (_, { id }, { getCacheKey }) =>
                getCacheKey({ __typename: 'Movie', id })
            }
          }
        })
      }
}
