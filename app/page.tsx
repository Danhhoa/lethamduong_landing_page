import { Banner } from "./positisions/dashboard/Banner";
import { Contact } from "./positisions/dashboard/Contact";
import { Customer } from "./positisions/dashboard/Customer";
import { IntroduceService } from "./positisions/dashboard/IntroduceService";
import { NewVideos } from "./positisions/dashboard/NewVideos";
import { News } from "./positisions/dashboard/News";

export default function HomePage() {
    return (
        <div className="mt-[80px]">
            <Banner />
            <IntroduceService />
            <NewVideos />
            <Contact />
            <Customer />
            <News />
        </div>
    );
}
