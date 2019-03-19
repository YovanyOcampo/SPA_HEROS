import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe, HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {
  
  heroe: Heroe;
  constructor(private activatedRouter: ActivatedRoute, 
                private heroService: HeroesService) { 
    this.activatedRouter.params.subscribe(params => {
      // console.log(params['id']); // Obtención del parámetro 
      this.heroe = this.heroService.getHeroe(params['id']);
      console.log(this.heroe);
    });
  }

  ngOnInit() {
  }

}
