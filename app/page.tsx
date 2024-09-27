import { Banner } from "./positisions/Banner";
import { Contact } from "./positisions/Contact";
import { Customer } from "./positisions/Customer";
import { IntroduceService } from "./positisions/IntroduceService";
import { NewVideos } from "./positisions/NewVideos";
import { News } from "./positisions/News";

export default function HomePage() {
    return (
        <div className="mt-[80px]">
            <Banner />
            <IntroduceService />
            <NewVideos />
            <Contact></Contact>
            <Customer></Customer>
            <News></News>
        </div>
    );
}
