import { Component, OnDestroy, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styles: ``,
})
export class HeroPageComponent implements OnInit, OnDestroy {
  public hero?: Hero;

  constructor(
    private heroService: HeroesService,
    private activetedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activetedRoute.params
      .pipe(
        switchMap(({ id }) => this.heroService.getHeroById(id)),
        tap((hero) => console.log({ hero }))
      )
      .subscribe((hero) => {
        if (!hero) return this.router.navigate(['/heroes/list']);
        this.hero = hero;
        return;
      });
  }

  ngOnDestroy(): void {}

  goBack(): void {
    this.router.navigateByUrl('heroes/list');
  }
}
