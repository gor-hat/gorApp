import { DicaProvider } from './../../providers/dica/dica';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, DateTime, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/observable';



@IonicPage()
@Component({
  selector: 'page-dica',
  templateUrl: 'dica.html',
})
export class DicaPage {
  userName: string;
  dicas:Observable<any[]>;
  dataAtual;
  dataFormatada;


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private auth: AngularFireAuth,
              private toast: ToastController,
              private dicaProvider: DicaProvider) {
              this.dicas = this.dicaProvider.getAll();

              this.dataAtual = new Date();
              this.obterDataFormatada();
  }

  ionViewDidLoad() {
    const userState = this.auth.authState.subscribe( user => {
      if (user){
        this.userName = user.displayName;
        userState.unsubscribe();
      }
    })
  }
  newItemDicas(){
    this.navCtrl.push('EditDicasPage')
  }

  obterDataFormatada(){
    var dataObj = new Date()

    var ano = dataObj.getFullYear().toString()
    var mes = dataObj.getMonth().toString()
    var dia = dataObj.getDate().toString()

    this.dataFormatada = dia +'/' +mes + '/'+ ano;
  }
  editDicas(dica: any){
    this.navCtrl.push('EditDicasPage', {dicakey: dica.key})

  }
  removeDicas(key:string){
    this.dicaProvider.remove(key);
    this.toast.create({message: 'Dica removida com sucesso!', duration:3000}).present();
  }


}
