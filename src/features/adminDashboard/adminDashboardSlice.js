import api from "@/services/apiService";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Helper function to handle state updates
const handleAsyncState = (state, action, status) => {
  state.loading = status === "pending";
  if (status === "fulfilled") {
    state.error = "";
  } else if (status === "rejected") {
    state.error = action.payload;
  }
};

// Async Thunks
export const getAsyncOpratorList = createAsyncThunk(
  "admin/getAsyncOpratorList",
  async (_, { getState, rejectWithValue }) => {
    const { token } = getState().adminDashboard;
    try {
      const { data } = await api.get("/Core/user/list/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const postAsyncLogin = createAsyncThunk(
  "user/postAsyncLogin",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await api.post("/Core/login/", payload);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addAsyncUsers = createAsyncThunk(
  "user/addAsyncUsers",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await api.post("/Core/signup/admin/", payload, {
        headers: {
          Authorization: `Bearer ${payload.token}`,
        },
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const editAsyncUser = createAsyncThunk(
  "user/editAsyncUser",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await api.post(
        `/Core/change/user/information/`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${payload.token}`,
          },
        }
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

// New Async Thunk for deleting a user
export const deleteAsyncUser = createAsyncThunk(
  "user/deleteAsyncUser",
  async (payload, { getState, rejectWithValue }) => {
    const { token } = getState().adminDashboard;
    try {
      await api.post(`/Core/delete/user/${payload.id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return userId; // Return the ID of the deleted user
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

// Initial State
const initialState = {
  loading: false,
  error: "",
  users: [],
  token: typeof window !== "undefined" ? localStorage.getItem("token") : null,
  userType: null,
};

const adminDashboardSlice = createSlice({
  name: "adminDashboard",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postAsyncLogin.pending, (state) =>
        handleAsyncState(state, {}, "pending")
      )
      .addCase(postAsyncLogin.fulfilled, (state, action) => {
        handleAsyncState(state, action, "fulfilled");
        state.token = action.payload.token;
        state.userType = action.payload.user_type;
        localStorage.setItem("token", action.payload.token);
      })
      .addCase(postAsyncLogin.rejected, (state, action) =>
        handleAsyncState(state, action, "rejected")
      )
      .addCase(addAsyncUsers.pending, (state) =>
        handleAsyncState(state, {}, "pending")
      )
      .addCase(addAsyncUsers.fulfilled, (state, action) => {
        handleAsyncState(state, action, "fulfilled");
        if (Array.isArray(state.users)) {
          state.users.push(action.payload);
        } else {
          console.error("state.users is not an array:", state.users);
          state.users = [action.payload];
        }
      })
      .addCase(addAsyncUsers.rejected, (state, action) =>
        handleAsyncState(state, action, "rejected")
      )
      .addCase(getAsyncOpratorList.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(getAsyncOpratorList.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(getAsyncOpratorList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(editAsyncUser.pending, (state) =>
        handleAsyncState(state, {}, "pending")
      )
      .addCase(editAsyncUser.fulfilled, (state, action) => {
        handleAsyncState(state, action, "fulfilled");
        const updatedUserIndex = state.users.findIndex(
          (user) => user.username === action.payload.username
        );
        if (updatedUserIndex !== -1) {
          state.users[updatedUserIndex] = action.payload;
        }
      })
      .addCase(editAsyncUser.rejected, (state, action) =>
        handleAsyncState(state, action, "rejected")
      )
      .addCase(deleteAsyncUser.pending, (state) =>
        handleAsyncState(state, {}, "pending")
      )
      .addCase(deleteAsyncUser.fulfilled, (state, action) => {
        handleAsyncState(state, action, "fulfilled");
        state.users = state.users.filter(
          (user) => user.username !== action.payload
        );
      })
      .addCase(deleteAsyncUser.rejected, (state, action) =>
        handleAsyncState(state, action, "rejected")
      );
  },
});

export default adminDashboardSlice.reducer;
