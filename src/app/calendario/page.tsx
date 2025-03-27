import NavBar from "../../components/navbar";

export default function CalendarioPage(){
    return(
        <>
            <NavBar active="calendario"/>

            <main className="flex justify-center">
                <div className="bg-slate-900 min-w-2/3 m-6 p-6 rounded">
                    <h2 className="text-lg font-bold"> Calendario </h2>
                </div>

            </main>
        </>
    )
}