import React from "react";
import { StyleSheet } from "react-native";
import { colors } from "./colors";

export const formStyles = StyleSheet.create({
    fieldBox: {
        flexDirection: 'row',
        marginTop: 10,
        borderWidth: 1,
        borderColor: colors.lightGrey,
        borderRadius: 10,
        padding: 10,
    },
    fieldLabel: {
        marginTop: 25,
        color: '#000',
        fontSize: 18,
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
});