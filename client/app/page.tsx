import FileUploadComponent from './components/file-upload'
export default function Home() {
  return (
    <div>
      <div className="min-h-screen w-screen fixed flex">
        <div className="w-[30vw] min-h-screen flex  ">
          <FileUploadComponent/>
        </div>
        <div className="w-[70vw] min-h-screen flex  border-l-2 ">
          2
        </div>
      </div>
    </div>
  );
}

