import { Component, Input } from '@angular/core';
import { gamelist } from '../../../pages/home/home.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';


@Component({
  selector: "app-games",
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: "./games.component.html",
  styleUrl: "./games.component.css",
})
export class GamesComponent {
  @Input({ required: false }) game!: gamelist;
}
