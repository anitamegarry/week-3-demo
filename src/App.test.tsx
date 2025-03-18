import {describe, test, expect,} from 'vitest';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react'
import Random from './components/Random';


describe('App', () => {
    test('check tests are working...',() => {
        expect(1 + 2).toBe(3);
    })
    test('check Random component',() => {
        render(<Random />)
        screen.debug() // Logs the DOM structure
        const element = screen.getByText('Random component heading here...')
        expect(element).toBeInTheDocument()
    });
    test('loads data from an API on initial render',() => {
        // render the App,
        // load some data
        // check we've rendered the correct data
    })
});