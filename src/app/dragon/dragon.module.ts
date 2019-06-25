import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { DragonListComponent } from './dragon-list/dragon-list.component';
import { DragonDetailComponent } from './dragon-detail/dragon-detail.component';
import { DragonEditComponent } from './dragon-edit/dragon-edit.component';
import { DragonNewComponent } from './dragon-new/dragon-new.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
	declarations: [
		DragonListComponent,
		DragonDetailComponent,
		DragonEditComponent,
		DragonNewComponent
	],
	imports: [
		CommonModule,
		RouterModule,
		FormsModule,
		SharedModule
	]
})

export class DragonModule {}