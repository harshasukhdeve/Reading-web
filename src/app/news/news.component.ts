import { Component, OnInit } from '@angular/core';
import {NewsService } from './../news.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  
  articles :Array<any>

  constructor(private newsservice:NewsService) { }

  ngOnInit(){
    this.newsservice.getArticles().subscribe(data => this.articles = data['articles']);
 
  }

  searchArticle(source){
    this.newsservice.getArticleByID(source).subscribe(data=>this.articles=data['articles']);
   
  }

}
