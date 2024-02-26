import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from '../../components/input/input.component';
import { GamesComponent } from '../../components/cards/games/games.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

export type gamelist = {
  image: string;
  name: string;
  price: string;
}; 

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, InputComponent, GamesComponent, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
})
export class HomeComponent {
  cards: gamelist[] = [
    {
      image: "../../../../assets/image/games/Laaelle.jpg",
      name: "Laa Ellee Origins",
      price: "40,20",
    },
    {
      image: "../../../../assets/image/games/SilentTokyo.jpg",
      name: "Silent Tokyo",
      price: "99,99",
    },
    {
      image: "../../../../assets/image/games/liminalSpaces2.jpg",
      name: "Liminal Spaces 2",
      price: "109,99",
    },
    {
      image: "../../../../assets/image/games/limics.jpg",
      name: "Limics",
      price: "90",
    },
    {
      image: "../../../../assets/image/games/limics2.png",
      name: "Limics 2",
      price: "120",
    }
  ];
}
 