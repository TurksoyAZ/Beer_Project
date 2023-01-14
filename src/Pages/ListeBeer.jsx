import { Link } from "react-router-dom";
import "./ListeBeer.scss";

import beerPng from "../img/cheers.png";

function ListeBeer({ data }) {
    console.log(data);

    return (
        <section className="containerListeBeer">
            <article className="articleBeerContainer">
                {data &&
                    data.map((e, i) => {
                        return (
                            <article key={i}>
                                <div className="divFoto">
                                    <img src={e.image_url} alt={e.name} />
                                </div>

                                <div className="divInfo">
                                    <h1>{e.name}</h1>
                                    <h3>{e.tagline}</h3>
                                    <h4>Created by: {e.name}</h4>

                                    <Link to={`/detal/${e._id}`}> Details</Link>
                                </div>
                            </article>
                        );
                    })}
            </article>

            <article className="toHome">
                <Link className="toHome" to="/">
                    {" "}
                    <span>
                        <img src={beerPng} alt="" />
                    </span>{" "}
                </Link>
            </article>
        </section>
    );
}

export default ListeBeer;
