"use client";
import { FadeInView } from "@/app/components/fade-in-view/FadeInView";
import { Blog } from "../../components/Blog";
import { CarouselSlider } from "../../components/carousel/CarouselSlider";
import useAxios from "@/app/hooks/useAxios";
import { INews } from "@/app/interfaces";
import { getMediaUrl } from "@/app/utils/media";
import { LoadingSpinner } from "@/app/components/Spinner";
import { SliderCpn } from "@/app/components/carousel/Slider";

export const News = () => {
    const { response: news, loading } = useAxios<INews[]>({
        method: "get",
        url: "https://cus-api.biiline.com/items/posts?limit=25&sort[]=sort&page=1&filter[status][_neq]=archived&fields[]=*&fields[]=author.id&fields[]=author.name",
    });

    return (
        <div className="flex flex-col items-center justify-center mt-20 py-10 gap-5 bg-light-90">
            <h2 className="md:text-4xl text-2xl font-semibold">Tin Tức</h2>
            <div className="mx-auto w-full lg:px-20 px-5 md:max-w-5xl max-w-sm">
                {!news?.length || loading ? (
                    <LoadingSpinner />
                ) : (
                    <FadeInView dir="fade-in">
                        {/* <CarouselSlider
                            slides={news.map((item, index) => {
                                return (
                                    <Blog
                                        key={item.id.toString() + index.toString()}
                                        id={item.id}
                                        title={item.title}
                                        imageUrl={getMediaUrl(item.image)}
                                        alt={item.title}
                                        author={item.author.name}
                                        datePublished={item.date_created}
                                        detailUrl={item.slug}
                                        content={item.content}
                                    />
                                );
                            })}
                        /> */}
                        <SliderCpn
                            slides={news.map((item, index) => {
                                return (
                                    <Blog
                                        key={item.id.toString() + index.toString()}
                                        id={item.id}
                                        title={item.title}
                                        imageUrl={getMediaUrl(item.image)}
                                        alt={item.title}
                                        author={item.author.name}
                                        datePublished={item.date_created}
                                        detailUrl={item.slug}
                                        content={item.content}
                                    />
                                );
                            })}
                        ></SliderCpn>
                    </FadeInView>
                )}
            </div>
        </div>
    );
};
