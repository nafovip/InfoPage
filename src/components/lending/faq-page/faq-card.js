import * as React from "react"
import { Fade } from "react-reveal";
import Typist from 'react-typist';

const Card = (props) => {
    return (
        <div class="faq-page__description">
            <p class="faq-page__description_text faq-page__description_text1"><Fade duration={2000}>{props.question}</Fade></p>
            <p class="faq-page__description_text faq-page__description_text2">{props.inView && !props.isTypingComplete ? (
                <Typist avgTypingDelay={10} onTypingDone={props.handleTypingDone}
                    startDelay={100} cursor={{ show: false }}>{props.answer}</Typist>):(<>{props.answer}</>)}</p>
        </div>
    )
}
export default Card