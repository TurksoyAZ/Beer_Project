import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./RandomBeer.scss";

import beerPng from "../img/cheers.png";
import back from "../img/back.png";

function RandomBeer() {
    const [random, setRandom] = useState([]);
    const apiKey = "https://ih-beers-api2.herokuapp.com/beers/random";

    useEffect(() => {
        fetch(apiKey)
            .then((res) => res.json())
            .then((res) => setRandom(res))
            .catch((error) => {
                console.error("Error:", error);
            });
    }, []);

    return (
        <section className="containerRandomBeer">
            <article className="articleRandomBeer">
                <article className="photoDiv">
                    <img src={random.image_url} alt={random.name} />
                </article>
                <h1>{random.name}</h1>
                <h2>{random.tagline}</h2>

                <div>
                    <small> First brewed: </small> <small>{random.first_brewed}</small>
                </div>

                <div>
                    <small>Attenuation level:</small> <small>76</small>
                </div>

                <p>{random.description}</p>

                <span>
                    {" "}
                    <Link to="/">
                        {" "}
                        <img src={back} alt="" />
                    </Link>
                </span>
            </article>

            <article className="toHome">
                <Link className="toHome" to="/">
                    <span>
                        <img src={beerPng} alt="" />
                    </span>
                </Link>
            </article>
        </section>
    );
}

export default RandomBeer;
