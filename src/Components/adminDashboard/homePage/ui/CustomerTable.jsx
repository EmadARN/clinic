import React from "react";
import { Box, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import { getCustomerName } from "@/utils/getCustomerName";
import { formatNumber } from "@/utils/formatNumber";

const CustomerTable = ({ dateReserve, customerListAdmin }) => {
  return (
    <Box
      sx={{
        mt: 8,
        bgColor: "#FEFEFE",
        p: 4,
        rounded: "8px",
        display: "flex",
        justifyContent: "center",
      }}
      boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
    >
      <Table>
        {/* هدر جدول */}
        <Thead>
          <Tr>
            <Th
              fontSize={{ base: "10px", md: "16px" }}
              bgColor="purple.500"
              color="white"
              textAlign="center"
            >
              نام و نام خانوادگی
            </Th>
            <Th
              fontSize={{ base: "10px", md: "16px" }}
              bgColor="purple.500"
              color="white"
              textAlign="center"
            >
              جمع خدمات (تومان)
            </Th>
            <Th
              fontSize={{ base: "10px", md: "16px" }}
              bgColor="purple.500"
              color="white"
              textAlign="center"
            >
              زمان
            </Th>
          </Tr>
        </Thead>

        {/* بدنه جدول */}
        <Tbody>
          {dateReserve?.all_list?.map((item) => (
            <Tr key={item.id}>
              {/* ستون نام کاربر */}
              <Td fontSize={{ base: "10px", md: "16px" }} textAlign="center">
                {getCustomerName(item.user, customerListAdmin)}
              </Td>

              {/* ستون قیمت */}
              <Td
                display={{ base: "none", sm: "table-cell" }}
                fontSize={{ base: "10px", md: "16px" }}
                textAlign="center"
              >
                {formatNumber(item.total_price_amount)}
                {/* فرض می‌کنیم که قیمت در اینجا موجود است */}
              </Td>

              {/* ستون زمان رزرو */}
              <Td
                display={{ base: "none", sm: "table-cell" }}
                fontSize={{ base: "10px", md: "16px" }}
                textAlign="center"
              >
                {item.reserve_time_str}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default CustomerTable;
// import React from "react";
// import { Box, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
// import { getCustomerName } from "@/utils/getCustomerName";
// import { formatNumber } from "@/utils/formatNumber";

// const CustomerTable = ({ dateReserve, customerListAdmin }) => {
//   return (
//     <Box
//       mt={8}
//       bgColor="#FEFEFE"
//       p={4}
//       rounded="8px"
//       display="flex"
//       justifyContent="center"
//       boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
//     >
//       <Table>
//         {/* هدر جدول */}
//         <Thead>
//           <Tr>
//             <Th
//               fontSize={{ base: "10px", md: "16px" }}
//               bgColor="purple.500"
//               color="white"
//               textAlign="center"
//             >
//               نام و نام خانوادگی
//             </Th>
//             <Th
//               fontSize={{ base: "10px", md: "16px" }}
//               bgColor="purple.500"
//               color="white"
//               textAlign="center"
//             >
//               جمع خدمات (تومان)
//             </Th>
//             <Th
//               fontSize={{ base: "10px", md: "16px" }}
//               bgColor="purple.500"
//               color="white"
//               textAlign="center"
//             >
//               زمان
//             </Th>
//           </Tr>
//         </Thead>

//         {/* بدنه جدول */}
//         <Tbody>
//           {dateReserve?.all_list?.map((item) => {
//             const cancel = item.reserve_type === "sc";
//             if (cancel) {
//               return null;
//             }
//             return (
//               <Tr key={item.id}>
//                 {/* ستون نام کاربر */}
//                 <Td fontSize={{ base: "10px", md: "16px" }} textAlign="center">
//                   {getCustomerName(item.user, customerListAdmin)}
//                 </Td>

//                 {/* ستون قیمت */}
//                 <Td fontSize={{ base: "10px", md: "16px" }} textAlign="center">
//                   {formatNumber(item.total_price_amount)}
//                 </Td>

//                 {/* ستون زمان رزرو */}
//                 <Td fontSize={{ base: "10px", md: "16px" }} textAlign="center">
//                   {item.reserve_time_str}
//                 </Td>
//               </Tr>
//             );
//           })}
//         </Tbody>
//       </Table>
//     </Box>
//   );
// };

// export default CustomerTable;
