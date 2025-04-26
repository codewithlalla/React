// src/features/admin/adminSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  dashboardStats: {},
  loading: false,
  error: null,
};

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    fetchAdminDataStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchAdminDataSuccess(state, action) {
      state.loading = false;
      state.users = action.payload.users;
      state.dashboardStats = action.payload.stats;
    },
    fetchAdminDataFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchAdminDataStart, fetchAdminDataSuccess, fetchAdminDataFailure } = adminSlice.actions;
export default adminSlice.reducer;
