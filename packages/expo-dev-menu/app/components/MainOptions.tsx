import React from 'react';
import { StyleSheet, PixelRatio, View } from 'react-native';

import ListLink from './ListLink';

function MainOptions() {
  return (
    <View style={styles.group}>
      <ListLink route="Settings" label="Settings" glyphName="settings-outline" />
      <ListLink route="Test" label="Navigation and scroll test" glyphName="test-tube" />
    </View>
  );
}

const pixel = 2 / PixelRatio.get();
const styles = StyleSheet.create({
  group: {
    marginTop: 14,
    marginHorizontal: -pixel,
  },
});

export default MainOptions;
