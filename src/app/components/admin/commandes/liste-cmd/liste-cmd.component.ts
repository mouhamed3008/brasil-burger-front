import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Commande } from 'src/app/models/commande';
import { CommandesService } from 'src/app/services/commandes.service';

@Component({
  selector: 'app-liste-cmd',
  templateUrl: './liste-cmd.component.html',
  styleUrls: ['./liste-cmd.component.css']
})
export class ListeCmdComponent implements OnInit {

  commandes: Commande[] = [];
  searchCommandes: Commande[] = [];
  dateSe:  any;
  today = new Date();
  title="Jour";


  constructor(
    private commandeService: CommandesService,
    private datePipe: DatePipe,
    private route : ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.commandeService.getCommandes().subscribe(
      commande => {
        this.commandes = commande
        commande.forEach(element => {
          this.dateSe = this.datePipe.transform(element.commandeAt);

          if (element.status == 'en cours' && this.isToday(this.dateSe)) {
            this.searchCommandes.push(element);

          }
        });
      })
  }



   isToday(date:string):boolean {
    let convert:any
    const today = new Date();

    // 👇️ Today's date
    convert = this.datePipe.transform(today);
    console.log("date "+date, "today "+convert);



    if (convert=== date) {
      return true;
    }

    return false;
  }

  search(date:string) {
    this.searchCommandes=[]
    this.commandes.forEach(element => {
      this.dateSe = this.datePipe.transform(element.commandeAt);
      // console.log(this.isToday(this.datePipe.transform(date)));
      let ss:any = this.datePipe.transform(date)

      this.title = this.isToday(ss) ? 'Jour' : date

      if (this.datePipe.transform(element.commandeAt) == this.datePipe.transform(date)) {
        this.searchCommandes.push(element);

      }
    });

  }

  onSubmit(form:NgForm ) {


      this.search(form.value.date)

  }


  annuler(id:number, toDo:string){
    if(toDo === "valider"){
      this.commandeService.annulerCmd(id,"valider").subscribe();
    }else if(toDo === "terminer"){
      this.commandeService.annulerCmd(id, "terminer").subscribe();
    }
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate(['admin']);
  });

  }


  filter(search:any) {
    let cmds = this.searchCommandes
    this.searchCommandes=[]
   if (search.value === 'valider') {
    this.commandes
    .filter((a:any)=>{
      let dateC:any = this.datePipe.transform(a.commandeAt)
      if(a.status === search.value && this.isToday(dateC)){
        this.searchCommandes.push(a);
        return a;
      }
    })
   }else  if (search.value === 'en cours'){
    this.commandes
    .filter((a:any)=>{
      let dateC:any = this.datePipe.transform(a.commandeAt)
      if(a.status === search.value && this.isToday(dateC)){
        this.searchCommandes.push(a);
        return a;
      }
    })
   }
  }
}
