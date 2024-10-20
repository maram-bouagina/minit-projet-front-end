import { Component, OnInit } from '@angular/core';
import { Livre } from '../model/livre.model';
import { LivreService } from '../livre.service';
@Component({
  selector: 'app-recherche-par-titre',
  templateUrl: './recherche-par-titre.component.html',
  styles: ``
})
export class RechercheParTitreComponent  implements OnInit {
  alllivres!: Livre[];
  titre!:string;
  livres!: Livre[];
  searchTerm!: string;
  constructor(private livreService:LivreService){}
  ngOnInit(): void {
    this.livres=this.livreService.listelivres() ;
   
    }
    onKeyUp(filterText : string){
      this.livres = this.alllivres.filter(item =>
      item.titre.toLowerCase().includes(filterText.toLowerCase()));
      }
      
}
