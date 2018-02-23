import * as React from "react"
import {View, StyleSheet} from "react-native"

const styles = StyleSheet.create({
  week: {
    margin: 1,
    flex: 1,
    height: 42,
    backgroundColor: "red",
    borderColor: "black",
    borderWidth: 4,
  },
})


export default class Week extends React.PureComponent<{}> {
  render() {
    return (
      <View style={styles.week} />
    )
  }
}
