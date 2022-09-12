import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToastrModule } from 'ngx-toastr';
import { metaReducers, reducers } from './ngrx/root.reducer';
import { HttpClientModule } from '@angular/common/http';
import { BaseLayoutComponent } from './workshop/base-layout/base-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      },
    }),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    FontAwesomeModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
