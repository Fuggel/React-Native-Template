import React from "react";
import { StyleSheet, ViewStyle } from "react-native";
import { Divider as RNPDivider } from "react-native-paper";

import { COLORS } from "@/constants/colors";
import { LAYOUTS } from "@/constants/layouts";

interface DividerProps {
    st?: ViewStyle;
}

const Divider = (style: DividerProps) => {
    return <RNPDivider style={{ ...styles.container, ...style.st }} />;
};

export default Divider;

const styles = StyleSheet.create({
    container: {
        marginVertical: LAYOUTS.spacing.lg,
        backgroundColor: COLORS.light_gray,
    },
});
