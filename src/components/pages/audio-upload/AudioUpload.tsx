import { DashboardSideBar } from '@src/components/atoms/dashboard-sidebar/Dashboard-sidebar';
import { UploadButton } from '@src/components/atoms/upload-button/Upload-button';
import { UploadTable } from '@src/components/atoms/upload-table/Upload-table';
import { useState } from 'react';

export const AudioUpload = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [citacoes, setCitacoes] = useState<string[]>([]);
  const [uploadStatus, setUploadStatus] = useState<string[]>([]);
  const [sendingFiles, setSendingFiles] = useState(false);
  const [links, setLinks] = useState<{ link: string; quote: string }[]>([]);
  const [newLink, setNewLink] = useState('');
  const [newQuote, setNewQuote] = useState('');

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
      formData.append('caminho', './docs/audio');

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
            src="./../../assets/images/dashboard/headphone.png"
            alt="Ícone de fone headset"
            className="w-15 h-15"
          />
          Upload de áudio
        </h1>

        <div className="flex flex-col lg:flex-row gap-6 mb-8">

          <UploadButton func={handleFileChange} type="audio/*"/>

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

        <div className="flex items-center my-8">
          <div className="flex-grow h-px bg-blue-300" />
          <span className="mx-4 text-textDash font-extrabold">OU</span>
          <div className="flex-grow h-px bg-blue-300" />
        </div>

        <h1 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <img
            src="./../../assets/images/dashboard/link.png"
            alt="Ícone de link"
            className="w-15 h-15"
          />
          Enviar link
        </h1>

        <div className="flex flex-col lg:flex-row gap-6 mb-8">
          <div className="lg:w-1/2 w-full space-y-3">
            <input
              type="text"
              placeholder="Link"
              value={newLink}
              onChange={(e) => setNewLink(e.target.value)}
              className="block w-full p-2 rounded-sm bg-dashImput"
            />
            <input
              type="text"
              placeholder="Citação"
              value={newQuote}
              onChange={(e) => setNewQuote(e.target.value)}
              className="block w-full p-2 rounded-sm bg-dashImput"
            />
            <button
              type="button"
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={() => {
                if (newLink && newQuote) {
                  setLinks([...links, { link: newLink, quote: newQuote }]);
                  setNewLink('');
                  setNewQuote('');
                }
              }}
            >
              Adicionar
            </button>
          </div>

          <div className="lg:w-1/2 w-full border rounded-sm shadow border-textDash">
            <div className="max-h-80 overflow-auto">
              <table className="w-full text-sm text-left">
                <thead className="bg-blue-100">
                  <tr>
                    <th className="p-2">Link</th>
                    <th className="p-2">Citação</th>
                    <th className="p-2">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {links.length > 0 ? (
                    links.map((item, idx) => (
                      <tr key={idx} className="bg-dashboard">
                        <td className="p-2 max-w-[200px] truncate">{item.link}</td>
                        <td className="p-2">
                          <input
                            type="text"
                            value={item.quote}
                            onChange={(e) => {
                              const updated = [...links];
                              updated[idx].quote = e.target.value;
                              setLinks(updated);
                            }}
                            className="border p-1 w-full rounded-sm bg-dashboard"
                          />
                        </td>
                        <td className="p-2">
                          <button
                            onClick={() => setLinks((prev) => prev.filter((_, i) => i !== idx))}
                            className="text-red-500"
                          >
                            Remover
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={3} className="text-center p-4 text-gray-500">
                        Nenhum link adicionado
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {links.length > 0 && (
          <div className="mt-4 flex justify-end">
            <button
              onClick={() => {
                fetch('http://localhost:8000/uploadlink', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify(links),
                });
                alert('Links enviados com sucesso!');
                setLinks([]);
              }}
              disabled={!links.every((l) => l.link.trim() !== '' && l.quote.trim() !== '')}
              className={`px-4 py-2 rounded text-white ${
                links.every((l) => l.link.trim() !== '' && l.quote.trim() !== '')
                  ? 'bg-blue-600 hover:bg-blue-700'
                  : 'bg-gray-400 cursor-not-allowed'
              }`}
            >
              Enviar links
            </button>
          </div>
        )}
      </main>
    </div>
  );
};
