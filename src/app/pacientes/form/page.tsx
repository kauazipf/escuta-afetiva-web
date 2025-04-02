"use client";

import { createPacientes } from "@/actions/pacientes-actions";
import NavBar from "@/components/nav-bar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Check } from "lucide-react";
import Link from "next/link";
import { useActionState } from "react";

interface FormState {
    values: {
        Nome: string;
        Plano: string;
        Telefone: string;
        Email: string;
    };
    errors: {
        Nome?: string;
        Plano?: string;
        Telefone?: string;
        Email?: string;
    };
}

const initialState: FormState = {
    values: {
        Nome: "",
        Plano: "",
        Telefone: "",
        Email: ""
    },
    errors: {}
};

export default function PacienteFormPage() {
    const [state, formAction, pending] = useActionState<FormState>(createPacientes, initialState);

    return (
        <>
            <NavBar active="pacientes" />

            <main className="flex justify-center">
                <div className="bg-slate-900 min-w-2/3 m-6 p-6 rounded">
                    <h2 className="text-lg font-bold">Cadastrar Paciente</h2>

                    <form action={formAction} className="space-y-4 mt-4">
                        <div>
                            <Input
                                name="nome"
                                placeholder="Nome do paciente"
                                aria-invalid={state?.errors.Nome ? "true" : "false"}
                                defaultValue={state?.values.Nome}
                            />
                            {state?.errors.Nome && <span className="text-sm text-destructive">{state.errors.Nome}</span>}
                        </div>

                        <div>
                            <Input
                                name="plano"
                                placeholder="Ícone do paciente"
                                aria-invalid={state?.errors.Plano ? "true" : "false"}
                                defaultValue={state?.values.Plano}
                            />
                            {state?.errors.Plano && <span className="text-sm text-destructive">{state.errors.Plano}</span>}
                        </div>

                        <div>
                            <Input
                                name="telefone"
                                placeholder="Ícone do paciente"
                                aria-invalid={state?.errors.Telefone ? "true" : "false"}
                                defaultValue={state?.values.Telefone}
                            />
                            {state?.errors.Telefone && <span className="text-sm text-destructive">{state.errors.Telefone}</span>}
                        </div>
                        
                        <div>
                            <Input
                                name="email"
                                placeholder="Ícone do paciente"
                                aria-invalid={state?.errors.Email ? "true" : "false"}
                                defaultValue={state?.values.Email}
                            />
                            {state?.errors.Email && <span className="text-sm text-destructive">{state.errors.Email}</span>}
                        </div>

                        <div className="flex justify-between">
                            <Button asChild variant="outline">
                                <Link href="/pacientes">
                                    <ArrowLeft />
                                    Cancelar
                                </Link>
                            </Button>

                            <Button type="submit" disabled={pending}>
                                <Check />
                                {pending ? "Salvando..." : "Salvar"}
                            </Button>
                        </div>
                    </form>
                </div>
            </main>
        </>
    );
}
