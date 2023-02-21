import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PostsComponent } from './components/posts/posts.component';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { SearchComponent } from './components/search/search.component';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { NavbarComponent } from './components/navbar/navbar.component';
@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    SearchComponent,
    ErrorMessageComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule, HttpClientModule, BrowserAnimationsModule
    , FormsModule, Ng2SearchPipeModule,
    NgxPaginationModule,Ng2OrderModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
