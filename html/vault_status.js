'use strict';

const e = React.createElement;

class VaultStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vaultStatus: {}
    };
  }

  render() {

    const { vaultStatus } = this.state;  

    return (
    <div>
      <p>vault is initialized {vaultStatus.initialized} </p>
      <p>vault version {vaultStatus.version} </p>
    </div>
    );
  }  
  
  componentDidMount() {
    fetch('http://localhost:8080/v1/sys/health')
    .then(res => res.json())
    .then((data) => {
      this.setState({ VaultStatus: data })
    })
    .catch(console.log)
    }
}
// Find all DOM containers, and render Like buttons into them.
ReactDOM.render(
  e(VaultStatus),
  document.getElementById('vault-status')
);
