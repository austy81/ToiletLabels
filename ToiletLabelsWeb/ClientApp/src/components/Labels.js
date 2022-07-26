import React, { Component } from 'react';



export class Labels extends Component {
    static displayName = Labels.name;
    blobStoragePath = "https://toiletlabelsstorage.blob.core.windows.net/toiletlabels/";

    constructor(props) {
        super(props);
        this.state = { labelpairs: [], loading: true, quizStarted: false };
    }

    componentDidMount()
    {
        this.populateLabels();
    }


    renderlabelpairsTable(labelpairs) {
        const voteClick = (e) => {
            var gender = e.currentTarget.getAttribute('data-gender');
            var labelid = e.currentTarget.getAttribute('data-labelid');

            // update clicked item with vote attribute
            let updatedList = this.state.labelpairs.map(item => {
                if (item.id === labelid) {
                    return { ...item, voted: gender, voteDuration: Date.now()-voteStartTime };
                }
                return item; 
            });

            this.setState({ labelpairs: updatedList });
            voteStartTime = Date.now();
            console.log("Voted gender:" + gender + " id:" + labelid);
        }

        const restartQuiz = (e) => {
            let updatedList = this.state.labelpairs.map(item => {
                return { ...item, voted: undefined,  };
            });

            this.setState({ labelpairs: updatedList });
            console.log("Quiz restarted.");
        }

        const startQuiz = (e) => {
            let updatedList = this.state.labelpairs.map(item => {
                return { ...item, voteStartTime: Date.now() };
            });
            this.setState({ labelpairs: updatedList, quizStarted: true})
        }

        var voteStartTime = Date.now();

        if (this.state.quizStarted === false) {
            return (
                <div>
                    <p>Your task is to click the label representing female toilet.</p>
                    <p>Click button below when you are ready.</p>
                    <button onClick={startQuiz}>
                        Start quiz
                    </button>
                </div>
                );
        }

        var current = labelpairs.find(item => item.voted === undefined);
        if (current) {
            var female = <td><img onClick={voteClick} src={this.blobStoragePath + current.femalePictureLink} data-labelid={current.id} data-gender='female' alt="First label" /> </td>;
            var male = <td><img onClick={voteClick} src={this.blobStoragePath + current.malePictureLink} data-labelid={current.id} data-gender='male' alt="Second label" /> </td>;
            const rand = Math.random() < 0.5;
            var labels = [male, female]
            if (rand) labels = [female, male];

            return (
                <table className='table' aria-labelledby="tabelLabel">
                    <thead>
                        <tr>
                            <th>Place name</th>
                            <th>First label</th>
                            <th>Second label</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr key={current.placeName}>
                            <td>{current.placeName}</td>
                            { labels }
                        </tr>

                    </tbody>
                </table>
            );
        }
        else {
            // Rendering result table
            return (
                <div>
                    <h1>Thanks!!!</h1>
                    <p>Your results:</p>

                    <table className='table table-striped' aria-labelledby="tabelLabel">
                        <thead>
                            <tr>
                                <th>Place</th>
                                <th>URL</th>
                                <th>Female</th>
                                <th>Male</th>
                                <th>Your vote</th>
                                <th>Vote duration</th>
                            </tr>
                        </thead>
                        <tbody>
                            {labelpairs.map(labelpair =>
                                <tr key={labelpair.id}>
                                    <td>{labelpair.placeName}</td>
                                    <td>{labelpair.url}</td>
                                    <td><img src={this.blobStoragePath + labelpair.femalePictureLink} alt="Female label" /> </td>
                                    <td><img src={this.blobStoragePath + labelpair.malePictureLink} alt="Male label" /> </td>
                                    <td>{labelpair.voted}</td>
                                    <td>{labelpair.voteDuration / 1000} seconds</td>
                                </tr>
                            )}
                        </tbody>
                    </table>

                    <button onClick={restartQuiz}>
                        Restart quiz
                    </button>
                </div>
                );
        }
    }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
        : this.renderlabelpairsTable(this.state.labelpairs);

    return (
      <div>
        <h1 id="tabelLabel" >Which label is female?</h1>
        <p>Enjoy the quiz</p>
        {contents}
      </div>
    );
  }

    async populateLabels() {
        const response = await fetch('labelsdata');
        const data = await response.json();
        //console.log("Loaded " + len(data) + " rows.");

        this.shuffleArray(data);
        this.setState({ labelpairs: data, loading: false });
    }

  
    /* Randomize array in-place using Durstenfeld shuffle algorithm */
    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        console.log("Records shuffled.")
    }
}
