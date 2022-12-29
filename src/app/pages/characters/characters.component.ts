import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})

export class CharactersComponent implements OnInit {
  
  public characters: any=[];
  public numberPage=1;
  public numPagesFoot=1;
  constructor (private characterService: CharactersService) {}

  ngOnInit(): void {


      this.characterService.getCharacter()
      .subscribe(characters=> {
        console.log(characters);
        this.characters = characters;   
              this.numberPage+1;

      });

      //console.log(this.characterService.getNextPage()
      //.subscribe(resp=>{
      //  console.log(resp)
      //})
      //)
      
      
      
  }

}
