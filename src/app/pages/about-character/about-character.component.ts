import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-about-character',
  templateUrl: './about-character.component.html',
  styleUrls: ['./about-character.component.css']
})

export class AboutCharacterComponent implements OnInit{

  
  
  public oneCharacters: any=[] 
  

  constructor (private characterService: CharactersService, private route:ActivatedRoute) {}

  ngOnInit(): void {
    const id=this.route.snapshot.paramMap.get('id');

      this.characterService.getOneCharacter(id!)
      .subscribe(characters=> {
        console.log(characters);
        this.oneCharacters = characters;

      });

  }

}