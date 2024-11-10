import api from "@/services/apiService";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Helper function to handle state updates
const handleAsyncState = (state, action, status) => {
  state.loading = status === "pending";
  if (status === "fulfilled") {
    state.error = false;
  } else if (status === "rejected") {
    state.error = action.payload;
  }
};

// Async Thunks
export const addCustomerWithOutTime = createAsyncThunk(
  "receptionDashboard/addCustomerWithOutTime",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await api.post("/Core/signup/customer/", payload, {
        headers: {
          Authorization: `Bearer ${payload.auth_Employee_token}`,
        },
      });
      return data;
    } catch (error) {
      console.log("error", error);
    }
  }
);

export const getCutomerList = createAsyncThunk(
  "receptionDashboard/getCutomerList",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await api.get("/Core/customer/list/", {
        headers: {
          Authorization: `Bearer ${payload.auth_Employee_token}`,
        },
      });
      return data;
      console.log("customer list", data);
    } catch (error) {
      console.log("error", error);
    }
  }
);

export const todayDate = createAsyncThunk(
  "receptionDashboard/todayDate",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await api.post(
        "/Reserve/reserve/list/",
        {
          from_: "",
          to: "",
        },
        {
          headers: {
            Authorization: `Bearer ${payload.auth_Employee_token}`,
          },
        }
      );
      return data;
    } catch (error) {
      console.log("error", error);
    }
  }
);

export const cancelReserve = createAsyncThunk(
  "receptionDashboard/cancelReserve",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await api.post(
        "/Reserve/cancel/reserve/",
        {
          reserve: payload.reserve,
          cancel_type: payload.cancel_type,
          sms_status: payload.sms_status,
        },
        {
          headers: {
            Authorization: `Bearer ${payload.auth_Employee_token}`,
          },
        }
      );
      return data;
    } catch (error) {
      console.log("error", error);
    }
  }
);

export const getOperatorSchedule = createAsyncThunk(
  "receptionDashboard/getOperatorSchedule",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await api.get("/Reception/operator/", {
        headers: {
          Authorization: `Bearer ${payload.auth_Employee_token}`,
        },
      });
      return data;
    } catch (error) {
      console.log("error", error);
    }
  }
);

export const enterExitedOprators = createAsyncThunk(
  "receptionDashboard/enterExitedOprators",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await api.post(
        "/Core/enter/exit/operator/",
        {
          username: payload.username,
        },
        {
          headers: {
            Authorization: `Bearer ${payload.auth_Employee_token}`,
          },
        }
      );

      return data;
    } catch (error) {
      console.log("error", error);
    }
  }
);

export const getLazerAreas = createAsyncThunk(
  "user/getLazerArea",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await api.get("/Laser/laser/area/list/", {
        headers: {
          Authorization: `Bearer ${payload.auth_Employee_token}`,
        },
      });
      return data;
    } catch (error) {
      console.log("get lazer area error", error);
      return rejectWithValue(error.message);
    }
  }
);

export const reservesListPerson = createAsyncThunk(
  "user/reservesListPerson",
  async (payload, { rejectWithValue }) => {
    console.log("payload success", payload);
    try {
      const { data } = await api.post(
        "/Reserve/user/reserve/list/",
        { username: payload.username },
        {
          headers: {
            Authorization: `Bearer ${payload.auth_Employee_token}`,
          },
        }
      );
      console.log("reservesListPerson", data);

      return data;
    } catch (error) {
      console.log("reservesListPerson", error);
      return rejectWithValue(error.message);
    }
  }
);
export const addcharge = createAsyncThunk(
  "user/addcharge",
  async (payload, { rejectWithValue }) => {
    console.log("payload success", payload);
    try {
      const { data } = await api.post(
        "/Core/customer/add/to/charge/",
        { username: payload.username },
        {
          headers: {
            Authorization: `Bearer ${payload.auth_Employee_token}`,
          },
        }
      );
      console.log("addcharge", data);

      return data;
    } catch (error) {
      console.log("addcharge", error);
      return rejectWithValue(error.message);
    }
  }
);

export const multiplePayment = createAsyncThunk(
  "user/multiplePayment",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await api.post(
        "/Payment/multiple/payment/",
        {
          reserve: payload.reserve,
          payment_list: [payload.paymentList],
        },
        {
          headers: {
            Authorization: `Bearer ${payload.auth_Employee_token}`,
          },
        }
      );

      console.log("payment success", data);
      return data;
    } catch (error) {
      console.log("payment error", error);
    }
  }
);

// Initial State
const initialState = {
  loading: false,
  error: "",
  todayReserve: null,
  cutomerList: [],
  operatorSchedule: {},
  LazerAreas: [],
  reservesLists: [],
};

const receptionDashboardSlice = createSlice({
  name: "receptionDashboard",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      // addCustomerWithOutTime
      .addCase(addCustomerWithOutTime.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(addCustomerWithOutTime.rejected, (state, action) =>
        handleAsyncState(state, action, "rejected")
      )
      .addCase(addCustomerWithOutTime.fulfilled, (state, action) => {
        handleAsyncState(state, action, "fulfilled");
      })

      // fetch customerList
      .addCase(getCutomerList.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(getCutomerList.rejected, (state, action) =>
        handleAsyncState(state, action, "rejected")
      )
      .addCase(getCutomerList.fulfilled, (state, action) => {
        handleAsyncState(state, action, "fulfilled");
        state.cutomerList = action.payload;
      })

      // todayDate
      .addCase(todayDate.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(todayDate.rejected, (state, action) =>
        handleAsyncState(state, action, "rejected")
      )
      .addCase(todayDate.fulfilled, (state, action) => {
        handleAsyncState(state, action, "fulfilled");
        state.todayReserve = action.payload;
      })

      // cancelReserve
      .addCase(cancelReserve.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(cancelReserve.rejected, (state, action) =>
        handleAsyncState(state, action, "rejected")
      )
      .addCase(cancelReserve.fulfilled, (state, action) => {
        handleAsyncState(state, action, "fulfilled");
      })

      // fetch getOperatorSchedule
      .addCase(getOperatorSchedule.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(getOperatorSchedule.rejected, (state, action) =>
        handleAsyncState(state, action, "rejected")
      )
      .addCase(getOperatorSchedule.fulfilled, (state, action) => {
        handleAsyncState(state, action, "fulfilled");
        state.operatorSchedule = action.payload;
      })

      // enterExitedOprators
      .addCase(enterExitedOprators.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(enterExitedOprators.rejected, (state, action) =>
        handleAsyncState(state, action, "rejected")
      )
      .addCase(enterExitedOprators.fulfilled, (state, action) => {
        handleAsyncState(state, action, "fulfilled");
      })

      // fetch getLazerAreas
      .addCase(getLazerAreas.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(getLazerAreas.rejected, (state, action) =>
        handleAsyncState(state, action, "rejected")
      )
      .addCase(getLazerAreas.fulfilled, (state, action) => {
        handleAsyncState(state, action, "fulfilled");
        state.LazerAreas = action.payload;
      })
      // fetch reservesListPerson
      .addCase(reservesListPerson.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(reservesListPerson.rejected, (state, action) =>
        handleAsyncState(state, action, "rejected")
      )
      .addCase(reservesListPerson.fulfilled, (state, action) => {
        handleAsyncState(state, action, "fulfilled");

        state.reservesLists = action.payload;
      })
      // fetch reservesListPerson
      .addCase(addcharge.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(addcharge.rejected, (state, action) =>
        handleAsyncState(state, action, "rejected")
      )
      .addCase(addcharge.fulfilled, (state, action) => {
        handleAsyncState(state, action, "fulfilled");
      })
       //post payment
      .addCase(multiplePayment.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(multiplePayment.rejected, (state, action) =>
        handleAsyncState(state, action, "rejected")
      )
      .addCase(multiplePayment.fulfilled, (state, action) => {
        handleAsyncState(state, action, "fulfilled");
      });
     
  },
});

export default receptionDashboardSlice.reducer;
