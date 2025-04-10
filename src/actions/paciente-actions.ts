import { redirect } from "next/navigation";

const API_URL = "http://localhost:8080/pacientes";

export async function getPacientes() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error("Erro ao buscar pacientes");
        }
        return await response.json();
    } catch (error) {
        console.error("Erro ao obter pacientes:", error);
        return [];
    }
}

interface Paciente {
    name: string | null;
    email: string | null;
    telefone: string | null;
    planos: string | null;
}

interface FormErrors {
    name?: string;
    email?: string;
    telefone?: string;
    planos?: string;
}

export async function createPacientes(initialState: any, formData: FormData) {
    const data: Paciente = {
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        telefone: formData.get("telefone") as string,
        planos: formData.get("planos") as string
    };

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    };

    try {
        const response = await fetch(API_URL, options);

        if (!response.ok) {
            const errorsArray = await response.json();
            const errors: FormErrors = {
                name: errorsArray.find((error: { field: string }) => error.field === "name")?.message,
                email: errorsArray.find((error: { field: string }) => error.field === "email")?.message,
                telefone: errorsArray.find((error: { field: string }) => error.field === "telefone")?.message,
                planos: errorsArray.find((error: { field: string }) => error.field === "planos")?.message
            };
            return {
                values: data,
                errors
            };
        }

        redirect("/pacientes");
    } catch (error) {
        console.error("Erro ao criar paciente:", error);
        return {
            values: data,
            errors: {
                name: "Erro ao criar paciente",
                email: "",
                planos: "",
                telefone: ""
            }
        };
    }
}
