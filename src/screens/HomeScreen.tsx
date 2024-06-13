// HomeScreen.tsx
import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { signOut } from 'firebase/auth'; // Import signOut function
import { auth } from '../firebase'; // Make sure the path is correct to your firebase file

export default function HomeScreen() {
    const handleSignOut = async () => {
        try {
            await signOut(auth); // Use signOut function from firebase/auth
        } catch (error) {
            if (error instanceof Error) {
                console.error("Error signing out:", error.message);
            } else {
                console.error("Unexpected error signing out.");
            }
        }
    };

    return (
        <View style={styles.container}>
            <Text>Welcome!</Text>
            <Button title="Sign Out" onPress={handleSignOut} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
