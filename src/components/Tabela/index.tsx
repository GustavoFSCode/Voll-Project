import { Paper, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow } from "@mui/material";
import IConsulta from "../../types/IConsulta";
import styled from "@emotion/styled";

const CelularEstilizada = styled(TableCell)(() => ({
    [`&.${tableCellClasses.head}`]: {
        color: "var(--azul-escuro)",
        fontSize: 18,
        fontWeight: 700,
        fontFamily: "var(--fonte-principal)"
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 16,
        fontFamily: "var(--fonte-principal)"
    }
}))

const LinhaEstilizada = styled(TableRow)(() => ({
    [`&:nth-of-type(odd)`]: {
        backgroundColor: "var(--cinza-claro)",
        align: "right"
    }
}))

function Tabela ({consultas} : {consultas: IConsulta[] | null}){
    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="tabela customizada">
                    <TableHead>
                        <TableRow>
                            <CelularEstilizada>Data</CelularEstilizada>
                            <CelularEstilizada>Horário</CelularEstilizada>
                            <CelularEstilizada>Profissional</CelularEstilizada>
                            <CelularEstilizada>Especialidade</CelularEstilizada>
                            <CelularEstilizada>Paciente</CelularEstilizada>
                            <CelularEstilizada>Modalidade</CelularEstilizada>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {consultas?.map((linha) => {
                            return (
                            <LinhaEstilizada>
                                <CelularEstilizada component = "th" scope="row">{new Date(linha.data).toLocaleDateString()}</CelularEstilizada>
                                <CelularEstilizada>{linha.horario}</CelularEstilizada>
                                <CelularEstilizada>{linha.profissional[0].nome}</CelularEstilizada>
                                <CelularEstilizada>{linha.profissional[0].especialidade}</CelularEstilizada>
                                <CelularEstilizada>{linha.paciente}</CelularEstilizada>
                            <CelularEstilizada>{linha.modalidade}</CelularEstilizada>
                        </LinhaEstilizada>
                            )
                        })}
                        
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default Tabela;