import {
  Typography,
  Card,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useArray, useBoolean, useString } from "@app/helpers/hooks";
import { useState } from "react";
const charades = [
  "mắt biếc",
  "lật mặt 6",
  "Điệp Viên 007",
  "nước chảy đá mòn",
  "uống nước nhớ nguồn",
  "siêu nhân",
  "Aladin và cây đèn thần",
  "Bên trên tâng lầu",
  "See tình",
  "ca sĩ giấu mặt (the masked singer)",
  "running man (chạy đi chờ chi)",
  "Cô pé quàng khăn đỏ",
  "có công mài sắt , có ngày chai tay",
  "Yêu xa",
  "một đêm say",
  "nàng tiên cá",
  "tiny love",
  "Frozen (nữ hoàng băng giá)",
  "dấu mưa",
  "ngủ một mình",
  "ăn cháo đá bát",
  "quá nhanh quá nguy hiểm",
  "Bỗng dưng mún khóc",
  "nàng thơ",
  "có chàng trai viết lên cây",
  "một nhà",
  "Cô pé bán diêm",
]
  .map((value) => ({ value, sort: Math.random() }))
  .toSorted((a, b) => a.sort - b.sort)
  .map(({ value }) => value);
const pictionary = [
  "đường một chiều",
  "siêU nhân",
  "người ngoài hành tinh",
  "đôi mắt âm dương",
  "Cá ngựa",
  "Cá heo",
  "Chim cánh cụt",
  "Khủng long",
  "cây vợt",
  "bàn thờ",
  "cá nóc",
  "đồng hồ cát",
  "con chim hót",
  "tiền mã hoá",
  "người nhện",
  "nhà vệ sinh",
  "chuột túi",
  "nhà tù",
  "nữ thần tự do",
  "người tuyết",
  "nhà trắng",
  "Bikini",
  "cây thông noel",
  "sở thú",
  "mê cung",
  "ba thằng bạn",
  "đĩa bay",
]
  .map((value) => ({ value, sort: Math.random() }))
  .toSorted((a, b) => a.sort - b.sort)
  .map(({ value }) => value);

export default function Charades() {
  const openModal = useBoolean();
  const [selected, setSelected] = useState<string[]>([]);
  const selectedName = useString();

  const renderModal = () => {
    return (
      <Dialog
        size="md"
        open={openModal.value}
        handler={() => openModal.setValue(!openModal.value)}
      >
        <DialogBody className="flex items-center justify-around">
          <div className="flex items-center justify-around">
            <Typography variant="h3">
              {selectedName.value.toUpperCase()}
            </Typography>
          </div>
        </DialogBody>
        {/* <DialogFooter>
            <Button
              variant="text"
              color="red"
              onClick={handleOpen}
              className="mr-1"
            >
              <span>Cancel</span>
            </Button>
            
          </DialogFooter> */}
      </Dialog>
    );
  };
  return (
    <div className="relative flex flex-col gap-8 min-h-[100vh] w-screen p-8">
      <div className="flex flex-col gap-5">
        <Typography variant="h1"> Charades</Typography>
        <div className="grid grid-cols-10 items-center justify-between gap-4 self-start md:flex-row overflow-auto">
          {charades.map((name, index) => {
            return (
              <Card
                className="flex items-center justify-center w-[170px] h-[100px] border border-blue-gray-50 py-4 px-5 shadow-lg shadow-blue-gray-900/5 cursor-pointer"
                onClick={() => {
                  openModal.setValue(true);
                  setSelected([...selected, name]);
                  selectedName.setValue(name);
                  // renderModal(name);
                }}
              >
                <p className="text-center">
                  {selected.includes(name) ? name.toUpperCase() : index + 1}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <Typography variant="h1"> Pictionary</Typography>
        <div className="grid grid-cols-10 items-center justify-between gap-4 self-start md:flex-row overflow-auto">
          {pictionary.map((name, index) => {
            return (
              <Card
                className=" flex items-center justify-center w-[170px] h-[100px] border border-blue-gray-50 py-4 px-5 shadow-lg shadow-blue-gray-900/5 cursor-pointer text-center"
                onClick={() => {
                  openModal.setValue(true);
                  setSelected([...selected, name]);
                  selectedName.setValue(name);
                }}
              >
                <p className="text-center">
                  {selected.includes(name) ? name.toUpperCase() : index + 1}
                </p>
              </Card>
            );
          })}
        </div>
      </div>

      {renderModal()}
    </div>
  );
}
