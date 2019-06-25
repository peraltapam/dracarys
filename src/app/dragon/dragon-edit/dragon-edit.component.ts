import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { Dragon } from '../dragon.model';
import { DragonService } from '../../dragon.service';


@Component({
  selector: 'app-dragon-edit',
  templateUrl: './dragon-edit.component.html',
  styleUrls: ['./dragon-edit.component.sass']
})
export class DragonEditComponent implements OnInit {
  dragonData: Dragon;
  selectedDragon: Dragon;
  selectedId: string;
  success = null;
  error = null;
  isNotEdited = null;

  constructor(private dragonService: DragonService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.selectedId = this.route.snapshot.params['id'];
    this.getDragonDetails(this.selectedId);
  }

  getDragonDetails(id: string) {
    this.dragonService.getDragonDetails(id).subscribe(
      response => {
        this.selectedDragon = response;
      },
      error => {
        this.error = `Unable to fetch dragon details! ${error.error}`;
      }
    )
  }

  editHandler(form: NgForm) {
    if(form.value.name === this.selectedDragon.name &&
       form.value.dragonType === this.selectedDragon.type)
    {
      this.isNotEdited = true;
      this.resetForm(form);
      return;
    }
    this.isNotEdited = false;
    this.dragonData = {
      name: form.value.name,
      type: form.value.dragonType
    }
    this.dragonService.editDragon(this.selectedId, JSON.stringify(this.dragonData)).subscribe(
      (response) => {
        if(response && response.id) {
          this.success = 'Dragon successfully edited!';
          this.selectedDragon = {
            name: response.name,
            type: response.type
          }
          this.resetForm(form);
        } else {
          this.error = 'Invalid response';
        }
         this.resetForm(form);
      },
      error => {
        this.error = error.error;
         this.resetForm(form);
      }
    );
  }

  resetForm(form: NgForm) {
    form.reset({
      name: this.selectedDragon.name,
      dragonType: this.selectedDragon.type
    });
  }

  reset(type: string) {
    if(type === 'success') {
      this.success = null;
    } else {
      this.error = null;
    }
  }
}
