import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { StarIcon } from "../components/icons/StarIcon";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { FeedbackCard } from "../components/FeedbackCard";

export const Feedback = () => {
    const feedbackStar = [
        {
            star: 5,
            feedback: 149,
        },
        {
            star: 4,
            feedback: 35,
        },
        {
            star: 3,
            feedback: 7,
        },
        {
            star: 2,
            feedback: 1,
        },
        {
            star: 1,
            feedback: 0,
        },
    ];

    const googleFeedback = [
        {
            avt: "/avatar/avt4.jpg",
            name: "Vivo Long",
            star: 5,
            at: "7/5/2022 qua Google",
            text: "Dịch vụ tuyệt vời, anh em nhân viên rất chu đáo, nhà thế khó, chưa có cầu thang nhưng...",
        },
        {
            avt: "/avatar/avt1.jpg",
            name: "Hồ Như",
            star: 5,
            at: "7/5/2022 qua Google",
            text: "Mình  và công ty mình đã sử dụng dịch vụ vận chuyển trọn gói bên vietnam moving, mình r...",
        },
        {
            avt: "/avatar/avt2.jpg",
            name: "Tram Nguyen",
            star: 5,
            at: "6/25/2022 qua Google",
            text: "Nhân viên đến hẹn đúng giờ, chuẩn bị thùng đóng gói chuyên nghiệp. - Đóng gói 1 tiếng...",
        },
        {
            avt: "/avatar/avt3.jpg",
            name: "Ty Trinh Pham",
            star: 5,
            at: "3/1/2022 qua Google",
            text: "ê-kip nhiệt tình, trung thực, dễ thương",
        },
    ];
    return (
        <div
            id="danh-gia"
            className="flex flex-col justify-center items-center gap-10 lg:m-20 md:m-10 m-5 mt-10 scroll-mt-24"
        >
            <div className="text-primary font-bold uppercase tracking-widest">CẢM NHẬN KHÁCH HÀNG TRÊN GOOGLE</div>
            <div className="flex lg:flex-row md:flex-col flex-wrap gap-5">
                <Card className="basis-[30%] md:p-10 p-3 lg:min-w-[350px] min-w-full mx-auto">
                    <CardContent className="p-0">
                        <div className="flex flex-col gap-5">
                            {feedbackStar.map((item, index) => (
                                <div key={index} className="flex justify-between">
                                    <div className="flex gap-1 self-start">
                                        {Array.from(Array(item.star).keys()).map((item) => (
                                            <StarIcon key={item} width={28} height={28} />
                                        ))}
                                    </div>
                                    <p className="text-blue-700 font-semibold">{item.feedback} đánh giá</p>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
                <div className="flex flex-wrap xl:basis-[65%] gap-3">
                    {googleFeedback.map((item, index) => (
                        <FeedbackCard
                            key={`${item.avt}-${index}`}
                            avt={item.avt}
                            name={item.name}
                            star={item.star}
                            at={item.at}
                            text={item.text}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
