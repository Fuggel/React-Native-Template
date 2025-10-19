import { KeyboardTypeOptions, SafeAreaView, StyleSheet, TextInput } from "react-native";

import { LAYOUTS } from "@/constants/layouts";

interface InputProps {
    value: string;
    type: KeyboardTypeOptions;
    onChange?: (text: string) => void;
    onBlur?: (text: string) => void;
    placeholder?: string;
}

const Input = ({ value, onChange, type, onBlur, placeholder }: InputProps) => {
    return (
        <SafeAreaView>
            <TextInput
                style={styles.input}
                onChangeText={onChange}
                value={value}
                keyboardType={type}
                placeholder={placeholder}
                onSubmitEditing={onChange ? () => onChange(value) : undefined}
                onBlur={onBlur ? () => onBlur(value) : undefined}
                returnKeyType="done"
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        width: "100%",
        borderWidth: 1,
        padding: 10,
        fontSize: LAYOUTS.fontSize.md,
        borderRadius: LAYOUTS.borderRadius.sm,
    },
});

export default Input;
