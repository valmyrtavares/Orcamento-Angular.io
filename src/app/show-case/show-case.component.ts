import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-case',
  templateUrl: './show-case.component.html',
  styleUrls: ['./show-case.component.scss'],
})
export class ShowCaseComponent {
  id: string;
  changeApi: any[];
  constructor(private route: ActivatedRoute) {
    this.id = this.route.snapshot.params['id']; //Como pegar a rota e colocar em uma variável
    this.changeApi = this.woman;
    if (this.id === 'woman') {
      this.changeApi = this.woman;
    } else {
      this.changeApi = this.ladies;
    }
    this.changeApi;
  }

  woman: any[] = [
    {
      id: 1,
      title: 'Estilosa',
      category: 'morena',
      image:
        'https://i.pinimg.com/564x/b8/e3/65/b8e3655517fc65e8d3f629d9fa3b6608.jpg',
    },
    {
      id: 2,
      title: 'Renata Ri',
      category: 'branca ruiva',
      image:
        'https://i.pinimg.com/564x/e7/8a/77/e78a77f2127d045f2bbeee32fb1a3e67.jpg',
    },
    {
      id: 3,
      title: 'Blanche Cut out Mini',
      category: 'Liramorena',
      image:
        'https://i.pinimg.com/564x/44/52/50/44525084f661a67ca7e093833bb76b13.jpg',
    },
    {
      id: 4,
      title: 'Yellow Blound',
      category: 'morena',
      image:
        'https://i.pinimg.com/564x/9e/26/a7/9e26a7658d96e3fe4dcda4d033944301.jpg',
    },
    {
      id: 5,
      title: 'Desert',
      category: 'morena',
      image:
        'https://i.pinimg.com/564x/d5/9c/5d/d59c5d2a589ef362472c580e6655decb.jpg',
    },
    {
      id: 6,
      title: 'Gérrima',
      category: 'morena',
      image:
        'https://i.pinimg.com/564x/bf/34/28/bf3428fde90d3824207fb73a3e0f0aef.jpg',
    },
  ];

  ladies: any[] = [
    {
      id: 1,
      title: 'Approach',
      category: 'morena',
      image:
        'https://i.pinimg.com/564x/4a/d6/6e/4ad66e39f79e419646ca860637fd9868.jpg',
    },
    {
      id: 2,
      title: 'Renata Ri',
      category: 'Blonde',
      image:
        'https://i.pinimg.com/564x/d6/41/a6/d641a62f04e2f52ca8d2ae25ab7346b7.jpg',
    },
    {
      id: 3,
      title: 'Hiring new Women',
      category: 'Liramorena',
      image:
        'https://i.pinimg.com/564x/c2/01/91/c20191fb0f9f0bad9ff1d16f16ebb926.jpg',
    },
    {
      id: 4,
      title: 'Yellow Blound',
      category: 'Annie',
      image:
        'https://i.pinimg.com/564x/7a/54/ad/7a54ade9cf4c76f1c022c54d2d907b98.jpg',
    },
    {
      id: 5,
      title: 'Simple blue',
      category: 'morena',
      image:
        'https://i.pinimg.com/564x/49/fd/cd/49fdcd05f9e08005ec9c80cdb022a368.jpg',
    },
  ];
}
