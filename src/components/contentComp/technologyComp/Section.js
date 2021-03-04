import React from 'react';
import Article1 from './content/Article1';
import Article2 from './content/Article2';
import Article3 from './content/Article3';

export default function Section() {
    return (
        <section className="contSection">
            <Article1 />
            <Article2 />
            <Article3 />
        </section>
    )
}
