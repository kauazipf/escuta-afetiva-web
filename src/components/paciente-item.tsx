import CrudDropdown from "./crud-dropdown";
import Icon from "./icon";

interface PacienteItemProps {
    Paciente: Paciente
}

export default function PacienteItem({ Paciente }: PacienteItemProps) {
    return (
        <div className="flex justify-between mt-2">
            <div className="flex gap-2">
                <Icon name={Paciente.icon} />
                <span>{Paciente.name}</span>
            </div>

            <div>
                <CrudDropdown />
            </div>
        </div>
    )
}