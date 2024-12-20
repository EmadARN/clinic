import React, { useRef } from "react";
import { Box, Button } from "@chakra-ui/react";
import SearchInput from "@/Common/searchInput/SearchInput";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

const RepoertHeader = ({ from, to, onDateChange, onTodayClick }) => {
  const datePickerRef = useRef(null);

  return (
    <Box
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      justifyContent="space-between"
      alignItems="center"
      width="100%"
    >
      <Box width={{ base: "100%", md: "auto" }} mb={{ base: 3, md: 0 }}>
        <SearchInput placeholder="جست و جو" size="lg" />
      </Box>

      <Box display="flex" alignItems="center" gap={3}>
        <Button
          variant="ghost"
          border="2px solid orange"
          color="orange"
          textAlign="center"
          padding="20px"
          onClick={onTodayClick}
        >
          امروز
        </Button>
        <Box>
          <DatePicker
            ref={datePickerRef}
            value={[from, to].filter(Boolean)}
            onChange={onDateChange}
            multiple
            numberOfMonths={2}
            style={{ padding: "20px" }}
            placeholder="انتخاب بازه‌ی تاریخ"
            calendar={persian}
            locale={persian_fa}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default RepoertHeader;
