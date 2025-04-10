"use client";

import { createPacientes } from "@/actions/paciente-actions";
import NavBar from "@/components/nav-bar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Check } from "lucide-react";
import Link from "next/link";
import { useActionState } from "react";

const initialState = {
    values: {
        name: "",
        email: "",
        telefone: "",
        planos: ""
    },
    errors: {
        name: "",
        email: "",
        telefone: "",
        planos: ""
    }
};

export default function PacienteFormPage() {
    const [state, formAction, pending] = useActionState(createPacientes, initialState);

    return (
        <>
            <NavBar active="pacientes" />

            <main className="flex justify-center">
                <div className="bg-purple-800 min-w-2/3 m-6 p-6 rounded">
                    <h2 className="text-lg font-bold">Cadastrar Paciente</h2>

                    <form action={formAction} className="space-y-4 mt-4">
                        {/* Campo Nome */}
                        <div>
                            <Input
                                name="name"
                                placeholder="Nome do paciente"
                                aria-invalid={!!state?.errors.name}
                            />
                            <span className="text-sm text-destructive">{state?.errors.name}</span>
                        </div>

                        {/* Campo Email */}
                        <div>
                            <Input
                                name="email"
                                type="email"
                                placeholder="Email do paciente"
                                aria-invalid={!!state?.errors.email}
                            />
                            <span className="text-sm text-destructive">{state?.errors.email}</span>
                        </div>

                        {/* Campo Telefone */}
                        <div>
                            <Input
                                name="telefone"
                                type="tel"
                                placeholder="Telefone do paciente"
                                aria-invalid={!!state?.errors.telefone}
                            />
                            <span className="text-sm text-destructive">{state?.errors.telefone}</span>
                        </div>

                        {/* Campo Planos */}
                        <div>
                            <Input
                                name="planos"
                                placeholder="Planos de saúde do paciente"
                                aria-invalid={!!state?.errors.planos}
                            />
                            <span className="text-sm text-destructive">{state?.errors.planos}</span>
                        </div>

                        {/* Botões */}
                        <div className="flex justify-between">
                            <Button asChild>
                                <Link href="/pacientes">
                                    <ArrowLeft />
                                    Cancelar
                                </Link>
                            </Button>

                            <Button disabled={pending}>
                                <Check />
                                Salvar
                            </Button>
                        </div>
                    </form>
                </div>
            </main>
        </>
    );
}