import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class DicaProvider {
  private PATH = 'dica/';
  constructor(private db:AngularFireDatabase) {}

  getAll(){
    return this.db.list(this.PATH)
    .snapshotChanges()
    .map(changes =>{
      return changes.map( d =>({key: d.key, ...d.payload.val()}));
    })
  }
  get(dicakey:string){
    return this.db.object(this.PATH + dicakey)
    .snapshotChanges()
    .map( d =>{
      return { key: d.key, ...d.payload.val()};
    })
  }
  save(dicaData: any){
    const dica = {
      dicaUser:dicaData.dicaUser,
      usuario:dicaData.usuario,
      data:dicaData.data,
      moderar:dicaData.moderar

    };

    if(dicaData.key){
      this.db.list(this.PATH).update(dicaData.key, dica);
    }else{
      this.db.list(this.PATH).push(dica);
    }
  }
  remove(key:string){
    this.db.list(this.PATH).remove(key);

  }
}
