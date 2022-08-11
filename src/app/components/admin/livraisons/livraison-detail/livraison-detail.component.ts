import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Commande } from 'src/app/models/commande';
import { CommandesService } from 'src/app/services/commandes.service';
import { ZonesService } from 'src/app/services/zones.service';

@Component({
  selector: 'app-livraison-detail',
  templateUrl: './livraison-detail.component.html',
  styleUrls: ['./livraison-detail.component.css']
})
export class LivraisonDetailComponent implements OnInit {
id:any;
commandes: Commande[]= []
masterSelected:boolean=false;
checklist: Commande[]= []
checkedList:any;
livreurs:any
livreurChoisi!:number;
retour:boolean=false
  constructor(
    private route : ActivatedRoute,
    private zoneService : ZonesService,
    private cmdService : CommandesService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params : ParamMap)=> {
      this.id=params.get('id');
      this.getCommandesZone(this.id)

    });

    this.getCheckedItemList();

    this.cmdService.getLivreurs().subscribe(
      result => {
        this.livreurs = result
      }
    )
  }

  getCommandesZone(id:number):void {
    this.zoneService.getZoneCmds(id).subscribe(
      res=>{
          this.commandes = res
          this.checklist = res
          console.log(this.commandes);

      }
    )
  }


   checkUncheckAll() {
    for (var i = 0; i < this.checklist.length; i++) {
      if (this.checklist[i].status == 'terminer') {

        this.checklist[i].isSelected = this.masterSelected;
      }
    }
    this.getCheckedItemList();
  }

  isAllSelected() {
    this.masterSelected = this.checklist.every(function(item:any) {
        return item.isSelected == true;
      })
    this.getCheckedItemList();
  }

  getCheckedItemList(){
    this.checkedList = [];
    for (var i = 0; i < this.checklist.length; i++) {
      if(this.checklist[i].isSelected)
      this.checkedList.push(
        { id:this.checklist[i].id}
      );
    }
  }


  livreurChoice(livreur:any){
    this.livreurChoisi = livreur.value.list_name
  }

  validerLivraison(){
    const livraison = {
        livreurs:{id:+this.livreurChoisi},
        commandes: this.checkedList,
        zone:{id:+this.id}
    }

    this.cmdService.commander(livraison).subscribe(
      result => {
        this.router.navigateByUrl('admin/', {skipLocationChange: true}).then(() => {
          this.router.navigate(['livraison/'+ this.id]);
      });

      }
    )

  }


  filtrer(livrer:any){
    let list = this.checklist
    console.log('====================================');
    console.log(this.checklist);
    console.log('====================================');
    if (livrer.value === 'livrer') {
        this.checklist
        .filter((a:any)=>{
            if (a.status === 'Cours de livraison') {
                console.log(a);
                this.retour = true
                return a

            }else{

            }
        })
    }else if(livrer.value === 'aliv'){
      this.retour = false

        this.checklist = list
    }
  }

}
