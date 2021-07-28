import React from 'react';
import './StoryReel.css';
import Story from './Story';

function StoryReel() {
    return (
        <div className="storyReel">
           <Story image="https://i.pinimg.com/originals/47/6c/2e/476c2e56a7d91def1054f5b7770cb24d.jpg"
                title="Ali Abbasov" /> 
           <Story image="https://i.pinimg.com/originals/30/93/cb/3093cb01d9de2d125fda8ba5e3e41946.jpg"
                title="John Doe" /> 
           <Story image="https://i.pinimg.com/originals/83/64/66/83646654668bf9ae412f45bb2e417ddf.jpg"
                title="Max Wagner" /> 
           <Story image="https://i.pinimg.com/originals/9c/57/69/9c5769f09d26de7b31ee6012098b5dcd.jpg"
                title="Kaitlyn Mcgee" /> 
           <Story image="https://i.pinimg.com/originals/79/b2/f0/79b2f08b70ac3a6d6c59c7a04ecf013d.jpg"
                title="Jack Parker" /> 
        </div>
    )
}

export default StoryReel
