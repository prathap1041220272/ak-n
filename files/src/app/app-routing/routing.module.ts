import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule , Routes } from '@angular/router';


import { ContactUsComponent } from '../contact-us/contact-us.component';
import { HomeComponent } from '../home/home.component';
import { MediaComponent } from '../media/media.component';
import { NewsComponent } from '../news/news.component';
import { ServicesComponent } from '../services/services.component';
import { TestimonialsComponent } from '../testimonials/testimonials.component';
import { AboutComponent } from '../about/about.component';
import { DisclaimerComponent } from '../disclaimer/disclaimer.component';
import { LuckyFriendsComponent } from '../lucky-friends/lucky-friends.component';
import { LuckyStonesComponent } from '../lucky-stones/lucky-stones.component';
import { LuckyLogosComponent } from '../lucky-logos/lucky-logos.component';
import { CarrerComponent } from '../carrer/carrer.component';
import { CosmicVaastuComponent } from '../cosmic-vaastu/cosmic-vaastu.component';
import { MarriageComponent } from '../marriage/marriage.component';



const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'contact', component: ContactUsComponent},
  { path: 'media', component: MediaComponent},
  { path: 'home', component: HomeComponent}, 	
  { path: 'news', component: NewsComponent},
  { path: 'services', component: ServicesComponent},
  { path: 'testimonials', component: TestimonialsComponent},
  { path: 'about', component: AboutComponent},
  {path:'marriage', component: MarriageComponent},
  {path:'cosmic', component: CosmicVaastuComponent},
  {path:'carrer', component: CarrerComponent},
  {path:'lucky-logos', component: LuckyLogosComponent},
  {path:'lucky-stones', component: LuckyStonesComponent},
  {path:'lucky-friends', component: LuckyFriendsComponent},
  { path: 'disclaimer', component: DisclaimerComponent},
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule { }
