import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RespCharacter } from '../models/reqResponse';
import { map } from 'rxjs/operators';
import { Character} from '../models/character';




@Injectable({
  providedIn: 'root'
})



export class CharactersService {

  numPages=1;

  constructor(private http:HttpClient) { }

  
  getNextPage(numPage: any){
    
    const url="https://rickandmortyapi.com/api/character?page="+numPage;
    
    return this.http.get<RespCharacter>(url)
    .pipe(
      map(resp=>{
        return resp.results;
        
      })
    )

  }

  getCharacter(){
    const url="https://rickandmortyapi.com/api/character";
    
    return this.http.get<RespCharacter>(url)
    .pipe(
      map(resp=>{
        return resp.results;
        
      })
    )

  }

  getOneCharacter(aidi: string){
    const url="https://rickandmortyapi.com/api/character/"+aidi;

    return this.http.get<RespCharacter>(url)
    .pipe(
      map(resp=>{
        return resp;
        
      })
    )

  }

}
