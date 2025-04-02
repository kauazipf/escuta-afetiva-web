import CrudDropdown from "./crud-dropdown";
import Icon from "./icon";

interface PacienteItemProps {
    paciente: Category
}

export default function PacienteItem({ paciente }: PacienteItemProps) {
    return (
        <div className="flex justify-between mt-2">
            <div className="flex gap-2">
                <Icon name={paciente.icon} />
                <span>{paciente.name}</span>
            </div>

            <div>
                <CrudDropdown />
            </div>
        </div>
    )
}