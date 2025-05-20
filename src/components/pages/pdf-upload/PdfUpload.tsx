import { DashboardSideBar } from '@src/components/atoms/dashboard-sidebar/Dashboard-sidebar';
import { UploadButton } from '@src/components/atoms/upload-button/Upload-button';
import { UploadTable } from '@src/components/atoms/upload-table/Upload-table';
import { useState } from 'react';

export const PdfUpload = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [citacoes, setCitacoes] = useState<string[]>([]);
  const [uploadStatus, setUploadStatus] = useState<string[]>([]);
  const [sendingFiles, setSendingFiles] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles((prevFiles) => [...prevFiles, ...newFiles]);
      setCitacoes((prevCitacoes) => [...prevCitacoes, ...new Array(newFiles.length).fill('')]);
      setUploadStatus((prevStatus) => [...prevStatus, ...new Array(newFiles.length).fill('pending')]);
    }
  };

  const handleCitacaoChange = (index: number, value: string) => {
    const updated = [...citacoes];
    updated[index] = value;
    setCitacoes(updated);
  };

  const handleUpload = async () => {
    const newUploadStatus = [...uploadStatus];
    setSendingFiles(true);

    for (let i = 0; i < files.length; i++) {
      if (uploadStatus[i] === 'done') continue;

      newUploadStatus[i] = 'uploading';
      setUploadStatus([...newUploadStatus]);

      const formData = new FormData();
      formData.append('files', files[i]);
      formData.append('citacoes', citacoes[i]);
      formData.append('caminho', './docs/pdf');

      try {
        await fetch('http://localhost:8000/uploadfile', {
          method: 'POST',
          body: formData,
        });
        newUploadStatus[i] = 'done';
      } catch (err) {
        newUploadStatus[i] = 'error';
        console.error(`Erro ao enviar o arquivo ${files[i].name}`, err);
      }

      setUploadStatus([...newUploadStatus]);
    }

    alert('Arquivos enviados com sucesso!');
    setFiles([]);
    setCitacoes([]);
  };

  const handleRemoveFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
    setCitacoes((prev) => prev.filter((_, i) => i !== index));
    setUploadStatus((prev) => prev.filter((_, i) => i !== index));
  };

  const allCitacoesFilled = citacoes.every((c) => c.trim() !== '');

  return (
    <div className="flex flex-row min-h-screen bg-dashboard">
      <DashboardSideBar />

      <main className="flex-1 p-8">
        <h1 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <img
            src="./../../assets/images/dashboard/google-docs.png"
            alt="Ícone de documento"
            className="w-15 h-15"
          />
          Upload de PDF
        </h1>

        <div className="flex flex-col lg:flex-row gap-6 mb-8">

          <UploadButton func={handleFileChange} type="application/pdf"/>

          <UploadTable 
            files={files}
            citacoes={citacoes}
            uploadStatus={uploadStatus}
            sendingFiles={sendingFiles}
            handleCitacaoChange={handleCitacaoChange}
            handleRemoveFile={handleRemoveFile}
          />
        </div>

        {files.length > 0 && (
          <div className="mt-4 flex justify-end">
            <button
              onClick={handleUpload}
              disabled={!allCitacoesFilled}
              className={`px-4 py-2 rounded text-white ${
                allCitacoesFilled ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'
              }`}
            >
              Enviar arquivos
            </button>
          </div>
        )}
      </main>
    </div>
  );
};
