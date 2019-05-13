import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CategoriasProvider } from './../../providers/categorias/categorias';


@IonicPage()
@Component({
  selector: 'page-edit-categorias',
  templateUrl: 'edit-categorias.html'
})
export class EditCategoriasPage {

  title: string;
  form: FormGroup;
  categoria:any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private formBuilder: FormBuilder,
              private toast: ToastController,
              private categoriasProvider: CategoriasProvider){
    this.categoria = this.navParams.data.categoria || {};
    this.SetupPageTitle();
    this.createForm();

    const consulta = this.categoriasProvider
    .get(this.navParams.data.categoriakey).subscribe((Data:any) => {consulta.unsubscribe();
      this.categoria = Data;
      this.createForm();
    });
  }

  private SetupPageTitle(){
    if (this.navParams.data.categoria){
      this.title = 'Alterando categoria';
    }else{
      this.title = 'nova categoria';
    }
  }

  private createForm(){
    this.form = this.formBuilder.group({
      key:[this.categoria.key],
      nome:[this.categoria.nome, Validators.required],
      descricao:[this.categoria.descricao, Validators.required],
      origem:[this.categoria.origem, Validators.required],

    })
  }

  onSubmit(){
    if(this.form.valid){
      this.categoriasProvider.save(this.form.value);
      this.toast.create({message: 'categoria salva com sucesso', duration:1000}).present();
      this.navCtrl.pop();
    }
  }
}
