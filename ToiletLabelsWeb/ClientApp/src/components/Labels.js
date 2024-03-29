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
            var female = <td><img width="250px" onClick={voteClick} src={this.blobStoragePath + current.femalePictureLink} data-labelid={current.id} data-gender='female' alt="First label" /> </td>;
            var male = <td><img width="250px" onClick={voteClick} src={this.blobStoragePath + current.malePictureLink} data-labelid={current.id} data-gender='male' alt="Second label" /> </td>;
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
            // Send responses to server
            fetch('userresponse', {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(this.state.labelpairs)
            })
            // Rendering result table
            return (
                <div>
                    <h1>Thanks!!!</h1>
                    <p>Your results:</p>

                    <table className='table table-striped' aria-labelledby="tabelLabel">
                        <thead>
                            <tr>
                                <th>Summary</th>
                                <th>Female</th>
                                <th>Male</th>
                            </tr>
                        </thead>
                        <tbody>
                            {labelpairs.map(labelpair =>
                                <tr key={labelpair.id}>
                                    <td>
                                        <div>Place: {labelpair.placeName}</div>
                                        <div>Your vote: {labelpair.voted}</div>
                                        <div>Vote duration: {labelpair.voteDuration / 1000} seconds</div>
                                        <div>{labelpair.url}</div>
                                    </td>
                                    <td><img width="250px" src={this.blobStoragePath + labelpair.femalePictureLink} alt="Female label" /> </td>
                                    <td><img width="250px" src={this.blobStoragePath + labelpair.malePictureLink} alt="Male label" /> </td>
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
