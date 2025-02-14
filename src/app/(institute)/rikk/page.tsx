import Header from "@/components/header/Header";
import RikkContent from "./components/RikkContent";
import Footer from "@/components/footer/Footer";

export default function Rikk() {
    return (
        <section>
            <Header type="image" headline="РИКК" photo="header_rikk.png" />
            <RikkContent />
            <Footer />
        </section>
    );
}