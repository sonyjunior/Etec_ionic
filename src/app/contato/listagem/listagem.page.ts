import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ContatoapiService } from 'src/app/services/contatoapi.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.page.html',
  styleUrls: ['./listagem.page.scss'],
})
export class ListagemPage implements OnInit {
  frutas: string[] = ['Abacate', 'Manga', 'Maça', 'Tomate'];

  resultado : any = [{codigo: 0, nome:'', email: '', telefone: '', nascimento: '' }];

  constructor(private contatoApi: ContatoapiService,
              private navCtrl : NavController) {
  }

  ngOnInit() {

  }

  CarregaDados() {
    this.contatoApi.getContatos()
      .then((json) => {
        console.log(json);
        this.resultado = json;
      })
      .catch((erro) => {
        console.log(erro);
      });
  }

  Consultar(codigo) {
    console.log("consultar item:" + codigo );
  }


  gotoPage(page) {
    this.navCtrl.navigateForward(page);
  }


}
