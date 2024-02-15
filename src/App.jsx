import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

function App() {
    const cards = data.map((dataItem) => {
        return <Card key={dataItem.id} {...dataItem} />;
    });
    return (
        <>
            <Navbar />
            <Hero />
            <section className="cards">{cards}</section>
        </>
    );
}

export default App;
