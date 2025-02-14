import Header from "@/components/header/Header";
import Main from "./components/Main";
import Footer from "@/components/footer/Footer";

export default function Docs() {
    return (
        <section>
            <Header type="image" headline="Документы" photo="header_docs.png" />
            <Main />
            <Footer />
        </section>
    );
}