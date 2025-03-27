import Link from "next/link";

interface NavBarProps{
    active: "agenda" | "calendario" | "planos"
}

export default function NavBar(props: NavBarProps){
    const { active } =  props
    const activeClass = "border-b-4 border-white-900 pb-2"

    const links = [
        {text: "Calendario", href: "/calendario"},
        {text: "Planos", href: "/planos"},
        {text: "Agenda", href: "/agenda"},
    ]

    return(
        <nav className="flex justify-between items-center bg-violet-600 p-6">
                <h1 className="text-3xl font-bold"></h1>
                <ul className="flex gap-4">
                    {links.map((link) => {
                        return (
                            <li className={active === link.text? activeClass : ""}>
                                <Link href={link.href}> {link.text} </Link>
                            </li>
                        )
                    } )}
                </ul>
                <img className="size-12 rounded-full" src="logo.png" alt="" />
            </nav>
    )
}