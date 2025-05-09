type UploadTableProps = {
    files: File[];
    citacoes: string[];
    uploadStatus: string[];
    sendingFiles: boolean;
    handleCitacaoChange: (index: number, value: string) => void;
    handleRemoveFile: (index: number) => void;
  };
  
  export const UploadTable = ({
    files,
    citacoes,
    uploadStatus,
    sendingFiles,
    handleCitacaoChange,
    handleRemoveFile,
  }: UploadTableProps) => {
    return (
      <div className="lg:w-1/2 w-full border rounded-sm shadow border-textDash">
        <div className="max-h-80 overflow-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-blue-100">
              <tr>
                <th className="p-2">Título</th>
                <th className="p-2">Tamanho</th>
                <th className="p-2">Citação</th>
                <th className="p-2">Ações</th>
              </tr>
            </thead>
            <tbody>
              {files.length > 0 ? (
                files.map((file, idx) => (
                  <tr key={idx} className="bg-dashboard">
                    <td className="p-2">{file.name}</td>
                    <td className="p-2">{(file.size / 1e6).toFixed(1)} MB</td>
                    <td className="p-2">
                      <input
                        type="text"
                        value={citacoes[idx]}
                        onChange={(e) => handleCitacaoChange(idx, e.target.value)}
                        className="border rounded-sm p-1 w-full bg-dash"
                        placeholder="Digite a citação"
                      />
                    </td>
                    <td className="p-2">
                      {sendingFiles && uploadStatus[idx] === 'uploading' ? (
                        <p className="text-yellow-500">Fazendo upload...</p>
                      ) : uploadStatus[idx] === 'done' ? (
                        <p className="text-green-600">Enviado</p>
                      ) : uploadStatus[idx] === 'error' ? (
                        <p className="text-red-500">Erro no upload</p>
                      ) : (
                        !sendingFiles && (
                          <button onClick={() => handleRemoveFile(idx)} className="text-red-500">
                            Remover
                          </button>
                        )
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="text-center p-4 text-gray-500">
                    Nenhum arquivo selecionado
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  