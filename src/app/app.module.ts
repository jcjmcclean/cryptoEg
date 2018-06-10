// Import angular dependencies
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Import app dependencies
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Define module
@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})

// Export module
export class AppModule { }
