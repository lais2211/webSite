import { TypeAnimation } from 'react-type-animation';

const TextEffect = () => {
    return (
        <TypeAnimation
            sequence={[

                'Web & Mobile',
                1500,
                'QA',
                1500,
                'Devops',
                1500,
                'Backend',
                1500,
            ]}

            speed={50}
            className='text-[2rem] md:text-[3rem] text-[#55e6a5] font-bold uppercase'
            repeat={Infinity}
        />
    );
};
export default TextEffect;