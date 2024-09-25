import { Component, Input} from '@angular/core';

@Component({
  selector: 'pb-article',
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss',
  template: `<article>
  <h1>
    <ng-content select="h1"></ng-content>
  </h1>
  <p>
    <ng-content select="p"></ng-content>
  </p>
  </article>
  `
})
export class ArticleComponent {


}
