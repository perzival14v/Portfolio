import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/atoms/button/button.component';
import { NavbarComponent } from './components/molecules/navbar/navbar.component';
import { SocialMediaIconComponent } from './components/atoms/social-media-icon/social-media-icon.component';
import { StudiesInfoComponent } from './components/atoms/studies-info/studies-info.component';
import { InfoNavbarComponent } from './components/atoms/info-navbar/info-navbar.component';
import { SkillComponent } from './components/atoms/skill/skill.component';
import { ProjectCardComponent } from './components/molecules/project-card/project-card.component';
import { FooterComponent } from './components/atoms/footer/footer.component';
import { ContactMeComponent } from './components/molecules/contact-me/contact-me.component';
import { LandingComponent } from './components/templates/landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    NavbarComponent,
    SocialMediaIconComponent,
    StudiesInfoComponent,
    InfoNavbarComponent,
    SkillComponent,
    ProjectCardComponent,
    FooterComponent,
    ContactMeComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
