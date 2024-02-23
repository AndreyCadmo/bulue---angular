import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsCardComponent } from '../../components/cards/news/news.component';
import { InputComponent } from '../../components/input/input.component';

export type newslist = {
  image: string;
  name: string;
  description: string;
}; 

@Component({
  selector: "app-news",
  standalone: true,
  imports: [CommonModule, InputComponent, NewsCardComponent],
  templateUrl: "./news.component.html",
  styleUrl: "./news.component.css",
})
export class NewsComponent {
  cards: newslist[] = [
    {
      image: "../../../../assets/image/games/Laaelle.jpg",
      name: "Laa Ellee",
      description:
        "Laa Ellee oferece uma experiência única, com gráficos deslumbrantes, mecânicas de jogo envolventes e uma trama cativante que desafia até mesmo os jogadores mais experientes. Mergulhe em um mundo repleto de personagens fascinantes, criaturas mágicas e paisagens deslumbrantes enquanto desbrava os segredos que moldam a história desse reino extraordinário.",
    },
    {
      image: "../../../../assets/image/games/SilentTokyo.jpg",
      name: "Silent Tokyo",
      description:
        "Adentre as sombras de uma Tóquio silenciosa, onde mistérios sombrios aguardam para serem desvendados. Silent Tokyo, o mais recente thriller de suspense, oferece uma experiência única de jogo imersiva. Envolva-se em uma atmosfera de suspense, onde o silêncio é ensurdecedor, e cada esquina revela um segredo macabro. Explore a cidade à noite, resolva enigmas desafiadores e descubra a verdade por trás do silêncio que assombra a metrópole japonesa.",
    },
    {
      image: "../../../../assets/image/games/cadeira.jpg",
      name: "A Cadeira",
      description:
        'Embarque em uma jornada única de introspecção e desafios mentais em "A Cadeira". Este jogo inovador oferece uma experiência completamente diferente, onde a trama se desenrola enquanto você enfrenta uma série de quebra-cabeças complexos e reflexões profundas. A Cadeira convida os jogadores a explorar os recantos da mente humana, mergulhando em enigmas que desafiam a lógica e a intuição. Com uma estética minimalista e uma trilha sonora envolvente, o jogo oferece uma experiência cativante, repleta de descobertas pessoais e desafios intelectuais.',
    },
  ];
}
