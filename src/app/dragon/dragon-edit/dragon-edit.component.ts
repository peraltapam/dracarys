import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { Dragon } from '../dragon.model';
import { DragonService } from '../dragon.service';

@Component({
  selector: 'app-dragon-edit',
  templateUrl: './dragon-edit.component.html',
  styleUrls: ['./dragon-edit.component.sass']
})
export class DragonEditComponent implements OnInit {
  selectedDragon: Dragon;
  selectedId: string;
  alert = null;
  isError = null;
  isNotEdited = null;
  isLoading = false;

  constructor(private dragonService: DragonService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.isLoading = true;
    this.alert = null;

    // retrieve dragon id from url and load data
    this.selectedId = this.route.snapshot.params['id'];
    this.getDragonDetails(this.selectedId);
  }

  getDragonDetails(id: string) {
    this.dragonService.getDragonDetails(id).subscribe(
      response => {
        this.selectedDragon = response;
        this.isError = false;
        this.isLoading = false;
      },
      error => {
        this.alert = 'Unable to fetch dragon details!';
        this.isError = true;
        this.isLoading = false;
      }
    )
  }

  editHandler(form: NgForm) {
    this.isLoading = true;
    this.isNotEdited = false;
    const newData = form.value

    // Check if data inserted is different than original data
    if(this.checkEditedForm(newData, this.selectedDragon)) {
      this.isNotEdited = true;
      this.resetForm(form);
      return;
    }

    // save data to be sent to api
    const dragonData = {
      name: newData.name,
      type: newData.type
    }

    this.sendEditRequest(form, dragonData);
  }
  
  // send edit dragon request
  sendEditRequest(form: NgForm, data: Dragon) {
    this.dragonService.editDragon(this.selectedId, JSON.stringify(data)).subscribe(
      (response) => {
        if(response && response.id) {
          this.editSuccessHandler(response);
        } else {
          this.alert = 'Invalid response';
        }
        this.resetForm(form);
      },
      error => {
        this.alert = 'Unable to edit Dragon!';
        this.isError = true;
        this.resetForm(form);
      }
    );
  }

  // return boolean to indicate if new data is equal to the old one
  checkEditedForm(newData: Dragon, oldData: Dragon) {
    return newData.name === oldData.name && newData.type === oldData.type;
  }

  editSuccessHandler(response: Dragon) {
    this.alert = 'Dragon successfully edited!';
    this.selectedDragon = {
      name: response.name,
      type: response.type
    }
  }

  // update form with most current values
  resetForm(form: NgForm) {
    form.reset({
      name: this.selectedDragon.name,
      type: this.selectedDragon.type
    });
    this.isLoading = false;
  }

  // clear alert message
  resetAlert() {
    this.alert = null;
  }
}
