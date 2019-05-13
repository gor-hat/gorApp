import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class CategoriasProvider {
  private PATH = 'categorias/';
  constructor(private db:AngularFireDatabase) {}

  getAll(){
    return this.db.list(this.PATH)
    .snapshotChanges()
    .map(changes =>{
      return changes.map( c =>({key: c.key, ...c.payload.val()}));
    })
  }
  get(categoriakey:string){
    return this.db.object(this.PATH + categoriakey)
    .snapshotChanges()
    .map( c =>{
      return { key: c.key, ...c.payload.val()};
    })
  }
  save(categoriaData: any){
    const categoria = {
      nome:categoriaData.nome,
      descricao:categoriaData.descricao,
      origem:categoriaData.origem
    };

    if(categoriaData.key){
      this.db.list(this.PATH).update(categoriaData.key, categoria);
    }else{
      this.db.list(this.PATH).push(categoria);
    }
  }
  remove(key:string){
    this.db.list(this.PATH).remove(key);

  }
}
