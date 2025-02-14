import Header from "@/components/header/Header";
import Main from "./components/Main";
import Footer from "@/components/footer/Footer";

export default function Page() {
    return (
        <section>
            <Header type="image" headline="Расписание" photo="header_schedule.png" />
            <Main />
            <Footer />
        </section>
    );
}