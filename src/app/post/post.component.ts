import { Component, Input , OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() title;
  @Input() content;
  loveIts = 0;
  like = 0;
  dislike = 0;
  createdAt = new Date();

  constructor() { }

  ngOnInit() {
  }

  onClickLike(){
    this.loveIts = this.loveIts + 1;
    this.like = this.like + 1;
  }

  onClickDislike(){
    this.loveIts = this.loveIts - 1;
    this.dislike = this.dislike + 1;
  }

}
