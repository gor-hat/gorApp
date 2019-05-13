import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CategoriasProvider } from './../../providers/categorias/categorias';

@IonicPage()
@Component({
  selector: 'page-descricao',
  templateUrl: 'descricao.html',
})
export class DescricaoPage {
  categoria:any;
  title: string;
  nomeativo: string;
  descricaoativo:string;
  origemativo: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private categoriasProvider: CategoriasProvider) {
                this.SetupPageTitle();

    this.categoria = this.navParams.data.categoria || {};
    const consulta = this.categoriasProvider
    .get(this.navParams.data.categoriakey).subscribe((Data:any) => {
          consulta.unsubscribe();
                      this.categoria = Data;
                      this.nomeativo = this.categoria.nome;
                      this.descricaoativo = this.categoria.descricao;
                      this.origemativo = this.categoria.origem;
    });

  }


  private SetupPageTitle(){
    if (this.navParams.data.categoria){
      this.title = 'List Ativos';
    }
  }

}
