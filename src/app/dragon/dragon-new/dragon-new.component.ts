import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { DragonService } from '../dragon.service';
import { Dragon } from '../dragon.model';

@Component({
  selector: 'app-dragon-new',
  templateUrl: './dragon-new.component.html',
  styleUrls: ['./dragon-new.component.sass']
})
export class DragonNewComponent implements OnInit {
  dragonData: Dragon;
  alert = null;
  isError = null;
  isLoading = false;

  constructor(private dragonService: DragonService) { }

  ngOnInit() {
    this.alert = null;
  }

  // handle form information
  registerHandler(form: NgForm) {
    this.isLoading = true;

    // format data to be sent to api
    this.dragonData = {
      name: form.value.name,
      type: form.value.dragonType
    }

    // send create dragon request
    this.dragonService.createDragon(this.dragonData).subscribe(
      (response) => {
        if(response && response.id) {
          this.isError = false;
          this.alert = `Dragon ${ response.name } successfully registered!`;
          form.reset();
        } else {
          this.isError = true;
          this.alert = 'Invalid response';
        }
        this.isLoading = false;
      },
      error => {
        this.alert = 'Unable to register dragon.';
        this.isError = true;
        this.isLoading = false;
      }
    );
  }

  // clear alert message
  resetAlert() {
    this.alert = null;
  }
}
