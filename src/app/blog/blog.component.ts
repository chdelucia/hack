import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { Blog } from '../models/blog';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.less']
})
export class BlogComponent implements OnInit {

  entries: Blog[] = [];
  constructor(private blog: BlogService) { }

  ngOnInit(): void {
    this.entries = this.blog.getBlogs();
  }

}
