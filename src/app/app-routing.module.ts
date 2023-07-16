import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'about', component: AboutmeComponent},
  {path: 'projects', component: ProjectsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
