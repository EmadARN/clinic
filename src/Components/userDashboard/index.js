import React, { useEffect } from "react";
import NavBar from "@/Container/navbar/NavBar";
import Session_Records from "./widget/widgetForRecords/session-records/Session-Records";
import SessionRecordDetails from "./widget/widgetForRecords/sessionRecordDetails/SessionRecordDetails";
import MainDashboard from "./MainDashboard";
import { useDashboardContext } from "@/context/DashboardContext";

const Dashboard = ({ page, setPage }) => {
  const { steperState, setSteperState } = useDashboardContext();

  if (steperState === 0) {
    return (
      <MainDashboard
        page={page}
        setPage={setPage}
        steperState={steperState}
        setSteperState={setSteperState}
      />
    );
  } else if (steperState === 1) {
    return (
      <Session_Records
        steperState={steperState}
        setSteperState={setSteperState}
      />
    );
  } else if (steperState === 2) {
    return (
      <>
        <NavBar bgColor="#ffffff" />

        <SessionRecordDetails
          steperState={steperState}
          setSteperState={setSteperState}
        />
      </>
    );
  }
};

export default Dashboard;
