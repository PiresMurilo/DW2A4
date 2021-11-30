import {RepositoryItem} from './RepositoryItem';
import '../styles/repositories.scss';

const repository = {
    name: "Atividade",
    description: "Descrição da atividade",
    link: "https://github.com/PiresMurilo/DW2A4"
}

export function RepositoryList (){
    return (
        <section className="repository-list">
        <ul>
            <RepositoryItem repository={repository}/>
            <RepositoryItem repository={repository}/>
            <RepositoryItem repository={repository}/>
            <RepositoryItem repository={repository}/>
            
        </ul>
        </section>
    )
}