import React from 'react';
import { useQuery } from '@apollo/client';
import './style.css';

//Components
import Menu from '../../components/menu';
import CharacterInfo from '../../components/character-info';

//GraphQL
import {getCharacters} from '../../graphql/queries/Characters';

const Home = () => {
    const {data} = useQuery(getCharacters);

    return (
        <div className='Home'>
            <Menu/>
            <main>
                <section className='section1'>
                    {data && data.characters.results.map(character => (
                        <CharacterInfo 
                            key={character.id}
                            img={character.image}
                            name={character.name}
                        />
                    ))}
                </section>
            </main>
        </div>
    );
};

export default Home;
