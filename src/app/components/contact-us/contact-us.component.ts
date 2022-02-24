import { Component, OnInit } from '@angular/core';
import { RecaptchaErrorParameters } from 'ng-recaptcha';
import { FormBuilder, Validators } from '@angular/forms';
import {ContactService, Mail} from '../../services/contact.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  /* Recaptcha Vars */
  public SITE_KEY: string = '6LfrM5oeAAAAAD7ljxeXcGooxwJ9Z5WJJyQqkbd8';

  public loadingSpinner: boolean = false;
  private mail: Mail | undefined;
  private captchaResponse: string | undefined;
  public emailSent: boolean = false;
  public emailError: boolean = false;

  submitForm = this._formBuilder.group({
    name: ['', Validators.required],
    lastname: ['', Validators.required],
    email: ['',Validators.required],
    message: ['',Validators.required],
    captcha: ['',Validators.required],
  });

  constructor(private _formBuilder:FormBuilder,
              private _contactService:ContactService) { }


  ngOnInit(): void {
  }

  onSubmit(){
    if(this.submitForm.valid) {
      this.submitForm.disable();
      this.loadingSpinner = true;

      this.mail = new Mail();
      this.mail.name = this.submitForm.get('name')?.value;
      this.mail.lastname = this.submitForm.get("lastname")?.value;
      this.mail.email = this.submitForm.get("email")?.value;
      this.mail.message = this.submitForm.get("message")?.value;

      if(this.captchaResponse != undefined) {
        this._contactService.sendMessage(this.mail, this.captchaResponse ).subscribe(res => {
          if(res['status']) {
            this.emailSent = true;
            this.submitForm.enable();
            this.loadingSpinner = false;
          }
          else {
            this.loadingSpinner = false;
            this.emailSent = false;
            this.submitForm.enable();
            this.emailError = true;
            this.submitForm.reset();
          }
          
        }, (error) => {
          this.loadingSpinner = false;
          this.emailSent = false;
          this.emailError = true;
          this.submitForm.reset();
        });
      }
    }
  }

  /**Recaptcha Methods
   * resolved() Get the response from Google Recaptcha. This occurs when recaptcha it's resolved.
   * onError() When an error occurs the response and the error handling goes here.
   */
   async resolved(captchaResponse: string) {
     this.captchaResponse = captchaResponse;
  }

  async onError(errorDetails: RecaptchaErrorParameters){
    console.log(`reCAPTCHA error encountered; details:`, errorDetails);
    alert(`reCAPTCHA error encountered; details:`+errorDetails);
    this.submitForm.disable();
  }

}
