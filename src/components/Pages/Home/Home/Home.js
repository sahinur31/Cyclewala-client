import React from 'react';
import Banner from '../Banner/Banner';
import ClientReview from '../ClientReview/ClientReview';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Products></Products>
            <ClientReview></ClientReview>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;