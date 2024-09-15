import './App.css';
import Avaliacao from './components/Avaliacao';
import Botao from './components/Botao';
import Cabecalho from './components/cabecalho';
import Conatiner from './components/Container';
import Grafico from './components/Grafico';
import Rodape from './components/Rodape';
import Subtitulo from './components/Subtitulo';
import Tabela from './components/Tabela';
import Titulo from './components/Titulo';
import useDadosConsulta from './useDadosConsulta';
import useDadosProfissional from './useDadosProfissional';

function App() {
  const {dados: consultas, erro: consultasErro} = useDadosConsulta();
  const { dados: profissionais, erro: profissionaisErro } = useDadosProfissional();

  if(consultasErro || profissionaisErro) console.log("Ocorreu um erro na requisição")

  return (
    <>
      <Cabecalho />
      <Conatiner>
        <Titulo>Área Administrativa</Titulo>  
        <Botao>Cadastrar Especialista</Botao>
        <Titulo imagem='consulta'>Consulta do Dia</Titulo>
        <Tabela consultas={consultas}/>
        <Titulo imagem='grafico'>Consultas mensais por especialistas</Titulo>
        <Subtitulo>Dezembro/22</Subtitulo>
        <Grafico consultas={consultas} profissionais={profissionais}/>
        <Titulo imagem='avaliacao'>Avaliações de especialistas</Titulo>
        <Avaliacao profissionais={profissionais}/>
      </Conatiner>
      <Rodape/>  
    </>
  );
}

export default App;
