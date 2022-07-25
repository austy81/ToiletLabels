import React, { Component } from 'react';

export class Labels extends Component {
    static displayName = Labels.name;

  constructor(props) {
    super(props);
    this.state = { labelpairs: [], loading: true };
  }

  componentDidMount() {
    this.populateLabels();
  }

  static renderlabelpairsTable(labelpairs) {
    return (
      <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>Place name</th>
          </tr>
        </thead>
        <tbody>
            {labelpairs.map(labelpair =>
                <tr key={labelpair.placeName}>
                    <td>{labelpair.placeName}</td>
                </tr>
            )}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
        : Labels.renderlabelpairsTable(this.state.labelpairs);

    return (
      <div>
        <h1 id="tabelLabel" >Which is female?</h1>
        <p>xxx</p>
        {contents}
      </div>
    );
  }

  async populateLabels() {
    const response = await fetch('labelsdata');
    const data = await response.json();
    this.setState({ labelpairs: data, loading: false });
  }
}
