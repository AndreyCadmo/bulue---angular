import { Component, Input } from '@angular/core';
import { newslist } from '../../../pages/news/news.component';

@Component({
  selector: "app-news-card",
  standalone: true,
  imports: [],
  templateUrl: "./news.component.html",
  styleUrl: "./news.component.css",
})
export class NewsCardComponent {
  @Input({ required: false }) news!: newslist;
}
