import Link from "next/link";

interface NavBarProps {
    active: "pacientes" | "planos" | "calendario"
}

export default function NavBar(props: NavBarProps) {
    const { active } = props;
    const activeClass = "border-b-4 border-primary"

    const links = [
        { text: "Calendario", href: "/calendario" },
        { text: "Planos", href: "/planos" },
        { text: "Pacientes", href: "/pacientes" },
    ]

    return (
        <>
            <nav className="flex justify-between items-center bg-purple-900 p-6">
                <h2 className="text w-3xl font-bold">Escuto com Afeto</h2>
                <ul className="flex gap-4">
                    {links.map(link =>
                        <li key={link.text} className={active === link.text ? activeClass : ""} ><Link href={link.href} >{link.text}</Link></li>)
                    }
                </ul>
                <img className="size-12 rounded-full" src="logo.png" alt="" />
            </nav>
        </>
    )
}