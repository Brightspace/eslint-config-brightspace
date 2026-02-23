import { expect, fixture, html } from '@brightspace-ui/testing';

describe('testing-example-element', () => {
	it('renders', async() => {
		const element = await fixture(html`<testing-example-element></testing-example-element>`);
		expect(element.shadowRoot.textContent.trim()).to.equal('Hello World');
	});

	it('is accessible', async() => {
		const element = await fixture(html`<testing-example-element></testing-example-element>`);
		await expect(element).to.be.accessible();
	});
});
