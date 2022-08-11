import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Commande } from 'src/app/models/commande';
import { CommandesService } from 'src/app/services/commandes.service';

@Component({
  selector: 'app-commande-detail',
  templateUrl: './commande-detail.component.html',
  styleUrls: ['./commande-detail.component.css']
})
export class CommandeDetailComponent implements OnInit {
  commande!: any;
  id:any
  constructor(
    private route : ActivatedRoute,
    private commandeService : CommandesService,
    private router: Router,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params : ParamMap)=> {
      this.id=params.get('id');
      this.getCommande(this.id)

    });
    // const id = Number(this.route.snapshot.paramMap.get('id'));
    // if (id) {
    // this.getCommande(id);

    // }else{
    //   this.router.navigate(['/'])
    // }

  }

  getCommande(id:number){
    this.commandeService.getCommande(id).subscribe(res => {
      console.log(res);

        this.commande = res;
    })
  }

  transform(img:string){
    return this.sanitizer.bypassSecurityTrustResourceUrl(img);
}
}
