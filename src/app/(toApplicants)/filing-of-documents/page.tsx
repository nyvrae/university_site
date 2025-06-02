import Header from "@/components/header/Header";
import Main from "./components/Main";
import Footer from "@/components/footer/Footer";

import FadeIn from "@/ui/FadeIn";

export default function Filing() {
    return (
        <section>
            <Header type="image" headline="Подача документов" photo="header_filing.png" />
            <FadeIn>
                <Main />
            </FadeIn>
            <Footer />
        </section>
    );
}