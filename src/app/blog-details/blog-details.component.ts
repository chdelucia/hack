import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../blog.service';
import { Blog } from '../models/blog';


@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.less']
})
export class BlogDetailsComponent implements OnInit {

  blogDetails: Blog | undefined = undefined;
  blogHtml = '';
  constructor(private route: ActivatedRoute, private blog: BlogService) { }

  ngOnInit(): void {
    const blogID = this.route.snapshot.paramMap.get('id') || '0';
    const blog = this.blog.getBlogbyId(blogID);
    this.blogDetails = blog;
    this.blogHtml = this.blogDetails?.blog || '';
  }
}
