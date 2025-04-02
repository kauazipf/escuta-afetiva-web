import CrudDropdown from "./crud-dropdown";
import Icon from "./icon";

interface PacienteItemProps {
    paciente: Paciente
}

export default function PacienteItem({ paciente }: PacienteItemProps) {
    return (
        <div className="flex justify-between mt-2">
            <div className="flex gap-2">
                <Icon name={paciente.plano} />
                <span>{paciente.name}</span>
            </div>

            <div>
                <CrudDropdown />
            </div>
        </div>
    )
}