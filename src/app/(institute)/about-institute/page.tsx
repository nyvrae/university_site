import Header from "@/components/header/Header";
import Info from "./components/Info";
import Management from "./components/Management";
import Feedback from "./components/Feedback";
import Footer from "@/components/footer/Footer";

import FadeIn from "@/ui/FadeIn";

export default function AboutInstitute() {
    return (
        <section>
            <Header type="image" headline="Институт" photo="header_institute.png" />
            <FadeIn>
                <Info />

            </FadeIn>
            <FadeIn>
                <Management />
            </FadeIn>

            <FadeIn>
                <Feedback />
            </FadeIn>
            <Footer />
        </section>
    );
}