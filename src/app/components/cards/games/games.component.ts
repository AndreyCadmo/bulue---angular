import { Component, Input } from '@angular/core';
import { gamelist } from '../../../pages/home/home.component';


@Component({
  selector: "app-games",
  standalone: true,
  imports: [],
  templateUrl: "./games.component.html",
  styleUrl: "./games.component.css",
})
export class GamesComponent {
  @Input({ required: false }) game!: gamelist;
}
