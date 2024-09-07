import { Image, ImageProps, StyleSheet, Text, View } from "react-native";

interface TabIconProps {
    icon: ImageProps;
    color: string;
    name: string;
    focused: boolean;
}

const TabIcon = ({ icon, color, name, focused }: TabIconProps) => {
    return (
        <View style={styles.container}>
            <Image
                source={icon}
                resizeMode="contain"
                tintColor={color}
                style={styles.icon}
            />
            <Text
                style={{
                    ...styles.text,
                    ...(focused ? styles.bold : styles.normal),
                    color,
                }}
            >
                {name}
            </Text>
        </View>
    );
};

export default TabIcon;

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
    },
    icon: {
        width: 25,
        height: 25,
    },
    text: {
        fontSize: 12,
        textAlign: "center",
    },
    bold: {
        fontWeight: "bold",
    },
    normal: {
        fontWeight: "normal",
    },
});