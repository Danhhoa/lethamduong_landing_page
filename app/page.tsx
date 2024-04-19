import { BranchSlogan } from "./components/BranchSlogan";
import { Banner } from "./positisions/Banner";
import { BecomeDriver } from "./positisions/BecomDriver";
import { Blog } from "./positisions/Blog";
import { Customers } from "./positisions/Customers";
import { Features } from "./positisions/Features";
import { Feedback } from "./positisions/Feedback";
import { Services } from "./positisions/Services";
import { WhyChoose } from "./positisions/WhyChoose";

export default function HomePage() {
    return (
        <>
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
        </>
    );
}
