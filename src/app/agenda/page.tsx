import NavBar from "../../components/navbar";

export default function CategoriesPage(){
    return(
        <>
            <NavBar active="agenda" />

            <main className="flex justify-center">
                <div className="bg-purple-900 min-w-2/3 m-6 p-6 rounded">
                    <h2 className="text-lg font-bold"> Pacientes </h2>
                </div>

            </main>
        </>
    )
}