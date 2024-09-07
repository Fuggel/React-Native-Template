import { ActivityIndicator, StyleSheet } from "react-native";
import { COLORS, LAYOUTS } from "../constants";

interface LoadingProps {
    color?: string;
    size?: number;
    style?: StyleSheet;
}

export default function Loading({ color, size, style }: LoadingProps) {
    return (
        <ActivityIndicator
            animating={true}
            color={color ?? COLORS.secondary}
            size={size ?? LAYOUTS.iconSize.xl}
            style={{ ...styles.loading, ...style }}
        />
    );
}

const styles = StyleSheet.create({
    loading: {
        position: "absolute",
        top: "45%",
        left: "45%",
        zIndex: 999999,
    },
});