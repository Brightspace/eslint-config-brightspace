import { css, html, LitElement } from 'lit';

class ExampleElement extends LitElement {
	static properties = {
		label: { type: String },
		_changeCount: { state: true }
	};

	static styles = css`
		:host {
			display: block;
		}
	`;

	constructor() {
		super();
		this.label = 'Change Count';
		this._changeCount = 0;
	}

	connectedCallback() {
		super.connectedCallback();
		window.addEventListener('change', this.#handleChange);
	}

	disconnectedCallback() {
		super.disconnectedCallback();
		window.removeEventListener('change', this.#handleChange);
	}

	render() {
		return html`<p>${this.label}: ${this._changeCount}</p>`;
	}

	willUpdate(changedProperties) {
		super.willUpdate(changedProperties);
		if (changedProperties.has('label')) {
			this._changeCount = 0;
		}
	}

	#handleChange() {
		this._changeCount += 1;
	}
}

customElements.define('example-element', ExampleElement);
