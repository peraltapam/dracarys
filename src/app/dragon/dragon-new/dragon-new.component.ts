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
  success = null;
  error = null;
  isLoading = false;

  constructor(private dragonService: DragonService) { }

  ngOnInit() {
    this.success = null;
  }

  registerHandler(form: NgForm) {
    this.isLoading = true;
    this.dragonData = {
      name: form.value.name,
      type: form.value.dragonType
    }
    this.dragonService.createDragon(JSON.stringify(this.dragonData)).subscribe(
      (response) => {
        if(response && response.id) {
          this.success = `Dragon ${ response.name } successfully registered!`;
          form.reset();
        } else {
          this.error = 'Invalid response';
        }
        this.isLoading = false;
      },
      error => {
        this.error = error.error;
        this.isLoading = false;
      }
    );
  }

  reset(type: string) {
    if(type === 'success') {
      this.success = null;
    } else {
      this.error = null;
    }
  }
}
