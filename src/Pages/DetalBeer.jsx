import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./DetalBeer.scss";
import beerPng from "../img/cheers.png";
import back from "../img/back.png";

function DetalBeer() {
    const [creat, setCreat] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const fetchDetail = () => {
            fetch(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
                .then((res) => res.json())
                .then((res) => setCreat(res))
                .catch((error) => {
                    console.error("Error", error);
                });
        };
        fetchDetail();
    }, [id]);

    return (
        <section className="containerDetalBeer">
            <article className="articleDetalBeer">
                <article className="photoDiv">
                    <img src={creat.image_url} alt={creat.name} />
                </article>
                <h1>{creat.name}</h1>
                <h2>{creat.tagline}</h2>

                <div>
                    <small> First brewed: </small> <small>{creat.first_brewed}</small>
                </div>

                <div>
                    <small>Attenuation level:</small> <small>76</small>
                </div>

                <p>{creat.description}</p>

                <span>
                    {" "}
                    <Link to="/toListeBeer">
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

export default DetalBeer;
