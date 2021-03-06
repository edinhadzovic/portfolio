import React from 'react';
import { SubTitle, Mark } from './atoms';

export const Change = (props) => {
    let forward, backward;
    let container = React.useRef();
    const [skill, setSkill] = React.useState('');
    const [left, setLeft] = React.useState(0);
    const [finished, setFinish] = React.useState(false);
    const [index, setIndex] = React.useState(0);

    const reset = () => {
        setSkill('');
        setLeft(0);
        setFinish(false);
    }

    const forwardInterval = () => {
        if (props.skills[index].length === skill.length) {
            clearInterval(forward);
            setFinish(true)
            return;
        }

        let join = skill + props.skills[index][skill.length];
        setSkill(join)
        setLeft(container.current.clientWidth);
    }

    const backwardInterval = () => {
        if (skill.length === 0) {
            reset();
            setIndex(index === props.skills.length - 1 ? 0 : index + 1);
            clearInterval(backward);
            return;
        }

        let rmstr = skill.slice(0, -1);
        setSkill(rmstr);
        setLeft(container.current.clientWidth);
    }

    React.useEffect(() => {
        forward = setInterval(forwardInterval, 200);

        if(finished) {
            backward = setInterval(backwardInterval, 100)
        }

        return () => {
            clearInterval(forward);
            clearInterval(backward);
        }
    })

    return (
        <SubTitle ref={container}>{skill} <Mark left={left} finished={finished}/></SubTitle>
    );
}