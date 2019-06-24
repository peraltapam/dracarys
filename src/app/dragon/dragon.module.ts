import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DragonComponent } from './dragon.component';
import { DragonListComponent } from './dragon-list/dragon-list.component';
import { DragonDetailComponent } from './dragon-detail/dragon-detail.component';
import { DragonEditComponent } from './dragon-edit/dragon-edit.component';
import { DragonNewComponent } from './dragon-new/dragon-new.component';

@NgModule({
	declarations: [
		DragonListComponent,
		DragonDetailComponent,
		DragonEditComponent,
		DragonComponent,
		DragonNewComponent
	],
	imports: [
		CommonModule,
		RouterModule
	]
})

export class DragonModule {}