import { createElement } from 'lwc';
import Trigger from 'recipe/trigger';

describe('recipe-trigger', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('displays greeting', () => {
        // Create element
        const element = createElement('recipe-trigger', {
            is: Trigger
        });
        document.body.appendChild(element);

        // Verify displayed greeting
        const div = element.shadowRoot.querySelector('div');
        expect(div.textContent).toBe('Trigger, World!');
    });
});
