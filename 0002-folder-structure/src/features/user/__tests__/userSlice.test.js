import userReducer, { fetchProfileStart, fetchProfileSuccess, fetchProfileFailure } from '../userSlice';

describe('userSlice', () => {
  const initialState = { profile: null, loading: false, error: null };

  it('should set loading true on fetch start', () => {
    const state = userReducer(initialState, fetchProfileStart());
    expect(state.loading).toBe(true);
  });

  it('should set profile on success', () => {
    const user = { name: 'Lalla' };
    const state = userReducer(initialState, fetchProfileSuccess(user));
    expect(state.profile).toEqual(user);
    expect(state.loading).toBe(false);
  });

  it('should set error on failure', () => {
    const state = userReducer(initialState, fetchProfileFailure('Failed'));
    expect(state.error).toBe('Failed');
  });
});
