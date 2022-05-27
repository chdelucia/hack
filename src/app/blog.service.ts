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

  /** No hagais esto NUNCA en casa, esto deberia ser un endpoint que se conecte a una base de datos
   * El proposito de este blog es documentar mis aprendizajes
   * Por eso priorizo la rapidez de montar una web sin tener que contratar un servicio online Basedatos
   * ni tener que montar un backend con autentificacion
   * */
  async getBlogHtmlbyId(fileName: string): Promise<string> {
    const code = await import(`../data/${fileName}`);
    return code?.blog || '';
  }
}
