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
    this.dragonData = {
      name: form.value.name,
      type: form.value.dragonType
    }
    this.dragonService.editDragon(this.selectedId, JSON.stringify(this.dragonData)).subscribe(
      (response) => {
        if(response && response.id) {
          this.success = 'Dragon successfully edited!';
        } else {
          this.error = 'Invalid response';
        }
        form.reset();
      },
      error => {
        this.error = error.error;
        form.reset();
      }
    );
  }

  resetForm(form: NgForm) {
    form.reset();
  }

  reset(type: string) {
    if(type === 'success') {
      this.success = null;
    } else {
      this.error = null;
    }
  }
}
