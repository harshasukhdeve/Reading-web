import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'web';
  data :any=[]
  constructor(private http: HttpClient) {
   
  }
 
  getData(){
    const url ='http://www.bbc.co.uk/news/world-us-canada-53102820'
    this.http.get(url).subscribe((res)=>{
      this.data = res
      console.log(this.data)
    })
  }
}

