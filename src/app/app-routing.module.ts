import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroComponent } from './components/intro/intro.component';
import { FeaturesComponent } from './components/features/features.component';
import { VideoTutorialComponent } from './components/video-tutorial/video-tutorial.component';
import { TargetComponent } from './components/target/target.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { DemoComponent } from './components/demo/demo.component';
import { FaqComponent } from './components/faq/faq.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

const routes: Routes = [
  { path: 'home', component: IntroComponent },
  { path: 'features', component: TargetComponent },
  { path: 'tutorial', component: VideoTutorialComponent },
  { path: 'services', component: FeaturesComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'demo', component: DemoComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'contact', component: IntroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
