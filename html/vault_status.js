'use strict';

const e = React.createElement;

class VaultStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vaultStatus: []
    };
  }

  render() {
    return (
    <div>
      <center><h1>Contact List</h1></center>
      {this.state.vaultStatus.map((contact) => (
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{contact.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{contact.email}</h6>
                <p class="card-text">{contact.company.catchPhrase}</p>
              </div>
            </div>
          ))}
    </div>
    );
  }


  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
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
