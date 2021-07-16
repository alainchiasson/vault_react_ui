'use strict';

const e = React.createElement;

class VaultStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      statusSet: false,
      vaultStatus: {}
    };
  }

  render() {
    console.log(this.props);
    if (this.state.statusSet) {
      return (
        <div>
        <p>status is set</p>
        <p>version is {this.state.vaultStatus.version} </p>
        </div>
      );
    }
    return (
      <div>
        <p>status not set</p>
      </div>
    );
  }  

  getVaultStatus() {
    console.log('getting state');
    console.log('current state = ', this.state);

    fetch(`http://localhost:8080/${this.props.path}/v1/sys/health`)
    .then(res => res.json())
    .then((data) => {
      this.setState({ 
        vaultStatus: data
      }), function () {
        console.log(this.state.vaultStatus);
      };
    this.setState( {statusSet: true} );

    })
    .catch(console.log)
  }
  
  componentDidMount() {
    this.getVaultStatus();
  }

}

// Find all DOM containers, and render Like buttons into them.
ReactDOM.render(
  e(VaultStatus),
  document.getElementById('vault-status')
);
