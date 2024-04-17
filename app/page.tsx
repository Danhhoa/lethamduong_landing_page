import { BranchSlogan } from "./components/BranchSlogan";
import { Services } from "./positisions/Services";
import { Banner } from "./positisions/Banner";
import { WhyChoose } from "./positisions/WhyChoose";
import { Features } from "./positisions/Features";
import { Customers } from "./positisions/Customers";
import { Feedback } from "./positisions/Feedback";
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
