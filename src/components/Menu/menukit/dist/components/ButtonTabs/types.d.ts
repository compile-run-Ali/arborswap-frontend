import { ReactElement } from "react";
import { SpaceProps } from "styled-system";
import { BaseButtonProps, Scale, variants } from "../Button/types";
export interface ButtonTabsItemProps extends BaseButtonProps {
    isActive?: boolean;
    icons?: ReactElement;
    children?: React.ReactNode;
}
export interface ButtonTabsProps extends SpaceProps {
    variant?: typeof variants.PRIMARY | typeof variants.SUBTLE;
    activeIndex?: number;
    onItemClick?: (index: number) => void;
    scale?: Scale;
    disabled?: boolean;
    children: ReactElement[];
    fullWidth?: boolean;
}
