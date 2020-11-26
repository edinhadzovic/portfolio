import React from 'react';
import { SubTitle, Mark } from './atoms';

export const Change = (props) => {
    let forward, backward;
    const [skill, setSkill] = React.useState('');
    const [left, setLeft] = React.useState(0);
    const [finished, setFinish] = React.useState(false);
    const [index, setIndex] = React.useState(0);

    const forwardInterval = () => {
        if (props.skills[index].length === skill.length) {
            clearInterval(forward);
            setFinish(true)
            return;
        }

        let join = skill + props.skills[index][skill.length];
        console.log(join);
        setSkill(join)
        setLeft(join.length * 15);
    }

    const backwardInterval = () => {
        if (skill.length === 0) {
            clearInterval(backward);
            setFinish(false);
            setIndex(index === props.skills.length ? 0 : index + 1);
            forward = setInterval(forwardInterval, 300);
            return;
        }

        let rmstr = skill.slice(0, -1);
        setSkill(rmstr);
        setLeft(rmstr.length * 15);
    }

    React.useEffect(() => {
        forward = setInterval(forwardInterval, 300);

        if(finished) {
            backward = setInterval(backwardInterval, 200)
        }

        return () => {
            clearInterval(forward);
            clearInterval(backward);
        }
    })

    return (
        <SubTitle>{skill} <Mark left={left} finished={finished}/></SubTitle>
    );
}