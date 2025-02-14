import Header from "@/components/header/Header";
import Main from "./components/Main";
import Footer from "@/components/footer/Footer";

export default function dorm() {
    return (
        <section>
            <Header type="image" headline="Общежитие" photo="header_dorm.png" />
            <Main />
            <Footer />
        </section>
    );
}