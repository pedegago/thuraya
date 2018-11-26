import React, { Component } from "react";
import perfumImg from "../statics/images/bottle.jpg";
import candleImg from "../statics/images/candle.png";

class Products extends Component {
    render = () => {
        return (
            <section className="products">
                <h2>new products</h2>
                <article>
                    <figure>
                        <img src={candleImg} alt="" />
                        <figcaption>
                            <span className="product-name">product name</span>
                            <span>$81.00</span>
                        </figcaption>
                    </figure>
                    <figure>
                        <img src={perfumImg} alt="" />
                        <figcaption>
                            <span className="product-name">product name</span>
                            <span>$81.00</span>
                        </figcaption>
                    </figure>
                </article>
            </section>
        );
    };
}

export default Products;
