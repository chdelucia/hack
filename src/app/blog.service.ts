import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Blog } from './models/blog';
import data from '../data/blog.json';


@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private router: Router) { }

  getBlogs() {
    return data;
  }

  getBlogbyId(name: string): Blog | undefined {
    let blogDetails = data.find(blog => name === blog.name);
    if (blogDetails === undefined) this.router.navigate(['/notFound']);
    return blogDetails;
  }

  async getBlogHtmlbyId(name: string): Promise<string> {
    let code= '';
    const a = await import(`../data/ctf-banditi`);
    code = a.html;
    return code;
  }
}
