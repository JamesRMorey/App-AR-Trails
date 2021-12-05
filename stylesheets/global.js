import React from "react";
import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingHorizontal: 15,
      },
      primaryButton: {
          backgroundColor: '#fa7002',
          color: '#fff',
          borderRadius: 10,
          paddingVertical: 5,
          paddingHorizontal: 15,
          tintColor: '#fff',
          marginVertical: 15,
      },
      locationsVisitedContainer: {
        flexDirection: 'row',
        alignItems: 'center',
      },
});