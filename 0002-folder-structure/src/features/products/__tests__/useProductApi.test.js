import { renderHook } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '@/app/store';
import { useProductApi } from '../hooks/useProductApi';
import api from '@/services/api';
import { vi } from 'vitest';

vi.mock('@/services/api');

const wrapper = ({ children }) => <Provider store={store}>{children}</Provider>;

describe('useProductApi', () => {
  it('should fetch products and dispatch success', async () => {
    const mockData = [{ id: 1, name: 'Laptop' }];
    api.get.mockResolvedValueOnce({ data: mockData });

    const { result } = renderHook(() => useProductApi(), { wrapper });
    await result.current.fetchProducts();

    const state = store.getState().product;
    expect(state.items).toEqual(mockData);
  });
});
