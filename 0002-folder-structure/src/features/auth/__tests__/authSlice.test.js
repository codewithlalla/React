// src/features/auth/__tests__/authSlice.test.js
import authReducer, { login, logout } from '../authSlice';

describe('authSlice', () => {
  const initialState = {
    user: null,
    token: null,
    isAuthenticated: false,
  };

  it('should handle login', () => {
    const result = authReducer(initialState, login({ user: { name: 'Lalla' }, token: 'abc' }));
    expect(result.user.name).toBe('Lalla');
    expect(result.token).toBe('abc');
    expect(result.isAuthenticated).toBe(true);
  });

  it('should handle logout', () => {
    const result = authReducer({ ...initialState, isAuthenticated: true }, logout());
    expect(result.isAuthenticated).toBe(false);
    expect(result.token).toBeNull();
  });
});
