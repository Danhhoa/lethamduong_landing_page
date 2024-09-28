import { ContactMe } from "../components/ContactMe";
import { Banner } from "../positisions/introduce/Banner";
import { Content } from "../positisions/introduce/Content";

export default function IntroducePage() {
    return (
        <div className="mt-[80px]">
            <Banner />
            <Content />
            <ContactMe />
        </div>
    );
}
