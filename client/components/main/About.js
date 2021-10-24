import React, { Component } from 'react';
import StyCom, { Break } from '../../style';

class About extends Component {
    render() {
        return (
            <StyCom.HomePage id='about'>
                <Break />
                <h1>About Me</h1>
                <div>
                    <p>
                        My name is Kacper and I recently graduated from
                        FullStack Academy, which is an online bootcamp. My
                        bachelor from Loyola University Chicago is in Forensic
                        Science, but I currently work as a senior design
                        engineer at a digital media company.
                    </p>
                    <p>
                        I’ve always been interested in coding and working in the
                        tech industry and my current company was a great
                        stepping stone. And over the years, I got really good at
                        what I do and started wearing many hats in the company
                        from publishing virtual tours to providing customer
                        support that it wasn’t until the pandemic hit that I
                        really had a time to reflect and think about what I
                        really want to do in the future. I took a risk and
                        enrolled myself in the bootcamp while working full time
                        at my current company and working part time as a
                        self-defense instructor.
                    </p>
                    <p>
                        I’ve learned so much in these past 7 months and I’m now
                        looking for a place where I can reach my potential and
                        continue to grow as a developer. If I’m able to achieve
                        this much with all the stuff on my plate, I know I can
                        bring value and deliver quality work when my work and
                        passion are the same place.
                    </p>
                </div>
            </StyCom.HomePage>
        );
    }
}

export default About;
