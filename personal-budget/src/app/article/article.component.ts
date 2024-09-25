import { Component,} from '@angular/core';

@Component({
  selector: 'pb-article',
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss',
  template: `<article>
  <h1>
    <ng-content select="[slot1]"></ng-content>
  </h1>
  <p>
    <ng-content select="[slot2]"></ng-content>
  </p>
  </article>
  `
})
export class ArticleComponent {


}
