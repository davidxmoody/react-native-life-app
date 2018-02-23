import * as React from "react"
import Calendar from "./components/Calendar"
import Pannable from "./components/Pannable"

interface State {
  currentYear: null | string
}

export default class App extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props)

    this.state = {
      currentYear: null
    }
  }

  render() {
    return (
      <Pannable>
        <Calendar
          currentYear={this.state.currentYear}
          onSelectYear={(currentYear) => this.setState({currentYear})}
        />
      </Pannable>
    )
  }
}
