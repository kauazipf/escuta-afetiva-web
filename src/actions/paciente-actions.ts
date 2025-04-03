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
    icon: string | null;
}

interface FormErrors {
    name?: string;
    icon?: string;
}

export async function createPacientes(initialState: any, formData: FormData) {
    const data: Paciente = {
        name: formData.get("name") as string,
        icon: formData.get("icon") as string
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
                icon: errorsArray.find((error: { field: string }) => error.field === "icon")?.message
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
                icon: ""
            }
        };
    }
}
