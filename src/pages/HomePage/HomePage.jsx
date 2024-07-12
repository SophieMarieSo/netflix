import React from 'react';
import Banner from './components/Banner/Banner';

// 1. Banner -> Popular Movie의 첫번째 아이템
// 2. Popular Movie
// 3. Top Rated Movie
// 4. Upcoming Movie
export default function HomePage() {
    return (
        <h1>
            <Banner />
        </h1>
    );
}
