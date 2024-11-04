import { PhoneContact } from "../components/phone-contact/PhoneContact";
import { Contact } from "../positisions/contact/contact";

export default function ContractPage() {
    return (
        <div className="bg-simple-white-3 bg-cover bg-no-repeat lg:bg-center lg:py-40 md:p-10">
            <Contact />
            <div className="fixed lg:right-10 lg:bottom-5 bottom-0 right-0  flex justify-end h-[100px] w-[100px]">
                <PhoneContact />
            </div>
        </div>
    );
}
