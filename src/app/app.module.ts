import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoadScreenComponent } from './load-screen/load-screen.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { RouterModule } from '@angular/router';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { WebPortfolioComponent } from './portfolio/web-portfolio/web-portfolio.component';
import { DesignPortfolioComponent } from './portfolio/design-portfolio/design-portfolio.component';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    LoadScreenComponent,
    PortfolioComponent,
    AboutmeComponent,
    HomeComponent,
    NavComponent,
    WebPortfolioComponent,
    DesignPortfolioComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
