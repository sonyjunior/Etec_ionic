import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ContatoapiService } from 'src/app/services/contatoapi.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.page.html',
  styleUrls: ['./consulta.page.scss'],
})
export class ConsultaPage implements OnInit {

  codigo: number = 0;

  resultado : any = {codigo: 0, nome:'', email: '', telefone: '', nascimento: '' };

  constructor(private contatoApi: ContatoapiService,
                private navCtrl : NavController) { }

  ngOnInit() {
  }

  Consultar(numero){
    this.contatoApi.getContato(numero)
    .then( (json) => {
      console.log(json);

     this.resultado = json;

    })
    .catch((erro) =>{
      console.log(erro);
    })
  }
  gotoPage(page) {
    this.navCtrl.navigateForward(page);
  }
}
