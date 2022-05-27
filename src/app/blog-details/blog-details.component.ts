import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../blog.service';
import { Blog } from '../models/blog';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';


@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.less']
})
export class BlogDetailsComponent implements OnInit {

  blogDetails: Blog | undefined = undefined;
  blogHtml: SafeHtml = '';

  constructor(
    private route: ActivatedRoute, 
    private blog: BlogService,
    private _sanitizer: DomSanitizer
    ) { }

  ngOnInit(): void {
    const blogID = this.route.snapshot.paramMap.get('id') || '0';
    this.blogDetails = this.blog.getBlogbyId(blogID);
    const fileName = this.blogDetails?.fileName || '';

    this.getHtml(fileName);
  }

  async getHtml(blogID: string): Promise<void> {
    const html = await this.blog.getBlogHtmlbyId(blogID);
    this.blogHtml = this._sanitizer.bypassSecurityTrustHtml(html);
  
  }

  toggleVisibility(e: MouseEvent): void{
    let button = (e.target as HTMLElement);

    if(button.classList[0] && button.classList[0] === 'spoiler-btn') {
      this.showSolutions(button);
    }
    else if(button.classList[0] && button.classList[0] === 'clipboard') {
      this.copyToClipboard(button);
    }
  }

  showSolutions(e: HTMLElement): void {
    e.classList.add('hidden');
    e.nextElementSibling?.classList.remove('hidden');
  }

  copyToClipboard(e: HTMLElement): void {
    let value = e.nextElementSibling?.textContent || '';
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = value;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }

}
