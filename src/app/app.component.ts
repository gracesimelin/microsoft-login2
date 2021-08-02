import {Component, OnInit} from '@angular/core';
import {MsalService} from "@azure/msal-angular";
import { AuthenticationResult } from '@azure/msal-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'microsoft-login';

  constructor(private msalService: MsalService) {
  }

  ngOnInit(): void {
        this.msalService.instance.handleRedirectPromise().then(
          res => {
            if(res != null && res.account != null) {
              this.msalService.instance.setActiveAccount(res.account)
              console.log(res)
            }

          }
        )
    }

  isLoggedIn(): boolean{
    return this.msalService.instance.getActiveAccount() !=null
  }

  login(){

    this.msalService.loginRedirect()

    // this.msalService.loginPopup().subscribe((response: AuthenticationResult) => (
    //   this.msalService.instance.setActiveAccount(response.account),
    //   console.log(response)
    // ))
  }

  logout(){
    this.msalService.logout();
  }
}
