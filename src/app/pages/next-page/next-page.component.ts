import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from 'src/app/services/characters.service';


@Component({
  selector: 'app-next-page',
  templateUrl: './next-page.component.html',
  styleUrls: ['./next-page.component.css']
})

export class NextPageComponent implements OnInit {
  
  
  public characters: any=[];

  constructor (private characterService: CharactersService,private route:ActivatedRoute) {}

  ngOnInit(): void {

      const numPage = this.route.snapshot.paramMap.get('num');
    
      this.characterService.getNextPage(numPage)
      .subscribe(characters=> {
        console.log(characters);
        this.characters = characters;        
      }
      );
  } 
      

  }
      
      //console.log(this.characterService.getNextPage()
      //.subscribe(resp=>{
      //  console.log(resp)
      //})
      //)
