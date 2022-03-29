import React from 'react';
import styles from './Timer.module.css';

export default class CountDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 60,
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      const { count } = this.state;
      this.setState({
        count: count - 1,
      });
    }, 1000);
  }

  fmtMSS(s) { return (s - (s %= 60)) / 60 + (s > 9 ? ':' : ':0') + s; }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.count !== this.state.count && this.state.count === 0) { clearInterval(this.timer); }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { count } = this.state;
    return (
      <div className={styles.timer}>
        {this.fmtMSS(count)}
      </div>
    );
  }
}
