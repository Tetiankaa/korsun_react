// 1. Описати всю сім'ю сімпсонів (5 персонажів)

import {Simpson} from "../Simpson/Simpson";

const Simpsons = () => {
   const simpsons = [
       {
           id:1,
           name:'Homer',
           surname:'Simpson',
           image:'https://static.wikia.nocookie.net/simpsons/images/3/31/Retired_Homer.png'
       },
       {
           id:2,
           name:'Marge',
           surname:'Simpson',
           image:'https://imagebox.cz.osobnosti.cz/foto/marge-simpson/marge-simpson.jpg'
       },
       {
           id:3,
           name:'Lisa',
           surname:'Simpson',
           image:'https://png.vector.me/files/images/9/3/93031/lisa_simpson_1.jpg'
       },
       {
           id:4,
           name:'Bart',
           surname:'Simpson',
           image:'https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png'
       },
       {
           id:5,
           name:'Maggie',
           surname:'Simpson',
           image:'https://upload.wikimedia.org/wikipedia/en/9/9d/Maggie_Simpson.png'
       },
   ]
    return (
        <div>
            {simpsons.map(simpson => <Simpson key = {simpson.id} simpson = {simpson}/>)}
        </div>
    );
};

export {Simpsons};