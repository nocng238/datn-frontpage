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
const vi = [
  "Nàng thơ",
  "bên trên tầng lầu",
  "cô đơn trên sofa",
  "thằng điên",
  "mắt biếc",
  "lật mặt 6",
  "bố già",
  "bỗng dưng mún khóc",
  "tây du kí",
  "call me (Vietnamese song)",
  "Điệp Viên 007",
]
  .map((value) => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value);
const eng = [
  "fly me to the moon",
  "baby",
  "gangnam style",
  "the masked singer",
  "the walking dead",
  "iron man",
  "spider man",
  "aladin (aladin và cây đèn thầnn)",
  "the little mermaid (nàng tiên cá)",
  "black panther (chiến binh báo đen)",
  "Frozen",
  "Baby driver",
]
  .map((value) => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value);
export default function Charades() {
  const openModal = useBoolean();
  const [selected, setSelected] = useState<string[]>([]);
  const selectedName = useString();

  const renderModal = () => {
    return (
      <Dialog
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
        <Typography variant="h1"> VI</Typography>

        <div className="flex flex-col-reverse items-center justify-between gap-4 self-start md:flex-row overflow-auto">
          {vi.map((name, index) => {
            return (
              <Card
                className="h-max w-max border border-blue-gray-50 py-4 px-5 shadow-lg shadow-blue-gray-900/5 cursor-pointer"
                onClick={() => {
                  openModal.setValue(true);
                  setSelected([...selected, name]);
                  selectedName.setValue(name);
                  // renderModal(name);
                }}
              >
                {selected.includes(name) ? name.toUpperCase() : index + 1}
              </Card>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <Typography variant="h1"> ENG</Typography>

        <div className="flex flex-col-reverse items-center justify-between gap-4 self-start md:flex-row overflow-auto">
          {eng.map((name, index) => {
            return (
              <Card
                className="h-max w-max border border-blue-gray-50 py-4 px-5 shadow-lg shadow-blue-gray-900/5 cursor-pointer"
                onClick={() => {
                  openModal.setValue(true);
                  setSelected([...selected, name]);
                  selectedName.setValue(name);
                }}
              >
                {selected.includes(name) ? name.toUpperCase() : index + 1}
              </Card>
            );
          })}
        </div>
      </div>

      {renderModal()}
    </div>
  );
}
