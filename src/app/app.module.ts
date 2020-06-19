import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { SelectedItemService } from './selected-item.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NovelsComponent } from './novels/novels.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactusComponent } from './contactus/contactus.component';
import { NewsComponent } from './news/news.component';

import { NgnewsModule } from 'angular-news-api';
import { NewsApiKeyConfig } from 'angular-news-api';
import { HttpClientModule } from "@angular/common/http";
import{NewsService} from './news.service';
import { MatIconModule } from '@angular/material/icon';


// const newsApiConfig: NewsApiKeyConfig = {
//   key: '2b3d61e2bc0b4ba5bcd738c7fcdcef2d'
// };


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NovelsComponent,
    ContactusComponent,
    NewsComponent,
   
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    Ng2SearchPipeModule,
    FormsModule,
    HttpClientModule,
    //NgnewsModule.forRoot(newsApiConfig),
  ],
  providers: [SelectedItemService,NewsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
