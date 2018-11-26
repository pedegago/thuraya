import React, { Component } from "react";
import Instafeed from "react-instafeed";

class Gallery extends Component {
    render = () => {
        return (
            <section className="gallery">
                <h2>gallery</h2>
                <article id="instafeed" onClick={this.onClickImage}>
                    <Instafeed
                        template={
                            `<figure>
                                <img src="{{image}}" alt="{{caption}}"/>
                                <figcaption id="img-{{id}}">
                                    <span>{{likes}}</span>
                                    <span>{{comments}}</span>
                                </figcaption>
                            </figure>`
                        }
                        userId="1468270418"
                        accessToken="1468270418.81beb5f.34962827f2a045ce9de8eaf89658025d"
                    />
                </article>
            </section>
        );
    };
}

export default Gallery;
