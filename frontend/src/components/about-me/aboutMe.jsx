// Modules
import { useState } from 'react';

// Assets
import verified from '../../assets/verified.svg'
import saluteGif from '../../assets/emoji/salute.gif'
import mindBlowGif from '../../assets/emoji/mind-blow.gif'


function AboutMe({ aboutMe }) {
    const [currentEmoji, setCurrentEmoji] = useState(saluteGif)

    return (
        <section className='about-me'>
            <div className='about-me-emoji' onMouseEnter={() => setCurrentEmoji(mindBlowGif)} onMouseLeave={() => setCurrentEmoji(saluteGif)}>
                <img src={currentEmoji} alt="Emoji"/>
            </div>

            <div className='about-me-profil'>
                <div>
                    <div className='about-me-profil-name'>
                        <h1>Samuel</h1>
                        <img src={verified} alt="Icône d'encoche bleue indiquant la validation" />
                    </div>
                    <span>Guadeloupe, France</span>
                </div>
                
                <hr/>
                <p>{ aboutMe }</p>
            </div>
        </section>
    );
}

export default AboutMe;