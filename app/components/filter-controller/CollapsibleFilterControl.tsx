"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronsUpDown } from "lucide-react";
import Image from "next/image";
import { FC, useState } from "react";
import { ClassNameValue } from "tailwind-merge";

interface Props {
    title: string;
    titleIcon?: string;
    content: Array<{ id: string; title: string }>;
    className?: ClassNameValue;
}
export const CollapsibleFilterControl: FC<Props> = ({ title, titleIcon, content, className }) => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <Collapsible open={isOpen} onOpenChange={setIsOpen} className={`w-full transition-all ${className}`}>
            <div className="flex items-center justify-between space-x-4">
                <div className="flex items-center justify-center gap-3">
                    {titleIcon && <Image src={titleIcon} alt="title-icon" width={25} height={25} />}
                    <h4 className="text-sm font-semibold">{title}</h4>
                </div>

                <CollapsibleTrigger asChild>
                    <Button variant="ghost" size="sm" className="w-9 p-0">
                        <ChevronsUpDown className="h-4 w-4" />
                        <span className="sr-only">Toggle</span>
                    </Button>
                </CollapsibleTrigger>
            </div>
            <CollapsibleContent className="space-y-2 flex flex-col gap-3 transition-all">
                {content.map((item, index) => {
                    return (
                        <div key={index} className="xl:ml-10 ml-5 flex gap-4 ease-in-out duration-500">
                            <Checkbox id={item.id} onClick={() => console.log("click")} />
                            <label
                                htmlFor={item.id}
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                {item.title}
                            </label>
                        </div>
                    );
                })}
            </CollapsibleContent>
        </Collapsible>
    );
};