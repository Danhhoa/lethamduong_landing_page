import { PhoneContact } from "./components/phone-contact/PhoneContact";
import { Banner } from "./positisions/dashboard/Banner";
import { Contact } from "./positisions/dashboard/Contact";
import { Customer } from "./positisions/dashboard/Customer";
import { IntroduceService } from "./positisions/dashboard/IntroduceService";
import { NewVideos } from "./positisions/dashboard/NewVideos";
import { News } from "./positisions/dashboard/News";

export default function HomePage() {
    return (
        <div className="relative bg-simple-white bg-center">
            <Banner />
            <IntroduceService />
            <NewVideos />
            <Contact />
            <Customer />
            <News />
            <PhoneContact />
        </div>
    );
}
