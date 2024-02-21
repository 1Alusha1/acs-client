import React, { useState } from "react";
import { InboxOutlined } from "@ant-design/icons";
import { Button, Input, message, Upload } from "antd";
import fileAsync from "../async/file.async";
const { Dragger } = Upload;
const UploadPlan = () => {
  const [file, setFile] = useState("");
  const onChange = (info) => {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  };
  const onDrop = (e) => {
    console.log("Dropped files", e.dataTransfer.files);
  };
  const sendFile = () => {
    let result = fileAsync.sendFile(file);
    console.log(result);
  };
  const props = {
    name: "file",
    multiple: true,
    action: "http://localhost:3000/api/file/",
    onChange,
    onDrop,
  };
  console.log(file);
  return (
    <>
      <Input type="file" onChange={(e) => setFile(e.target.files[0])} />
      {/* <Dragger {...props}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">
          Click or drag file to this area to upload
        </p>
        <p className="ant-upload-hint">
          Support for a single or bulk upload. Strictly prohibited from
          uploading company data or other banned files.
        </p>
      </Dragger> */}
      <Button onClick={sendFile}>Відправити</Button>
    </>
  );
};

export default UploadPlan;
