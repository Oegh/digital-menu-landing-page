import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IntroComponent } from './components/intro/intro.component';
import { TargetComponent } from './components/target/target.component';
import { FeaturesComponent } from './components/features/features.component';
import { VideoTutorialComponent } from './components/video-tutorial/video-tutorial.component';
import { PricingComponent } from './components/pricing/pricing.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IntroComponent,
    TargetComponent,
    FeaturesComponent,
    VideoTutorialComponent,
    PricingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
