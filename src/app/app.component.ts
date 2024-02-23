import { Component } from "@angular/core";
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";
import { HeaderComponent } from "./components/header/header.component";

// import { NoticeComponent } from "./index/notice/notice.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    HeaderComponent,
  ],
  template: `
    <section class="section-container">
    <app-header></app-header>
    <main class="main-contant">
    <router-outlet></router-outlet>
    </main>
    </section>
  `,
  styles: "",
})
export class AppComponent {
  title = "Bulue";
}
