import { useLocation } from "react-router";
import { useEffect, useState } from "react";
import { DashboardSideBar } from "@src/components/atoms/dashboard-sidebar/Dashboard-sidebar";
import { useNavigate } from "react-router";
import { InputDash } from "@src/components/atoms/input-dash/Input-dash";
import { PermissionCheckbox } from "@src/components/atoms/checkbox-dash/Checkbox-dash";


export type User = {
  id: string;
  name: string;
  username: string;
  email: string;
  permissions: string[];
};

export const UserFormPage = () => {
  const location = useLocation();
  const user = location.state?.user as User | undefined;

  const [formData, setFormData] = useState({
    id: "",
    name: "",
    username: "",
    email: "",
    password: "",
    permissions: [] as string[],
  });

  useEffect(() => {
    if (user) {
      setFormData({
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email,
        password: "",
        permissions: user.permissions || [],
      });
    }
  }, [user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (user) {
      console.log("Atualizando usuário:", formData);
    } else {
      console.log("Criando novo usuário:", formData);
    }
  };

    const permissionsList = [
    { label: "Gerenciar usuários", value: "manage_users" },
    { label: "Upload de PDF", value: "upload_pdfs" },
    { label: "Upload de imagem", value: "upload_images" },
    { label: "Upload de áudio", value: "upload_audio" },
    ];

  const navigate = useNavigate();

  return (
    <div className="flex flex-row bg-dashboard overflow-hidden">
        <DashboardSideBar />
        <div className="p-5 flex-1 w-full max-h-screen overflow-auto">
        <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-ash mb-4 cursor-pointer"
            >
            <img
                src="./../../assets/images/dashboard/bx-chevron-left.svg"
                alt="Ícone de seta para esquerda"
                className="w-5 h-5"
            />
            <span className="text-base">Voltar</span>
        </button>
        <h1 className="text-2xl font-bold mb-4">{user ? "Editar usuário" : "Novo usuário"}</h1>
        <div className="border border-gray-300 rounded-md p-4 bg-white shadow-md w-full">

        <div className="flex flex-col gap-6">
        <div>
            <label className="font-semibold text-lg">Dados Cadastrais</label>
        </div>

        <div className="grid grid-cols-2 gap-4">
            <InputDash label="Id" name="id" value={formData.id} onChange={handleChange} readOnly />
            <InputDash label="Nome de usuário" name="username" value={formData.username} onChange={handleChange} />
            <InputDash label="Nome" name="name" value={formData.name} onChange={handleChange} />
            <InputDash label="Senha" name="password" type="password" value={formData.password} onChange={handleChange} />
            <InputDash label="E-mail" name="email" value={formData.email} onChange={handleChange} />
        </div>

        <div className="flex flex-col gap-2 mt-4">
            <label className="font-semibold text-lg">Permissões</label>
            {permissionsList.map((perm) => (
                <PermissionCheckbox
                key={perm.value}
                label={perm.label}
                value={perm.value}
                checked={formData.permissions.includes(perm.value)}
                onChange={(checked, value) => {
                    setFormData((prev) => ({
                    ...prev,
                    permissions: checked
                        ? [...prev.permissions, value]
                        : prev.permissions.filter((p) => p !== value),
                    }));
                }}
                />
            ))}
        </div>

        <button
            onClick={handleSubmit}
            className="mt-1 px-3 py-2 bg-btnGreen hover:bg-green-700 text-white font-medium rounded w-fit flex items-center gap-2 cursor-pointer"
        >
            <img src="/assets/images/dashboard/bx-save.svg" alt="Salvar" className="w-5 h-5" />
            Salvar
        </button>
        </div>

        </div>
        </div>
    </div>
  );
};
