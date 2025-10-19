import { Text as RNText, TextStyle } from "react-native";

import { COLORS } from "@/constants/colors";
import { LAYOUTS } from "@/constants/layouts";

interface TextProps {
    children: React.ReactNode;
    type?: "primary" | "secondary" | "gray" | "lightGray" | "white" | "success" | "error" | "warning";
    textStyle?: "header" | "body" | "caption" | "xs";
    style?: TextStyle;
}

const Text = ({ children, type, textStyle, style }: TextProps) => {
    const getTextStyle = (): TextStyle => {
        switch (textStyle) {
            case "header":
                return { fontWeight: "bold", fontSize: LAYOUTS.fontSize.xl };
            case "body":
                return { fontSize: LAYOUTS.fontSize.md };
            case "caption":
                return { fontSize: LAYOUTS.fontSize.sm };
            case "xs":
                return { fontSize: LAYOUTS.fontSize.xs };
            default:
                return { fontSize: LAYOUTS.fontSize.md };
        }
    };

    const getTypeStyle = (): TextStyle => {
        switch (type) {
            case "primary":
                return { color: COLORS.primary };
            case "secondary":
                return { color: COLORS.secondary };
            case "gray":
                return { color: COLORS.gray };
            case "lightGray":
                return { color: COLORS.light_gray };
            case "white":
                return { color: COLORS.white };
            case "success":
                return { color: COLORS.success };
            case "warning":
                return { color: COLORS.warning };
            case "error":
                return { color: COLORS.error };
            default:
                return { color: COLORS.primary };
        }
    };

    return (
        <RNText
            style={{
                fontFamily: "Lato",
                ...getTextStyle(),
                ...getTypeStyle(),
                ...style,
            }}
        >
            {children}
        </RNText>
    );
};

export default Text;
