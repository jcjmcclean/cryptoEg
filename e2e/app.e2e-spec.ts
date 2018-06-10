// Import e2e dependencies
import { AppPage } from './app.po';

// Define e2e test
describe('crypto-eg App', () => {
	// Define page
	let page: AppPage;

	// Run before each test
	beforeEach(() => {
		page = new AppPage();
	});

	/////

	it('should display welcome message', () => {
		page.navigateTo();
		expect(page.getParagraphText()).toEqual('Welcome to app!');
	});
});