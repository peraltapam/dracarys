import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { DragonListComponent } from './dragon-list.component';
import { DragonDetailComponent } from './dragon-detail/dragon-detail.component';

@NgModule({
	declarations: [
		DragonListComponent,
		DragonDetailComponent
	],
	imports: [
		CommonModule
	]
})

export class DragonListModule {}