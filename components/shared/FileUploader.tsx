"use client";

import { Dispatch, SetStateAction, useCallback } from "react";
import { useDropzone } from "@uploadthing/react/hooks";
import { generateClientDropzoneAccept } from "uploadthing/client";
import { Button } from "@/components/ui/button";
import { convertFileToUrl } from "@/lib/utils";
import Image from "next/image";
export interface FileWithPath extends File {
  readonly path?: string | string[];
}
type FileUploaderProrps = {
  imageUrl: string;
  onFieldChange: (value: string) => void;
  setFiles: Dispatch<SetStateAction<File[]>>;
};

export function FileUploader({
  imageUrl,
  onFieldChange,
  setFiles,
}: FileUploaderProrps) {
  const onDrop = useCallback((acceptedFiles: FileWithPath[]) => {
    setFiles(acceptedFiles);
    onFieldChange(convertFileToUrl(acceptedFiles[0]));
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*" ? generateClientDropzoneAccept(["image/*"]) : undefined,
  });

  return (
    <div
      {...getRootProps()}
      className='   flex items-center justify-center  h-72 cursor-pointer flex-col overflow-hidden rounded-xl bg-grey-50 max-w-[250px]'
    >
      <input
        {...getInputProps()}
        className='cursor-pointer'
      />

      {imageUrl ? (
        <div className='flex h-full w-full flex-1 justify-center '>
          <Image
            src={imageUrl}
            alt='image'
            width={250}
            height={250}
            className='w-full object-cover object-center'
          />
        </div>
      ) : (
        <div className='flex items-center justify-center flex-col py-5 text-grey-500'>
          <Image
            src='/assets/icons/upload.svg'
            width={77}
            height={77}
            alt='file upload'
          />
          <h3 className='mb-2 mt-2'>Drag photo here</h3>
          <p className='p-medium-12 mb-4'>SVG, PNG, JPG</p>
          <Button
            type='button'
            className='rounded-full'
          >
            Select from computer
          </Button>
        </div>
      )}
    </div>
  );
}

// export default FileUploader
