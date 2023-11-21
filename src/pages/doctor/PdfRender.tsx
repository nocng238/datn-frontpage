import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
// import { useToast } from "./ui/use-toast";

import { useResizeDetector } from "react-resize-detector";
// import { Button } from "./ui/button";
// import { Input } from './ui/input'
import { useState } from "react";

import { useForm } from "react-hook-form";

import {
  ChevronDownIcon,
  ChevronUpIcon,
  MagnifyingGlassIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/solid";
import SimpleBar from "simplebar-react";
import InputDefault from "@app/components/Input/InputDefault";
import {
  Spinner,
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import { toast } from "react-toastify";
import LabelNotification from "@app/components/Notification/LabelNotification";
import { cn } from "@app/helpers/utils";
// import PdfFullscreen from './PdfFullscreen'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

interface PdfRendererProps {
  url: string;
}

const PdfRenderer = ({ url }: PdfRendererProps) => {
  //   const { toast } = useToast()

  const [numPages, setNumPages] = useState<number>();
  const [currPage, setCurrPage] = useState<number>(1);
  const [scale, setScale] = useState<number>(1);
  const [renderedScale, setRenderedScale] = useState<number | null>(null);
  const [rotation, setRotation] = useState<number>(0);
  const isLoading = renderedScale !== scale;

  //   const CustomPageValidator = z.object({
  //     page: z
  //       .string()
  //       .refine((num) => Number(num) > 0 && Number(num) <= numPages!),
  //   });

  //   type TCustomPageValidator = z.infer<typeof CustomPageValidator>;

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<any>({
    defaultValues: {
      page: "1",
    },
    // resolver: zodResolver(CustomPageValidator),
  });

  //   console.log(errors);

  const { width, ref } = useResizeDetector();
  // const width = 0;
  console.log(width);

  const handlePageSubmit = ({ page }: any) => {
    setCurrPage(Number(page));
    setValue("page", String(page));
  };

  return (
    <div className="w-[50%] bg-white rounded-md shadow flex flex-col items-center overflow-auto">
      <div className="h-14 w-full border-b border-zinc-200 flex items-center justify-between px-2">
        <div className="flex items-center gap-1.5">
          <Button
            disabled={currPage <= 1}
            onClick={() => {
              setCurrPage((prev) => (prev - 1 > 1 ? prev - 1 : 1));
              setValue("page", String(currPage - 1));
            }}
            variant="gradient"
            size="sm"
            aria-label="previous page"
          >
            <ChevronDownIcon className="h-4 w-4" />
          </Button>

          <div className="flex items-center gap-1.5">
            <InputDefault
              {...register("page")}
              // className="w-4 min-w-[4px]"
              size="md"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSubmit(handlePageSubmit)();
                }
              }}
              value={currPage}
            />

            <p className="text-zinc-700 text-sm space-x-1">
              <span>/</span>
              <span>{numPages ?? "x"}</span>
            </p>
          </div>

          <Button
            disabled={numPages === undefined || currPage === numPages}
            onClick={() => {
              setCurrPage((prev) =>
                prev + 1 > numPages! ? numPages! : prev + 1
              );
              setValue("page", String(currPage + 1));
            }}
            size="sm"
            variant="gradient"
            aria-label="next page"
          >
            <ChevronUpIcon className="h-4 w-4" />
          </Button>
        </div>

        <div className="space-x-2">
          <Menu>
            <MenuHandler>
              <Button
                className="gap-1.5"
                aria-label="zoom"
                variant="gradient"
                size="sm"
              >
                <div className="flex gap-2 items-center">
                  <MagnifyingGlassIcon className="h-4 w-4" />
                  <p>{scale * 100}%</p>
                  <ChevronDownIcon className="h-3 w-3 opacity-50" />
                </div>
              </Button>
            </MenuHandler>
            <MenuList className="z-[10000] ">
              <MenuItem
                className="z-[10000] hover:bg-grayWhite"
                onClick={() => setScale(1)}
              >
                100%
              </MenuItem>
              <MenuItem
                className="z-[10000] hover:bg-grayWhite"
                onClick={() => {
                  setScale(1.5);
                }}
              >
                150%
              </MenuItem>
              <MenuItem
                className="z-[10000] hover:bg-grayWhite"
                onClick={() => setScale(2)}
              >
                200%
              </MenuItem>
              <MenuItem
                className="z-[10000] hover:bg-grayWhite"
                onClick={() => setScale(2.5)}
              >
                250%
              </MenuItem>
            </MenuList>
          </Menu>

          <Button
            onClick={() => setRotation((prev) => prev + 90)}
            variant="gradient"
            aria-label="rotate 90 degrees"
            size="sm"
          >
            <ArrowPathIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="flex-1 w-full max-h-[70vh] overflow-auto">
        <div ref={ref}>
          <Document
            loading={
              <div className="flex justify-center">
                <Spinner className="my-24 h-6 w-6" />
              </div>
            }
            onLoadError={() => {
              toast(
                <LabelNotification
                  message="Error loading PDF.Please try again later!"
                  type="error"
                />
              );
            }}
            onLoadSuccess={({ numPages }) => setNumPages(numPages)}
            file={url}
            className="max-h-full"
          >
            {isLoading && renderedScale ? (
              <Page
                width={width ? width : 1}
                pageNumber={currPage}
                scale={scale}
                rotate={rotation}
                key={"@" + renderedScale}
              />
            ) : null}

            <Page
              className={cn(isLoading ? "hidden" : "")}
              width={width ? width : 1}
              pageNumber={currPage}
              scale={scale}
              rotate={rotation}
              key={"@" + scale + Math.random()}
              loading={
                <div className="flex justify-center">
                  <Spinner className="my-24 h-6 w-6" />
                </div>
              }
              onRenderSuccess={() => setRenderedScale(scale)}
            />
          </Document>
        </div>
      </div>
    </div>
  );
};

export default PdfRenderer;
