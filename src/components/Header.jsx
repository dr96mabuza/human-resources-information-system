import { Link } from "react-router-dom";

export default function Header() {
    return (
        <section  id="header">
            <Link to="/"><h2>HR Management</h2></Link>

            <div id="searchbar">
                <input type="text"/>
                <button type="submit">search</button>
            </div>
        </section>
    );
}