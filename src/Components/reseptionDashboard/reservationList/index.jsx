import React from "react";
import { Box, useDisclosure } from "@chakra-ui/react";
import { extractTime } from "@/utils/extractDate";
import { getCustomerName } from "@/utils/getCustomerName";
import Lists from "../shared/Lists";
import PaymentDialog from "../paymentDialog";
import { lazerAreas } from "@/constants";
import usePaymentcontrol from "./logic/usePaymentcontrol";

export const ReservationList = ({
  isDisabled,
  ButtonValue,
  display,
  todayReserve,
  auth_Employee_token,
  isPaymentTable,
  cutomerList,
}) => {
  const cancelModal = useDisclosure();
  const paymentModal = useDisclosure();

  const {
    handlePaymentChange,
    handlePrice,
    handleProcessPaymentCharge,
    paymentHandleClick,
    cancelHandler,
    handlePaymentMethodChange,
  } = usePaymentcontrol(
    paymentModal,

    auth_Employee_token,
    cancelModal
  );

  return (
    <Box w={{ base: "100vw", md: "100%" }} px={4}>
      <Box>
        {todayReserve?.all_list
          ?.filter(
            (item) =>
              !isPaymentTable || item.payed || item.reserve_type === "sc"
          )
          .map((item) => {
            const matchedAreas = item.laser_area_list
              .map(
                (area) =>
                  lazerAreas.find((lazerArea) => lazerArea.value === area)
                    ?.label
              )
              .filter(Boolean) // حذف مقادیر null یا undefined
              .join(", "); // تبدیل آرایه به یک رشته با جداکننده‌ی ", "

            return (
              <Box key={item.id} width={{ base: "110vw", md: "100%" }}>
                <Lists
                  key={item.id}
                  firstArea={getCustomerName(item.user)}
                  secondArea={getCustomerName(item.user, cutomerList)}
                  thirdArea={extractTime(item.reserve_time_str)}
                  fourthArea={matchedAreas || item.laser_area_name} // استفاده از مقدار پیش‌فرض اگر مقایسه‌ای انجام نشد
                  item={item}
                  ButtonValue={ButtonValue}
                  isPaymentTable={isPaymentTable}
                  isDisabled={isDisabled}
                  handleProcessPaymentCharge={handleProcessPaymentCharge}
                  cancelHandler={cancelHandler}
                />
              </Box>
            );
          })}
      </Box>

      {paymentModal.isOpen && (
        <PaymentDialog
          handlePaymentMethodChange={handlePaymentMethodChange}
          handlePaymentChange={handlePaymentChange}
          paymentHandleClick={paymentHandleClick}
          isOpen={paymentModal.isOpen}
          onClose={paymentModal.onClose}
          handlePrice={handlePrice}
        />
      )}
    </Box>
  );
};
