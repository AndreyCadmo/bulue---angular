import { Component } from "@angular/core";
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.css",
})
export class HeaderComponent {
  public menuButton(): void {
    const divMenu = document.getElementById("menu");
    if (divMenu) {
      divMenu.classList.toggle("hidden");
    }
  }

  public menuInfoButton(): void {
    const divMenuInfo = document.getElementById("menu-info");
    if (divMenuInfo) {
      divMenuInfo.classList.toggle("hidden");
    }
  }
}
