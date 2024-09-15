import useFetch from "./useFetch";
import IConsulta from "./types/IConsulta";

const useDadosConsulta = () => {
    return useFetch<IConsulta[]>({url: 'consultas'});
}

export default useDadosConsulta