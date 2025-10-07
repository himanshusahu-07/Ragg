'use client';
import * as React from 'react';
import { Upload } from 'lucide-react';

const FileUploadComponent: React.FC = () => {
  return (
    <div className="fixed left-0 top-0 flex flex-col bg-slate-900 text-white shadow-2xl p-4 rounded-r-lg border-white border-2">
      <Upload className="w-93 h-8 mx-auto" />
    </div>
  );
};

export default FileUploadComponent;



