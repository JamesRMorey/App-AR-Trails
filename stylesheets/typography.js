import React from "react";
import { StyleSheet } from "react-native";
import { colors } from "./colors";

export const textStyles = StyleSheet.create({
    defaultText: {
        fontSize: 16,
        color: '#000'
    },
    headerText: {
        fontSize: 28,
        color: '#000',
    },
    subTitletext: {
        fontSize: 20,
        color: '#000'
    },
    alt: {
        color: '#fff'
    },
    light: {
        color: colors.grey
    },
    bold: {
        fontWeight: 'bold'
    },
    alertPrimaryText: {
        fontWeight: 'bold',
        color: colors.primary,
        fontSize: 20,
    }
});