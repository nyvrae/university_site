import Header from "@/components/header/Header";
import AboutDut from "./components/AboutDut";
import StatsDut from "./components/StatsDut";
import HistoryDut from "./components/HistoryDut";
import Footer from "@/components/footer/Footer";

export default function UsAndDalian() {
    return (
        <section>
            <Header type="image" headline="Мы и далянь" photo="header_dalian.png" />
            <AboutDut />
            <StatsDut />
            <HistoryDut />
            <Footer />
        </section>
    );
}