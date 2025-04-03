"use client"

import { createPacientes } from "@/actions/paciente-actions";
import NavBar from "@/components/nav-bar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Check } from "lucide-react";
import Link from "next/link";
import { useActionState } from "react";

const initialState= {
    values:{
        name: "",
        icon: ""
    },
    errors:{
        name: "",
        icons: ""
    }
}

export default function PacienteFormPage(){
    const [state, formAction, pending] = useActionState(createPacientes, initialState)
    
    return (
        <>
           <NavBar active="pacientes" />

            <main className="flex justify-center">
                <div className="bg-purple-800 min-w-2/3 m-6 p-6 rounded">
                    <h2 className="text-lg font-bold">Cadastrar Paciente</h2>

                    <form action={formAction} className="space-y-4 mt-4">
                        
                        <div>
                            <Input 
                                name="name" 
                                placeholder="nome do paciente" 
                                aria-invalid={!!state?.errors.name} 
                            />
                            <span className="text-sm text-destructive">{state?.errors.name}</span>
                        </div>

                        <div>
                            <Input 
                                name="icon" 
                                placeholder="ícone do paciente" 
                                aria-invalid={!!state?.errors.icon}
                             />
                            <span className="text-sm text-destructive">{state?.errors.icon}</span>
                        </div>

                        <div className="flex justify-between">
                            <Button asChild>
                                <Link href="/pacientes">
                                    <ArrowLeft />
                                    Cancelar
                                </Link>
                            </Button>

                            <Button>
                                <Check />
                                Salvar
                            </Button>
                        </div>
                    </form>
                </div>
            </main>
        </>
    )
}