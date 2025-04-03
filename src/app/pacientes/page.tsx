import { getPacientes } from "@/actions/paciente-actions";
import NavBar from "@/components/nav-bar";
import PacienteItem from "@/components/paciente-item";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

export default async function PacientesPage() {
    const data: Paciente[] = await getPacientes()

    return (
        <>
            <NavBar active="pacientes" />

            <main className="flex justify-center">
                <div className="bg-purple-800 min-w-2/3 m-6 p-6 rounded">
                    <div className="flex justify-between">
                        <h2 className="text-lg font-bold">Pacientes</h2>
                        <Button asChild>
                            <Link href="/pacientes/form">
                                <Plus />
                                Novo paciente
                            </Link>
                        </Button>

                    </div>

                    {data.length == 0 ?
                        <p>Nenhum paciente cadastrado</p> :
                        data.map(paciente => <PacienteItem key={paciente.id} Paciente={paciente} />)
                    }

                </div>
            </main>
        </>
    )
}