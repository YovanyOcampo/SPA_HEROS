import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[]= [];
  constructor(private _heroesService: HeroesService, 
              private router: Router) {
    // console.log("Constructor HerosComponent");
   }

  ngOnInit() {
    this.heroes= this._heroesService.getHeroes();
    // console.log(this.heroes);
  }
  goToHero(index: number) {
    // console.log(index);
    this.router.navigate(['/heroe', index]);
  }
}
