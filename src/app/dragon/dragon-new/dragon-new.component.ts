import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { DragonService } from '../../dragon.service';
import { Dragon } from '../dragon.model';

@Component({
  selector: 'app-dragon-new',
  templateUrl: './dragon-new.component.html',
  styleUrls: ['./dragon-new.component.sass']
})
export class DragonNewComponent implements OnInit {
  dragonData: Dragon;
  showSuccessAlert: boolean = false;
  error = null;

  constructor(private dragonService: DragonService) { }

  ngOnInit() {
    this.showSuccessAlert = false;
  }

  registerHandler(form: NgForm) {
    this.dragonData = {
      name: form.value.name,
      type: form.value.dragonType
    }
    this.dragonService.createDragon(JSON.stringify(this.dragonData)).subscribe(
      (response) => {
        console.log(response);
        if(response && response.id) {
          this.showSuccessAlert = true;
          form.reset();
        } else {
          this.error = 'Invalid response';
        }
      },
      error => {
        this.error = error.error;
      }
    );
  }
}
