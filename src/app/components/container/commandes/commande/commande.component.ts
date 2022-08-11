import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Commande } from 'src/app/models/commande';
import { CommandesService } from 'src/app/services/commandes.service';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {

  commandes:Commande[]=[]
  private id:any
  p: number = 1;

    constructor(
      private route : ActivatedRoute,
      private commandeService : CommandesService,
      private router: Router

    ) { }

  ngOnInit(): void {
    // const id = Number(this.route.snapshot.paramMap.get('id'));


    this.route.paramMap.subscribe((params : ParamMap)=> {
      this.id=params.get('id');
      this.getCommandesClient(this.id)

    });



  }

  getCommandesClient(id: number){
    this.commandeService.getClientCommandes(id).subscribe(
      res => {
        this.commandes = res
      }
    )
  }


  annuler(id:number){
    console.log(id);

    this.commandeService.annulerCmd(id).subscribe();
    this.router.navigate(['commandes/'+id  ]);

  }

}
