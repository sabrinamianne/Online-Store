import { Injectable } from '@angular/core';
import { Album } from './album.model';
import {Pipe, PipeTransform} from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class AlbumService {
  constructor(private database: AngularFireDatabase) {
    this.albums = database.list('albums');
  }
  albums: FirebaseListObservable<any[]>;
  getAlbums(){
    return this.albums;
  }

  addAlbum(newAlbum: Album) {
    this.albums.push(newAlbum);
  }

  getAlbumById(albumId: string){
    return this.database.object('albums/'+albumId);
      }
}
