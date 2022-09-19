import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/layouts/header/header.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { AboutUsComponent } from './page/about-us/about-us.component';
import { TitleComponent } from './components/about-us/title/title.component';
import { LeveragingComponent } from './components/about-us/leveraging/leveraging.component';
import { TeamComponent } from './components/about-us/team/team.component';

// import angular material ui
import {MatGridListModule} from '@angular/material/grid-list';
import { MemberCardComponent } from './components/about-us/member-card/member-card.component';
import { NotransformBtnComponent } from './shared/ui/notransform-btn/notransform-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutUsComponent,
    TitleComponent,
    LeveragingComponent,
    TeamComponent,
    MemberCardComponent,
    NotransformBtnComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
