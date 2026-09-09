import React from "react";
import { DefaultTheme } from "styled-components";
import { Colors } from "../../../theme/types";
export interface Props {
    secondary?: boolean;
    isActive?: boolean;
    isPushed?: boolean;
    theme: DefaultTheme;
}
declare const MenuEntry: import("styled-components").StyledComponent<"div", DefaultTheme, Props, never>;
declare const LinkStatus: import("styled-components").StyledComponent<"div", DefaultTheme, import("../../../components/Text").TextProps & {
    color: keyof Colors;
    isPushed: boolean;
}, never>;
declare const LinkLabelMemo: React.MemoExoticComponent<import("styled-components").StyledComponent<"div", DefaultTheme, {
    isActive: boolean;
    isPushed: boolean;
}, never>>;
export { MenuEntry, LinkStatus, LinkLabelMemo as LinkLabel };
