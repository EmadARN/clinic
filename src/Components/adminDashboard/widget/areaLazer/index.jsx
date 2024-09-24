import React from "react";
import Lists from "../../common/Lists";
import ModalAttention from "@/Common/moadals/ModalAttention";
import ModalDefine from "@/Common/moadals/ModalDefine";
import ModalBodyContent from "./widget/modalDefineDetails/ModalBodyContent";
import ModalFooterContent from "./widget/modalDefineDetails/ModalFooterContent";
import HeaderContent from "./widget/modalAttentionDetails/HeaderContent";
import BodyContent from "./widget/modalAttentionDetails/BodyContent";
import FooterContent from "./widget/modalAttentionDetails/FooterContent";
import { Box } from "@chakra-ui/react";
import AdminHeader from "../AdminHeader/AdminHeader";
import { BiTargetLock } from "react-icons/bi";

const AreaLazer = () => {
  return (
    <>
      <Box sx={{ py: 6 }}>
        <AdminHeader
          headerTitle="نواحی لیزر"
          btnValue="افزودن ناحیه جدید"
          icon={<BiTargetLock />}
        />
      </Box>
      <Box>
        <ModalDefine
          headerContent="افزودن ناحیه جدید"
          renderContent={() => ({
            body: <ModalBodyContent />,
            footer: <ModalFooterContent />,
          })}
        />
        <ModalAttention
          renderContent={() => ({
            header: <HeaderContent />,
            body: <BodyContent />,
            footer: <FooterContent />,
          })}
        />
      </Box>
      <Box sx={{ mt: 8 }}>
        <Lists
          firstArea="فول بادی"
          secondArea="450,000 تومان"
          thirdArea="35 دقیقه"
          display="none"
        />
      </Box>
    </>
  );
};

export default AreaLazer;
