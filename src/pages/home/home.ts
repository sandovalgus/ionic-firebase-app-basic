import { Component, ViewChild } from '@angular/core';

import { NavController } from 'ionic-angular';
import { NotesService } from '../../services/notes.service';
import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	notes = [];
	@ViewChild('myNav') nav: NavController;
  constructor(public navCtrl: NavController, public notesService : NotesService) {
  	// notesService.getNotes()
  	// .subsribe( notas =>{ this.notes = notas;}); 

		notesService.getNotes()
		      .valueChanges().subscribe(notes => {
		        console.log(notes)
		        this.notes = notes;
		});﻿
  } 
  public goToDetail(id){
  	this.navCtrl.push(DetailPage, {id:id});
  }  

  public CreateNote(){
  	this.navCtrl.push(DetailPage, {id:0});
  }

}
