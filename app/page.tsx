import { BranchSlogan } from "./components/BranchSlogan";
import { Services } from "./components/service/Services";
import { Banner } from "./components/banner/Banner";
import { WhyChoose } from "./components/WhyChoose";
import { Features } from "./components/Features";
import { Customers } from "./components/Customers";
import { Feedback } from "./components/feedback/Feedback";

export default function HomePage() {
    return (
        <div className="p-20">
            <Banner />
            <BranchSlogan />
            <Services />
            <WhyChoose />
            <Features />
            <Customers />
            <Feedback />
        </div>
    );
}
