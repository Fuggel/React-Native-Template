import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import Toast, { BaseToast } from "react-native-toast-message";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import { COLORS } from "@/constants/colors";
import { LAYOUTS } from "@/constants/layouts";

const deviceHeight = Dimensions.get("window").height;

const ToastComponent = () => {
    return (
        <Toast
            position="top"
            visibilityTime={3000}
            autoHide={true}
            topOffset={deviceHeight > 1000 ? 50 : 60}
            swipeable
            config={{
                error: (props) => (
                    <BaseToast
                        {...props}
                        style={styles.error}
                        renderLeadingIcon={() => (
                            <MaterialCommunityIcons name="alert-circle-outline" style={styles.errorIcon} />
                        )}
                        text1Style={styles.text1}
                        text2Style={styles.text2}
                        text2Props={{
                            numberOfLines: 3,
                        }}
                    />
                ),
            }}
        />
    );
};

const styles = StyleSheet.create({
    error: {
        backgroundColor: COLORS.shadow_error,
        borderLeftWidth: 3,
        borderWidth: 3,
        borderColor: COLORS.error,
        maxWidth: "80%",
        alignItems: "center",
        minHeight: 75,
        height: "auto",
        flexDirection: "row",
        justifyContent: "flex-start",
    },
    errorIcon: {
        color: COLORS.white,
        fontSize: LAYOUTS.iconSize.lg,
        marginLeft: LAYOUTS.spacing.sm,
        marginRight: -LAYOUTS.spacing.sm,
    },
    text1: {
        fontSize: LAYOUTS.fontSize.lg,
        color: COLORS.white,
    },
    text2: {
        fontSize: LAYOUTS.fontSize.md,
        color: COLORS.white,
    },
});

export default ToastComponent;
