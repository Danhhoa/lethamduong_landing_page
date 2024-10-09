import { PhoneContact } from "../components/PhoneContact";
import { Contact } from "../positisions/contact/contact";

export default function ContractPage() {
    return (
        <div className="mt-[80px] bg-light-90">
            <Contact />
            <div className="fixed lg:right-10 lg:bottom-5 bottom-0 right-0  flex justify-end h-[100px] w-[100px]">
                <PhoneContact />
            </div>
        </div>
    );
}
