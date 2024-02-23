import { Routes } from '@angular/router';
import { NewsComponent } from '../pages/news/news.component'
import { HomeComponent } from '../pages/home/home.component';
import { SupportComponent } from '../pages/support/support.component';
import { BenginComponent } from '../pages/bengin/bengin.component';
import { ProfileComponent } from '../pages/profile/profile.component';

export const routes: Routes = [
  { path: "news", component: NewsComponent },
  { path: "support", component: SupportComponent },
  { path: "bengin", component: BenginComponent },
  { path: "profile", component: ProfileComponent },
  { path: "", component: HomeComponent},
];