import { Component, OnInit } from '@angular/core';
import { Livre } from '../model/livre.model';
import { LivreService } from '../livre.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Genre } from '../model/genre.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-update-livre',
  templateUrl: './update-livre.component.html',
  styles: ``
})
export class UpdateLivreComponent implements OnInit{
  
      currentlivre = new Livre();
      genres! : Genre[];
      updatedgenId! : number;


      

myForm!: FormGroup;

loading : boolean = false;
      constructor(private activatedRoute: ActivatedRoute,
        private router :Router,
      private livreService: LivreService,private formBuilder: FormBuilder) { }
    ngOnInit() {
      const idLivre = this.activatedRoute.snapshot.params['id'];
      console.log('ID du livre récupéré :', idLivre);
      this.livreService.listegenres().
      subscribe(gens => {this.genres = gens._embedded.genres;
      console.log(gens);
      });
     

      if (idLivre) {
    
        this.livreService.consulterlivre(idLivre).subscribe(livre => {
          this.currentlivre = livre;
          this.updatedgenId=this.currentlivre.genre.idgenre;
          if (this.currentlivre) {
            console.log('Livre récupéré :', this.currentlivre);
    
           
            this.myForm = this.formBuilder.group({
              idlivre: [this.currentlivre.idlivre, [Validators.required]],
              titre: [this.currentlivre.titre, [Validators.required, Validators.minLength(6)]],
              auteur: [this.currentlivre.auteur, [Validators.required, Validators.minLength(6)]],
              nbpages: [this.currentlivre.nbpages, [Validators.required]],
              datepublication: [this.currentlivre.datepublication, [Validators.required]],
               idgenre: [this.currentlivre.genre.idgenre, [Validators.required]]
            });
          } else {
            console.error('Le livre récupéré est vide');
          }
        }, error => {
          console.error('Erreur lors de la récupération du livre:', error);
        });
      } else {
        console.error('ID du livre est invalide');
      }
    }
    
    
      
      updatelivre(){

        this.currentlivre.genre = this.genres.
        find(gen => gen.idgenre == this.updatedgenId)!;
         this.livreService.updatelivre(this.currentlivre).subscribe(liv => {
          this.router.navigate(['livres']); }
          );
          
      } 
 }
