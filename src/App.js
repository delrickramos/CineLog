const Equipe = (props) => {
    return (
        <div>
            <Sobre usuario={props.nome} 
            anos={props.idade} 
            proficao={props.cargo}/>
            <Social link={props.link} 
            github={props.github}/>
        </div>
    )
}
 const Sobre = (props) => {
    return(
        <div>
            <h2> OLá, sou a {props.usuario}</h2>
            <p> Tenho {props.anos} anos e trabalho como {props.proficao}</p>
        </div>
    )
 }
 const Social = () => {
    return(
        <div>
            <h3> Redes sociais</h3>
            <ul>
                <li><a href={"https://www.linkedin.com/in/clara"}>LinkedIn</a></li>
                <li><a href="https://www.github.com/clara">GitHub</a></li>
            </ul>
        </div>
    )
 }
export default function App() {
    return (
        <div className="App">
            <h1> Conheça a nossa equipe</h1>
            <Equipe nome="Clara" cargo="Desenvolvedora" idade="19" linkedin="https://www.linkedin.com/in/clara" github="https://www.github.com/clara"/>
            <Equipe nome="Geovanna" cargo="Desenvolvedora" idade="19" linkedin="https://www.linkedin.com/in/geovanna" github="https://www.github.com/geovanna"/>
            <Equipe nome="Delrick" cargo="Desenvolvedor" idade="27" linkedin="https://www.linkedin.com/in/delrick" github="https://www.github.com/delrick"/>
        </div>
    )
}
