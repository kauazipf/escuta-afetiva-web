import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { Ellipsis, Pencil, Trash2 } from "lucide-react"

export default function CrudDropdown() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger><Ellipsis /></DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>Opções</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem><Pencil />Editar</DropdownMenuItem>
                <DropdownMenuItem><Trash2 />Deletar</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}