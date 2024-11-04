import { ContactMe } from "../components/ContactMe";
import { PhoneContact } from "../components/phone-contact/PhoneContact";
import { Banner } from "../positisions/introduce/Banner";
import { Content } from "../positisions/introduce/Content";
import { VideoSlider } from "../positisions/introduce/VideoSlider";

export default function IntroducePage() {
    return (
        <div className="bg-simple-white bg-cover bg-no-repeat">
            <Banner />
            <Content />
            <VideoSlider />
            <ContactMe />
            <PhoneContact />
        </div>
    );
}
