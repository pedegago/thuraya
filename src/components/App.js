import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Products from "./Products";
import Gallery from "./Gallery";
import Banner from "./Banner";

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <main>
                    <Banner />
                    <Products />
                    <Gallery />
                </main>
                <Footer />
            </div>
        );
    }
}

export default App;