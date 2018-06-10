// Import angular dependencies
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/** Define module routes */
const routes: Routes = [];

// Define module
@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

// Export module
export class AppRoutingModule { }