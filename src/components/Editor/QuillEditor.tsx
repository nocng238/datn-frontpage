import Axios from "axios";
import { IUseDefaultValueProps, useWindowSize } from "@app/helpers/hooks";
import { formatDate } from "@app/helpers/utils";
import { debounce } from "lodash";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";

import ImageResize from "quill-image-resize-module-react";
window.Quill = Quill;
Quill.register("modules/imageResize", ImageResize);
interface NoteFile {
  file: string;
  file_name: string;
  url: string;
  readOnly?: boolean;
}
interface Props {
  appointmentId: string;
  note: string;
  onEditNotes?: (notes: string) => void;
  isSavingNote?: IUseDefaultValueProps;
  readOnly?: boolean;
}

const CustomToolbar = () => {
  return (
    <div id="customToolBar" className="rounded-full flex">
      <div>
        <select className="ql-header" onChange={(e) => e.persist()}>
          <option value="1" />
          <option value="2" />
          <option selected />
        </select>
      </div>

      <button className="ql-bold" />
      <button className="ql-italic" />
      <button className="ql-list" value={"ordered"} />
      <button className="ql-list" value={"bullet"} />
      <div>
        <select className="ql-color">
          <option value="red" />
          <option value="green" />
          <option value="blue" />
          <option value="orange" />
          <option value="violet" />
          <option value="#d0d1d2" />
          <option selected />
        </select>
      </div>
      <button className="ql-image"></button>
    </div>
  );
};

const QuillEditor = (props: Props) => {
  const {
    onEditNotes,
    note,
    appointmentId,
    isSavingNote,
    readOnly = false,
  } = props;
  const quillRef = useRef<any>(appointmentId);
  const [value, setValue] = useState(note);
  const { isMobile } = useWindowSize();
  const imageHandler = async () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();
    input.onchange = async () => {
      const file: any = input && input.files ? input.files[0] : null;
      if (!file) return;
      const formData = new FormData();
      formData.append("file", file);
      const data = await upload(formData);
      const quill = quillRef?.current?.getEditor();
      const cursorPosition = quill.getSelection()?.index || 0;
      const link = data.url;
      quill.insertEmbed(cursorPosition, "image", link);
      quill.setSelection(cursorPosition + 1);
    };
  };

  const upload = async (formData: FormData) => {
    isSavingNote?.setValue(true);
    const response = await Axios.post(`/upload/image`, formData);
    isSavingNote?.setValue(false);
    return response.data;
  };

  const onChangeEditor = (notes: string) => {
    // the url in image tag got encoded from & -> &amp so we need to replace it back to apply our logic
    // const editedNote = notes.replaceAll("&amp;", "&");
    if (value === notes) {
      return;
    }
    setValue(notes);
    debouceOnUpdateNotes(notes);
  };
  const debouceOnUpdateNotes = useCallback(
    debounce(onEditNotes ? onEditNotes : () => {}, 1000),
    []
  );
  const modules = useMemo(() => {
    return {
      toolbar: {
        container: "#customToolBar",
        handlers: {
          image: imageHandler,
        },
      },
      clipboard: {
        matchVisual: false,
      },
      imageResize: {
        parchment: Quill.import("parchment"),
        modules: ["Resize", "Toolbar"],
      },
    };
  }, [appointmentId]);

  return (
    <div className="text-editor  w-full">
      <ReactQuill
        key={`${appointmentId}editor`}
        className={`w-full h-[70vh] overflow-auto text-black ${
          isMobile ? "blurred-editor" : ""
        } leading-3`}
        ref={quillRef}
        value={value}
        onChange={onChangeEditor}
        modules={modules}
        readOnly={readOnly}
        theme="snow"
        formats={[
          "header",
          "bold",
          "italic",
          "underline",
          "strike",
          "blockquote",
          "list",
          "bullet",
          "indent",
          "link",
          "image",
          "code",
          "color",
          "background",
          "code-block",
          "align",
          "width",
        ]}
      />
      <div className="flex items-center justify-center">
        <CustomToolbar />
      </div>
      {/* )} */}
    </div>
  );
};
export default QuillEditor;
