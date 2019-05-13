import { AngularFireAuth } from 'angularfire2/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { DicaProvider } from '../../providers/dica/dica';
import { DatePipe } from '@angular/common';

@IonicPage()
@Component({
  selector: 'page-edit-dicas',
  templateUrl: 'edit-dicas.html',
})
export class EditDicasPage {
  title: string;
  form: FormGroup;
  dicas:any;
  userName: string;
  dataAtual;



  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private formBuilder: FormBuilder,
              private toast: ToastController,
              private dicaProvider: DicaProvider,
              private auth: AngularFireAuth,
              private dateFormat: DatePipe){
    this.dicas = this.navParams.data.dica || {};
    this.dataAtual = this.dateFormat.transform(new Date(), 'yyyy-MM-dd');


    this.SetupPageTitle();
    this.createForm();

    const consulta = this.dicaProvider
    .get(this.navParams.data.dicakey).subscribe((Data:any) => {
      consulta.unsubscribe();
      this.dicas = Data;
      this.createForm();
    });
    const userState = this.auth.authState.subscribe( user => {
      if (user){
        this.userName = user.displayName;
        userState.unsubscribe();
      }
    });

  }

  private SetupPageTitle(){
    if (this.navParams.data.dica){
      this.title = 'Alterando dica';
    }else{
      this.title = 'nova dica';
    }
  }

  private createForm(){
      this.form = this.formBuilder.group({
      key:[this.dicas.key],
      dicaUser:[this.dicas.dicaUser, Validators.required],
      usuario:[this.userName],
      data:[this.dataAtual],
      moderar:['N']
    })
  }

  onSubmit(){
    if(this.form.valid){
      this.dicaProvider.save(this.form.value);
      this.toast.create({message: 'sua dica foi enviada com sucesso', duration:1000}).present();
      this.navCtrl.pop();
    }
  }


}

