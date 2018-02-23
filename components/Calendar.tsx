import * as React from "react"
import {StyleSheet, Text, SafeAreaView, ScrollView, View} from "react-native"
import Year from "./Year"

const lengthTenArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  decade: {
    flex: 0,
    width: "100%",
    flexDirection: "row",
  },
})

interface Props {
  currentYear: null | string
  onSelectYear: (currentYear: string) => void
}

export default class Calendar extends React.PureComponent<Props> {
  render() {
    return (
      <View style={styles.container}>
        {lengthTenArray.map((_1, index1) => (
          <View key={index1} style={styles.decade}>
            {lengthTenArray.map((_2, index2) => (
              <Year
                key={index2}
                isSelected={_2.toString() === this.props.currentYear}
                onSelect={() => this.props.onSelectYear(_2.toString())}
              />
            ))}
          </View>
        ))}
      </View>
    )
  }
}
