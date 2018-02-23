import * as React from "react"
import {View, StyleSheet, TouchableOpacity} from "react-native"

const styles = StyleSheet.create({
  touchable: {
    flex: 1,
    height: 42,
  },
  year: {
    margin: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "red",
    borderColor: "black",
    borderWidth: 4,
  },
  selectedYear: {
    backgroundColor: "orange",
  },
})

interface Props {
  isSelected: boolean
  onSelect: () => void
}

export default class Year extends React.PureComponent<Props> {
  render() {
    return (
      <TouchableOpacity style={styles.touchable} onPress={this.props.onSelect}>
        <View style={[styles.year, this.props.isSelected ? styles.selectedYear : null]}>
        </View>
      </TouchableOpacity>
    )
  }
}
