import React, { useState, useSyncExternalStore } from 'react';
import quotes from './assets/quotes.svg'
import quotestext from './quotes.json'



const QuoteBox = () => {

    const random = Math.floor(Math.random() * quotestext.length);
    const [index, setIndex] = useState(random);
    
    const changeText = () => {
        const newRandom = Math.floor(Math.random() * quotestext.length);
        setIndex(newRandom);
    }

    const colors = [
        "#696ec2",
        "#c5699d",
        "#e79687",
        "#e5cd9e",
        "#cfebc6",
      ];
      
    const randomColor = Math.floor(Math.random() * colors.length);
    document.body.style = `background: ${colors[randomColor]}`;

    return (
        <div className='background'>
            <div className='square'>
            <div className='top'>
                <svg className='quotes' version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                width="4rem" height="4rem" viewBox="0 0 351.128 351.128" style={{fill: colors[randomColor]}}
                xml:space="preserve">
                <g>
                    <path d="M72.326,147.33c4.284-26.928,37.944-55.692,64.26-56.304c1.836,0,3.672-0.612,4.896-1.836
                        c1.224-0.612,2.448-1.224,3.06-3.06c9.18-17.136,4.284-30.6-11.016-41.616c-17.748-12.852-45.9,0-59.976,11.628
                        C38.054,85.518,1.946,136.313,3.782,184.662c-6.12,32.437-4.896,67.32,4.284,96.084c6.12,18.36,23.868,27.54,42.228,28.764
                        c18.36,1.225,56.304,6.732,72.828-4.283c16.524-11.017,17.748-32.437,19.584-50.796c1.836-20.196,7.344-58.141-9.792-74.053
                        C115.778,165.078,66.818,181.602,72.326,147.33z"/>
                    <path d="M274.286,147.33c4.284-26.928,37.943-55.692,64.26-56.304c1.836,0,3.672-0.612,4.896-1.836
                        c1.225-0.612,2.448-1.224,3.061-3.06c9.18-17.136,4.284-30.6-11.016-41.616c-17.748-12.852-45.9,0-59.977,11.628
                        c-35.496,29.376-71.604,80.172-69.768,128.52c-6.12,32.437-4.896,67.32,4.283,96.084c6.12,18.36,23.868,27.54,42.229,28.764
                        c18.36,1.225,56.304,6.732,72.828-4.283c16.523-11.017,17.748-32.437,19.584-50.796c1.836-20.196,7.344-58.141-9.792-74.053
                        C317.738,165.078,268.166,181.602,274.286,147.33z"/>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                </svg>
                <p className='text' style={{color: colors[randomColor]}}>{quotestext[index].quote}</p>
            </div>
            <p className='autor' style={{color: colors[randomColor]}}>{quotestext[index].author}</p>
            <button className='round' style={{background: colors[randomColor]}} onClick={changeText}> > </button>
        </div>
    </div>
    );
};

export default QuoteBox;