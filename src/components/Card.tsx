import { StyleSheet, View, ViewStyle } from "react-native";

import { LAYOUTS } from "@/constants/layouts";

import Text from "./Text";

interface CardProps {
    title?: string;
    children: React.ReactNode;
    st?: ViewStyle;
}

const Card = ({ title, children, st }: CardProps) => {
    return (
        <View style={{ ...styles.card, ...st }}>
            <Text>{title}</Text>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        paddingHorizontal: LAYOUTS.spacing.md,
        borderRadius: LAYOUTS.borderRadius.md,
    },
});

export default Card;
