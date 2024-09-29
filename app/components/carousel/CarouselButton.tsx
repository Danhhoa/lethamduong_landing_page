import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

type PropType = PropsWithChildren<
    React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
>;

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    active: boolean;
}

export const DotButton: React.FC<Props> = ({ active, ...restProps }) => {
    return (
        <Button
            className={cn("rounded-full w-2 h-2 m-0 p-0 bg-gray-300 hover:bg-blue-800", { "bg-blue-800": active })}
            {...restProps}
        />
    );
};
