import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MSAL_INSTANCE, MsalModule, MsalService} from "@azure/msal-angular";
import {IPublicClientApplication, PublicClientApplication} from "@azure/msal-browser";
import { PublicPageComponent } from './public-page/public-page.component';
import { RestrictedPageComponent } from './restricted-page/restricted-page.component';


// @ts-ignore
export function MSALInstanceFactory(): IPublicClientApplication{
  // @ts-ignore
  return new PublicClientApplication({
    auth:{
      clientId: "f8e7664b-cb0f-4fca-84d9-6d29c4439fb3",
      authority: "https://login.microsoftonline.com/a445ee81-2b91-4806-883b-1dc673d59147",
      redirectUri: "http://localhost:4200"
    }
  })

}



// @ts-ignore
// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    PublicPageComponent,
    RestrictedPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MsalModule
  ],
  providers: [
    {
      provide: MSAL_INSTANCE,
      useFactory: MSALInstanceFactory
    },
    MsalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
