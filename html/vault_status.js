'use strict';

const e = React.createElement;

class VaultStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    return (
      <h1>Hello, Vault</h1>
    );
  }
}

// Find all DOM containers, and render Like buttons into them.
ReactDOM.render(
  e(VaultStatus),
  document.getElementById('vault-status')
);
