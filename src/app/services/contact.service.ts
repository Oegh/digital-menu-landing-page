import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
  export class ContactService {
  
    private uri: string = `https://api.menucodi.com/server/web/index.php?r=site/`;
    
  
    constructor(private _http:HttpClient) { }
  
    sendMessage(mail: Mail, captchaResponse: string) : Observable<any>{
        const data = {
            name: mail.name,
            lastname: mail.lastname,
            email: mail.email,
            message: mail.message,
            response: captchaResponse
          };

      return this._http.post(this.uri+'site-contact-us', data);
    }
   
    validateCaptcha(response: string){
      const captcha = new Captcha();
      captcha.response = response;
      return this._http.post(this.uri+'validateRecaptcha.php',captcha);
    }
  }
  
  export class Mail {
    name: string | undefined;
    lastname: string | undefined;
    email: string | undefined;
    message: string | undefined;
  }
  
  export class Captcha{
    response: string | undefined;
  }