import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { CategoriasProvider } from './../../providers/categorias/categorias';
import { Observable } from 'rxjs/observable';

@IonicPage()
@Component({
  selector: 'page-categorias',
  templateUrl: 'categorias.html',

})
export class CategoriasPage {
  public isSearchbarOpened = false;
  categorias: Observable<any[]>;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private toast: ToastController,
              private categoriasProvider: CategoriasProvider) {

              this.categorias = this.categoriasProvider.getAll();
              }



  onSearch(event){
    console.log(event.target.value);
  }
  newItemCategorias(){
    this.navCtrl.push('EditCategoriasPage')
  }
  editCategorias(categoria: any){
    this.navCtrl.push('EditCategoriasPage', {categoriakey: categoria.key})

  }
  removeCategorias(key:string){
    this.categoriasProvider.remove(key);
    this.toast.create({message: 'Categoria removida com sucesso!', duration:3000}).present();
  }

  listCategorias(categoria: any){
    this.navCtrl.push('DescricaoPage', {categoriakey: categoria.key})

  }
  descricao(){
    this.navCtrl.push('DescricaoPage')
  }
  origem(){
    this.navCtrl.push('DescricaoPage')
  }


}
