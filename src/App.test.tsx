import {describe, test,} from 'vitest';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react'

import App from './App';

describe('App', () => {

    test('loads data from an API on initial render',async() => {
        // render the App
        render(<App />)
        
        // wait for loading element to be removed...
        await waitForElementToBeRemoved(screen.queryByText(/loading.../));
        
        // verify we can see the data from one object
        screen.getByText('Winter is Coming')
    })
});