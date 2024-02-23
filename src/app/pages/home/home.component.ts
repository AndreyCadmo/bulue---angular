import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from '../../components/input/input.component';
import { GamesComponent } from '../../components/cards/games/games.component';

export type gamelist = {
  image: string;
  name: string;
  price: string;
}; 

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, InputComponent, GamesComponent],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
})
export class HomeComponent {
  cards: gamelist[] = [
    {
      image: "../../../../assets/image/games/Laaelle.jpg",
      name: "Laa Ellee",
      price: "40,20",
    },
    {
      image: "../../../../assets/image/games/SilentTokyo.jpg",
      name: "Silent Tokyo",
      price: "99,99",
    },
    {
      image: "../../../../assets/image/games/cadeira.jpg",
      name: "Cadeira",
      price: "109,99",
    },
    {
      image: "../../../../assets/image/games/cadeira.jpg",
      name: "Cadeira",
      price: "109,99",
    },
    {
      image: "../../../../assets/image/games/cadeira.jpg",
      name: "Cadeira",
      price: "109,99",
    },
    {
      image: "../../../../assets/image/games/cadeira.jpg",
      name: "Cadeira",
      price: "109,99",
    },
    {
      image: "../../../../assets/image/games/cadeira.jpg",
      name: "Cadeira",
      price: "109,99",
    },
    {
      image: "../../../../assets/image/games/cadeira.jpg",
      name: "Cadeira",
      price: "109,99",
    },
  ];
}
