import Loading from "@/src/components/Loading";
import { COLORS, LAYOUTS } from "@/src/constants";
import useSpells from "@/src/hooks/useSpells";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const Home = () => {
    const { spells, loadingSpells, errorSpells } = useSpells({ spellType: "DarkArts" });

    if (loadingSpells) return <Loading />;
    if (errorSpells) return <Text style={styles.errorText}>Something went wrong...</Text>;

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            {spells?.map((spell) => (
                <View key={spell.id} style={styles.spellCard}>
                    <Text style={styles.spellName}>Name: {spell.name}</Text>
                    <Text style={styles.spellDetail}>Effect: {spell.effect}</Text>
                    <Text style={styles.spellDetail}>Type: {spell.type}</Text>
                    <Text style={styles.spellDetail}>Light: {spell.light}</Text>
                </View>
            ))}
        </ScrollView>
    );
};

export default Home;

const styles = StyleSheet.create({
    scrollContainer: {
        padding: LAYOUTS.spacing.md,
    },
    spellCard: {
        backgroundColor: COLORS.white,
        borderRadius: LAYOUTS.borderRadius.sm,
        padding: LAYOUTS.spacing.sm,
        marginBottom: LAYOUTS.spacing.md,
        shadowColor: COLORS.dark,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: LAYOUTS.borderRadius.sm,
        elevation: 2,
    },
    spellName: {
        fontSize: LAYOUTS.fontSize.lg,
        fontWeight: "bold",
        color: COLORS.dark,
        marginBottom: LAYOUTS.spacing.sm,
    },
    spellDetail: {
        fontSize: 14,
        color: COLORS.gray,
        marginBottom: LAYOUTS.spacing.xs,
    },
    errorText: {
        color: COLORS.error,
        fontSize: LAYOUTS.fontSize.md,
        textAlign: "center",
        marginTop: LAYOUTS.spacing.md,
    },
});
