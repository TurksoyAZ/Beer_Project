import { Link } from "react-router-dom";
import "./Header.scss";
function Header() {
    return (
        <section className="containerHeader">
            <article className="articleHeaderFirst">
                <div></div>
                <Link to="/toListeBeer">All BeeR</Link>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, non.
                </p>
            </article>
            <article className="articleHeaderSecond">
                <div></div>
                <Link to="/toRandomBeer">Random</Link>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, non.
                </p>
            </article>
        </section>
    );
}

export default Header;
