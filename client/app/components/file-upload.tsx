'use client';
import * as React from 'react';
import { Upload } from 'lucide-react';

const FileUploadComponent: React.FC = () => {
  const handleFileUploadUploadButtonClick =()=>{
    const el=document.createElement('input');
    el.setAttribute('type','file');
    el.setAttribute('accept','application/pdf');
    el.addEventListener('change',(ev)=>{
      if(el.files && el.files.length>0){
        const file=el.files[0];
      }
    });
    el.click();
  };
  return (
    <div className=" flex-col bg-slate-900 text-white shadow-2xl  justify-center items-center p-4 rounded-lg border-white border-2">
        <div onClick={handleFileUploadUploadButtonClick}

          className='flex justify-center items-center flex-col'>
        <h3>Upload PDF File </h3>
        </div>
      <Upload className="w-8 h-8 mx-auto mt-2" />
    </div>
  );
};

export default FileUploadComponent;



