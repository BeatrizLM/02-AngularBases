import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string ='Iron Man';
  public age: number = 45;

  get capitalizedName(): string{
    return this.name.toUpperCase();
  }

  getHeroDescription(): string{

    return `${this.name} - ${this.age}`;
    
  }

  changeHero(name:string) : void{
    this.name  = name;
  }

  changeAge(newAge: number) : void{
    this.age = newAge;
  }

  reset():void {
    // this.name = 'Iron Man'
    this.age = 45;
    document.querySelectorAll('h1')!.forEach(element => {
      element.innerHTML = '<h1>Desde Angular</h1>'
    });
  }
}
