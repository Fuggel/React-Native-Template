import { Text, StyleSheet, ScrollView, View } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "../store";


const App = () => {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <SafeAreaView style={styles.constainer}>
                    <ScrollView contentContainerStyle={styles.scrollView}>
                        <View style={styles.constainer}>
                            <Text>RN Template</Text>
                            <StatusBar style="auto" />
                            <Link href="/home">Go to Home</Link>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </PersistGate>
        </Provider>
    );
};

export default App;

const styles = StyleSheet.create({
    scrollView: {
        height: "100%"
    },
    constainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});
