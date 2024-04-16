import { BranchSlogan } from "./components/BranchSlogan";
import { Services } from "./components/service/Services";
import { Banner } from "./components/banner/Banner";
import { WhyChoose } from "./components/WhyChoose";
import { Features } from "./components/Features";
import { Customers } from "./components/Customers";
import { Feedback } from "./components/feedback/Feedback";
import { BecomeDriver } from "./positisions/BecomDriver";
import { Blog } from "./positisions/Blog";
import { Footer } from "./positisions/Footer";

export default function HomePage() {
    return (
        <div className="">
            <Banner />
            <BranchSlogan />
            <Services />
            <WhyChoose />
            <Features />
            <Customers />
            <Feedback />
            <BecomeDriver />
            <Blog />
            <BranchSlogan />
            <Footer />
        </div>
    );
}
