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
      }
});