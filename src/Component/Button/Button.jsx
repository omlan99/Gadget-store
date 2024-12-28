import React from 'react';

const Button = ({btn}) => {
    return (
        <div>
             <button className="px-7 py-4 bg-white font-bold text-xl  text-[#9538E2] rounded-3xl">{btn}</button>
        </div>
    );
};

export default Button;