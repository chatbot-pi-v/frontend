type UploadButton = {
    func: (event: React.ChangeEvent<HTMLInputElement>) => void;
    type: string;
};

export const UploadButton = ({func, type}: UploadButton) => {
    return (
        <>
            <div className="lg:w-1/2 w-full">
                <h3 className="text-lg font-medium mb-2">Enviar arquivo do seu computador</h3>

                <label className="block border-2 border-dashed border-textDash p-17 text-center cursor-pointer rounded-lg bg-blue-50">
                <input type="file" accept={type} multiple className="hidden" onChange={func} />
                <p className="text-blue-600 font-medium">Selecione ou arraste arquivos para enviar</p>
                </label>
            </div>
        </>
    )
}