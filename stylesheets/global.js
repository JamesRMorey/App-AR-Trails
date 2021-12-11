import React from "react";
import { StyleSheet } from "react-native";
import { colors } from "./colors";

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingHorizontal: 15,
      },
      locationsVisitedContainer: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      card: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 10,
      },
      stackNavigationHeader: {
        justifyContent: 'flex-end',
        height: 130,
      },
      stackNavigationHeaderPress: {
        padding: 20,
        width: 80,
      },
      stackNavigationHeaderText: {
        fontSize: 16,
      },
      alertPrimary: {
        padding: 20,
        backgroundColor: colors.alertInfoBackground,
        width: '100%',
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
      }
});