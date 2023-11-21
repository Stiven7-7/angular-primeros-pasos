import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  deleteHero?: string;
  heroNames: string[] = ['Spiderman', 'IronMan', 'Hulk', 'Thor'];

  removaLastHero(): void {
    this.deleteHero = this.heroNames.pop();
  }
}
