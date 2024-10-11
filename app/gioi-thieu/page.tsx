import { ContactMe } from "../components/ContactMe";
import { PhoneContact } from "../components/PhoneContact";
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
            <div className="fixed lg:right-10 lg:bottom-5 bottom-0 right-0  flex justify-end h-[100px] w-[100px]">
                <PhoneContact />
            </div>
        </div>
    );
}
