import { redirect } from "next/navigation";

const API_URL = "http://localhost:8080/pacientes";

export async function getPacientes() {
    const response = await fetch(API_URL);
    return await response.json();
}

export async function createPacientes(initialState: any, formData: FormData) {
    const data = {
        Nome: formData.get("nome"),
        Plano: formData.get("plano"),
        Telefone: formData.get("telefone"),
        Email: formData.get("email")
    };

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    };

    const response = await fetch(API_URL, options);

    if (!response.ok) {
        const errors = await response.json();

        return {
            values: {
                Nome: formData.get("nome"),
                Plano: formData.get("plano"),
                Telefone: formData.get("telefone"),
                Email: formData.get("email"),
            },
            errors: {
                Nome: errors.find((error: any) => error.field === "nome")?.message,
                Plano: errors.find((error: any) => error.field === "plano")?.message,
                Telefone: errors.find((error: any) => error.field === "telefone")?.message,
                Email: errors.find((error: any) => error.field === "email")?.message
            }
        };
    }

    redirect("/pacientes");
}
