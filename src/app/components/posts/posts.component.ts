import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Posts } from '../../_models/posts';
import { Observable,from, materialize,of,combineLatest} from 'rxjs';
import { filter,startWith,map,combineLatestWith } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {

  //METHOD 1
  posts: Posts[]=[];
  title: any;
  p: number = 1;
  constructor(private api: ApiService) {}
  ngOnInit(): void {
    this.getPosts();
  }
  getPosts() {
    this.api.getPosts().subscribe((res) => {
      this.posts = res;
      //this.posts$ = this.api.getPosts();
    })
  }

  search() {
    if (this.title === '') {
      this.ngOnInit();
    } else {
      this.posts = this.posts.filter((res) => {
          return res.title.toLocaleLowerCase().match(this.title.toLocaleLowerCase());
        })
      ;
    }
  }
  key: string = 'id';
  reverse: boolean = false;

  sort(key: any) {
    this.key = key;
    this.reverse = !this.reverse;
  }
}

  
// METHOD2
    

//  posts: Observable<Posts[]>
//  searchResult: Observable<any>;
//  searchQuery$: Observable<any>;
//  title: FormControl;
//  constructor(private service: ApiService) {
//    this.posts = this.service.getPosts();
//    this.title = new FormControl('');
//    this.searchQuery$ = this.title.valueChanges.pipe(startWith(''));
//    this.search();
//  }
//   search(){
//  this.searchResult= this.searchQuery$.pipe(combineLatestWith(this.posts)
//    ,map(([query, searchList]) => {
//      return searchList.filter(state => state.title
//      .toLowerCase().indexOf(query.toLowerCase()) !== -1)
//    }))
//  }
// ngOnInit(): void {
//   //this.search();
// }
//   key: string = 'id';
//   reverse: boolean = false;

//   sort(key: any) {
//     this.key = key;
//     this.reverse = !this.reverse;
//   }
// }