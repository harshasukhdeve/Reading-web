import { Component, OnInit } from '@angular/core';
import { NewsheadlineapiService } from './newsheadlineapi.service';

@Component({
  selector: 'app-newsheadline',
  templateUrl: './newsheadline.component.html',
  styleUrls: ['./newsheadline.component.css']
})
export class NewsheadlineComponent implements OnInit {

  [x: string]: any;

  mArticles:Array<any>;
  mSources:Array<any>;

  constructor(private newsapi:NewsheadlineapiService){
    console.log('app component constructor called');         
  }

  ngOnInit() {
        //load articles
      this.newsapi.initArticles().subscribe(data => this.mArticles = data['articles']);
    //load news sources
    this.newsapi.initSources().subscribe(data=> this.mSources = data['sources']);  
    }

  searchArticles(source){
    console.log("selected source is: "+source);
    this.newsapi.getArticlesByID(source).subscribe(data => this.mArticles = data['articles']);
  }


}
