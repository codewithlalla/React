// src/features/auth/__tests__/useAuthApi.test.js
import { renderHook } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '@/app/store';
import { useAuthApi } from '../hooks/useAuthApi';
import api from '@/services/api';
import { vi } from 'vitest';

vi.mock('@/services/api');

const wrapper = ({ children }) => <Provider store={store}>{children}</Provider>;

describe('useAuthApi', () => {
  it('calls loginUser and dispatches login', async () => {
    const mockData = { user: { name: 'Test' }, token: '123' };
    api.post.mockResolvedValueOnce({ data: mockData });

    const { result } = renderHook(() => useAuthApi(), { wrapper });

    await result.current.loginUser({ email: 'a@test.com', password: 'pass' });

    const state = store.getState().auth;
    expect(state.user.name).toBe('Test');
    expect(state.token).toBe('123');
    expect(state.isAuthenticated).toBe(true);
  });
});
