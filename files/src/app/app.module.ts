import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RoutingModule } from './app-routing/routing.module';
import { FooterComponent } from './footer/footer.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutComponent } from './about/about.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { NewsComponent } from './news/news.component';
import { ServicesComponent } from './services/services.component';
import { MediaComponent } from './media/media.component';
import { HomeComponent } from './home/home.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { LuckyFriendsComponent } from './lucky-friends/lucky-friends.component';
import { LuckyStonesComponent } from './lucky-stones/lucky-stones.component';
import { LuckyLogosComponent } from './lucky-logos/lucky-logos.component';
import { CarrerComponent } from './carrer/carrer.component';
import { CosmicVaastuComponent } from './cosmic-vaastu/cosmic-vaastu.component';
import { MarriageComponent } from './marriage/marriage.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ContactUsComponent,
    AboutComponent,
    TestimonialsComponent,
    NewsComponent,
    ServicesComponent,
    MediaComponent,
    HomeComponent,
    DisclaimerComponent,
    LuckyFriendsComponent,
    LuckyStonesComponent,
    LuckyLogosComponent,
    CarrerComponent,
    CosmicVaastuComponent,
    MarriageComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
