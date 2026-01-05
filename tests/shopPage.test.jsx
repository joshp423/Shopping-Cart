import { describe, test, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

//mock what comes back from react router dom by mocking the whole thing
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useOutletContext: vi.fn(),
  };
});

import ShopPage from '../src/components/Shop-page/shopPage';

//test that product tiles are displaying accurately - amount
describe('productPage', () => {
    test('dom is rendering products correctly', () => {

        render(<ShopPage />);

        const tiles = screen.getElementByTestID('product-tile');
        expect(tiles).toHaveLength(2);
    })
})