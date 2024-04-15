import { Button } from "@/components/ui/button";
import { PropsWithChildren } from "react";

type PropType = PropsWithChildren<
    React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
>;

export const DotButton: React.FC<PropType> = (props) => {
    const { children, ...restProps } = props;

    return (
        <Button className="rounded-full w-3 h-3" {...restProps}>
            {children}
        </Button>
    );
};
