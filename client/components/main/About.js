import React, { Component } from 'react';
import StyCom, { Break } from '../../style';

class About extends Component {
    render() {
        return (
            <div>
                <Break />
                <StyCom.HomePage id='about'>
                    <h1>About Me</h1>
                    <div>
                        <p>
                            Hi, my name is Kacper and I recently graduated from
                            FullStack Academy. I have a bachelor from Loyola
                            University Chicago in Forensic Science, but I
                            currently work as a senior design engineer at a
                            digital media company.
                        </p>
                        <p>
                            I’ve always been interested in coding and working in
                            the tech industry and my current company was a great
                            stepping stone. Over the years, I got really good at
                            what I do and started wearing many hats in the
                            company: from creating, editing and publishing
                            virtual tours, answering escalated internal tickets
                            and providing customer support. When the pandemic
                            hit, I had time to reflect and think about what I
                            really want to do in the future. I took a risk and
                            enrolled myself in the bootcamp while working full
                            time at my current company and working part time as
                            a self-defense instructor.
                        </p>
                        <p>
                            I’ve learned so much during that time and now I’m
                            looking for a place where I can continue to grow as
                            a developer and reach my full potential. If I'm able
                            to achieve this much with all the stuff on my plate,
                            I know I can bring value and deliver quality work
                            when my work and passion are the same place.
                        </p>
                    </div>
                </StyCom.HomePage>
            </div>
        );
    }
}

export default About;
