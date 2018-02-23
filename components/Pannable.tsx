import * as React from "react"
import {StyleSheet, Text, SafeAreaView, ScrollView, View} from "react-native"

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
  },
})

export default class Pannable extends React.PureComponent<{}> {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView
          maximumZoomScale={7}
          bouncesZoom={false}
          alwaysBounceHorizontal={true}
          alwaysBounceVertical={true}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          style={styles.scrollContainer}
        >
          {this.props.children}
        </ScrollView>
      </SafeAreaView>
    )
  }
}
