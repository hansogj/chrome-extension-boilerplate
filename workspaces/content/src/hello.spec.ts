/**
 * @jest-environment jsdom
 */

import { value } from './hello';

describe('hello', () => {
    it('should have value', () => expect(value()).toBe('hello content'));
});
