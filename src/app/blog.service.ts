import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import data from '../data/blog.json';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private router: Router) { }

  getBlogs() {
    return data;
  }

  getBlogbyId(id: string) {
    let blogDetails = data.find(blog => id === blog.id);
    if (blogDetails === undefined) this.router.navigate(['/notFound']);
    return blogDetails
  }
}
