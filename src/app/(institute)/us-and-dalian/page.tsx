import Header from "@/components/header/Header";
import AboutDut from "./components/AboutDut";
import StatsDut from "./components/StatsDut";
import HistoryDut from "./components/HistoryDut";
import Footer from "@/components/footer/Footer";

import FadeIn from "@/ui/FadeIn";

export default function UsAndDalian() {
    return (
        <section>
            <Header type="image" headline="Мы и далянь" photo="header_dalian.png" />
            <FadeIn>
                <AboutDut />
            </FadeIn>

            <FadeIn>
                <StatsDut />
            </FadeIn>

            <FadeIn>
                <HistoryDut />
            </FadeIn>
            <Footer />
        </section>
    );
}