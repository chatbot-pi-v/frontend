import { DashboardSideBar } from "@src/components/atoms/dashboard-sidebar/Dashboard-sidebar";
import { useNavigate } from "react-router";
import { User } from "@src/components/pages/userFormPage/UserFormPage";

const users : User[] = [
  {
      id: "1",
      name: "Malu Moraes",
      username: "maluzikkaaaa",
      email: "euamoataylorswift@gmail.com",
      permissions: []
  },
  {
      id: "2",
      name: "Taylor Swift",
      username: "swift13",
      email: "taylorswift13@email.com",
      permissions: []
  },
];

export const UsersControl = () => {

    const navigate = useNavigate();

    const handleNewUser = () => {
    navigate("/userform");
    };
    const handleEdit = (user : User) => {
        navigate("/userform", { state: { user } });
    };

    return (
        <div className="flex flex-row min-h-screen bg-dashboard">
            <DashboardSideBar />

        <div className="flex-1 p-8">
            <h1 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <img
                src="./../../assets/images/dashboard/group.png"
                alt="Ícone de fone headset"
                className="w-15 h-15"
            />
            Gerenciar usuários
            </h1>
            <div className="flex items-center justify-between w-full">
                <h1 className="text-2xl font-semibold">Usuários</h1>
                <div className="flex items-center space-x-4">
                    <div className="flex items-center border rounded-md px-3 py-1 bg-white shadow-sm">
                        <input type="text" placeholder="Pesquisar" className="outline-none text-sm px-1 py-1" />
                        <img src="./../../assets/images/dashboard/search.svg" alt="Ícone de pesquisa" className="w-5 h-5" />
                    </div>
                <button className="bg-btnGreen hover:bg-green-600 text-white text-sm font-semibold px-4 py-1 rounded-md flex items-center" onClick={handleNewUser}>
                    <span className="text-lg mr-1">+</span> Novo
                </button>
                </div>
            </div>

                <div className="mt-6 bg-white shadow-md rounded-md overflow-hidden">
                    <table className="min-w-full table-auto">
                    <thead className="bg-sidebar text-gray-700 text-sm uppercase">
                        <tr>
                        <th className="px-6 py-3 text-left"></th>
                        <th className="px-6 py-3 text-left">Nome</th>
                        <th className="px-6 py-3 text-left">Usuário</th>
                        <th className="px-6 py-3 text-left">Email</th>
                        <th className="px-6 py-3 text-left"></th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-800 text-sm">   
                        {users.map((user, index) => (
                        <tr key={index} className="even:bg-gridEven hover:bg-dashboard">
                            
                            <td className="px-4 py-3 text-left">
                            <button className="text-white rounded-full p-1 cursor-pointer" onClick={() => handleEdit(user)}>
                                <img src="./../../assets/images/dashboard/bx-pencil.svg" className="w-5 h-5" />
                            </button>
                            </td>
                            <td className="px-6 py-3">{user.name}</td>
                            <td className="px-6 py-3">{user.username}</td>
                            <td className="px-6 py-3">{user.email}</td>
                            <td className="px-6 py-3 text-center">
                            <button className="text-white rounded-full p-1 cursor-pointer">
                                <img src="./../../assets/images/dashboard/trash.svg" className="w-6 h-6" />
                            </button>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                    </table>
                </div>
                <div className="flex justify-center items-center gap-2 p-4 text-sm">
                    <button className="px-2 py-1 hover:bg-sidebar rounded-md font-bold cursor-pointer">
                        <img src="./../../assets/images/dashboard/bx-chevron-left.svg" alt="Ícone de seta para direita" className="w-5 h-5" />
                    </button>
                    {[1, 2, 3, 4, 5, 6].map((n) => (
                    <button key={n} className="px-2.5 py-1 border border-ash rounded-md hover:bg-sidebar shadow-md cursor-pointer">
                        {n}
                    </button>
                    ))}
                    <button className="px-2 py-1 hover:bg-sidebar rounded-md font-bold cursor-pointer">
                        <img src="./../../assets/images/dashboard/bx-chevron-right.svg" alt="Ícone de seta para direita" className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    )
}