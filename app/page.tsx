import { PhoneContact } from "./components/PhoneContact";
import { Banner } from "./positisions/dashboard/Banner";
import { Contact } from "./positisions/dashboard/Contact";
import { Customer } from "./positisions/dashboard/Customer";
import { IntroduceService } from "./positisions/dashboard/IntroduceService";
import { NewVideos } from "./positisions/dashboard/NewVideos";
import { News } from "./positisions/dashboard/News";

export default function HomePage() {
    return (
        <div className="relative mt-[80px]">
            <Banner />
            <IntroduceService />
            <NewVideos />
            <Contact />
            <Customer />
            <News />
            <div className="fixed lg:right-10 lg:bottom-5 bottom-0 right-0  flex justify-end h-[100px] w-[100px]">
                <PhoneContact />
            </div>
        </div>
    );
}
