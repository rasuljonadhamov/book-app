import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const ImageUploader = ({ setImage }) => {
  const onDrop = useCallback(
    (acceptedFiles) => {
      setImage(acceptedFiles[0]);
    },
    [setImage]
  );

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} className="image-uploader">
      <input {...getInputProps()} />
      <p>Drag 'n' drop an image here, or click to select one</p>
    </div>
  );
};

export default ImageUploader;
