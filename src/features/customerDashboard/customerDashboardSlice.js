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
export const getLazerAreaList = createAsyncThunk(
  "customerDashboard/getLazerAreaList",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await api.get("/Laser/laser/area/list/", {
        headers: {
          Authorization: `Bearer ${payload.token}`,
        },
      });
      console.log("data", data);
      return data;
    } catch (error) {
      console.log("error payload", error);
    }
  }
);
export const postLazerAreaList = createAsyncThunk(
  "customerDashboard/postLazerAreaList",
  async (payload, { rejectWithValue }) => {
    console.log("payload", payload);

    try {
      const { data } = await api.post(
        "/Reserve/client/pending/reserve/",
        {
          laser_area_list: payload.reserveId,
        },
        {
          headers: {
            Authorization: `Bearer ${payload.token}`,
          },
        }
      );
      console.log("data", data);
      return data;
    } catch (error) {
      console.log("error payload", error);
    }
  }
);
// Initial State
const initialState = {
  loading: false,
  error: "",
  areas: [],
};

const customerDashboardSlice = createSlice({
  name: "customerDashboard",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      // Fetch laser areas
      .addCase(getLazerAreaList.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(getLazerAreaList.fulfilled, (state, action) => {
        handleAsyncState(state, action, "fulfilled");
        state.areas = action.payload;
      })
      .addCase(getLazerAreaList.rejected, (state, action) => {
        handleAsyncState(state, action, "rejected");
      })

      // Post laser areas
      .addCase(postLazerAreaList.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(postLazerAreaList.fulfilled, (state, action) => {
        handleAsyncState(state, action, "fulfilled");
      })
      .addCase(postLazerAreaList.rejected, (state, action) => {
        handleAsyncState(state, action, "rejected");
      });
  },
});

export default customerDashboardSlice.reducer;
