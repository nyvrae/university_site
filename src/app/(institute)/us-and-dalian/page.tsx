import Header from "@/components/header/Header";
import AboutDpu from "./components/AboutDpu";
import StatsDpu from "./components/StatsDpu";
import HistoryDpu from "./components/HistoryDpu";
import Footer from "@/components/footer/Footer";

export default function UsAndDalian() {
    return (
        <section>
            <Header type="image" headline="Мы и далянь" photo="header_dalian.png" />
            <AboutDpu />
            <StatsDpu />
            <HistoryDpu />
            <Footer />
        </section>
    );
}