import React, {FC} from 'react';
import {ISimpsons} from "./Simpsons";

export const Simpson:FC<ISimpsons> = ({name,age,surname,photo}) => {
    return (
        <div>
            <h2>Name: {name}</h2>
            {/*<p>Surname: {surname}</p>*/}
            <h2>Age: {age}</h2>
            <img src={photo} width={350} height={450}/>
        </div>
    );
};

export default Simpson ;