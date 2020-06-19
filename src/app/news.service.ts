import { Injectable } from '@angular/core';
import { NewsApiService } from 'angular-news-api';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

//   constructor(private newsApiService: NewsApiService) {}
 
// topHeadlines() {
//  this.newsApiService.topHeadlines({
//        sources: 'bbc-news,the-verge'
//      }).subscribe(data => console.log(data));
// }
 
// everything() {
//  this.newsApiService.everything({
//        q: 'trump'
//      }).subscribe(data => console.log(data));
// }
 
// sources() {
//  this.newsApiService.sources({
//        country: 'us'
//      }).subscribe(data => console.log(data));
// }
  

apikey = '2b3d61e2bc0b4ba5bcd738c7fcdcef2d';
constructor(private http: HttpClient) { }

getArticles(){
  return this.http.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey='+this.apikey);
}
getArticleByID(source : string){
  return this.http.get('https://newsapi.org/v2/top-headlines?sources='+source+'&apiKey='+this.apikey);
}
getSources(){
  return this.http.get('https://newsapi.org/v2/sources?apiKey='+this.apikey);
}

}


