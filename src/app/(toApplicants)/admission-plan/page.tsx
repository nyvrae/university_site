import Header from "@/components/header/Header";
import Main from "./components/Main";
import Footer from "@/components/footer/Footer";

export default function Page() {
    return (
        <section>
            <Header type="image" headline="План приёма" photo="header_admission_plan.png" />
            <Main />
            <Footer />
        </section>
    );
}