import React from "react";
import { StyleSheet } from "react-native";
import { colors } from "./colors";

export const buttonStyles = StyleSheet.create({
    primaryButton: {
        backgroundColor: colors.primary,
        color: '#fff',
        borderRadius: 10,
        paddingVertical: 15,
        paddingHorizontal: 15,
        tintColor: '#fff',
        marginVertical: 15,
        alignItems: 'center',
    },
    primaryButtonText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 16,
    },
});