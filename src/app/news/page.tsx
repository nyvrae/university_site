
import Header from "@/components/header/Header";
import Banner from "./components/Banner";
import Feed from "./components/Feed";
import Footer from "@/components/footer/Footer";

export default function News() {
    return (
        <section>
            <Header type="bg" />
            <Banner />
            <Feed />
            <Footer />
        </section>
    );
}