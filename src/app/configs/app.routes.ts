import { Routes } from '@angular/router';
import { NewsComponent } from '../pages/news/news.component'
import { HomeComponent } from '../pages/home/home.component';
import { SupportComponent } from '../pages/support/support.component';
import { BenginComponent } from '../pages/bengin/bengin.component';
import { ConstructionComponent } from '../pages/construction/construction.component';
import { ErrorComponent } from '../pages/error/error.component';

export const routes: Routes = [
  { path: "news", component: NewsComponent },
  { path: "support", component: SupportComponent },
  { path: "bengin", component: BenginComponent },
  { path: "construction", component: ConstructionComponent },
  { path: "home", component: HomeComponent},
  { path: "", redirectTo: "home", pathMatch: 'full'},
  { path: "**", component: ErrorComponent},
];