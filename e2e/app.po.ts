// Import e2e dependencies
import { browser, by, element } from 'protractor';

// Export page
export class AppPage {

	navigateTo() {
		return browser.get('/');
	}

	getParagraphText() {
		return element(by.css('app-root h1')).getText();
	}
}
