import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Profile } from '../profile';

declare var $: any;

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  public file_src : string = "../assets/images/avatar.jpeg";

  constructor() {
    //private router:Router;
   }

  ngOnInit() {
  }

  imageUploaded(file: any) {
    $('img').hide();
  }

  imageRemoved(file: any) {
    $('img').show();
  }

  model = new Profile();
}
