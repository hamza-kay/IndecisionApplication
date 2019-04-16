class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecsion';
        const subtitle = 'Put your life in the hands of a computer'
        const options = ['thing one', 'thing two', 'thing three', 'thing four'];
        return (
            <div>
              <Header title={title} subtitle={subtitle} />
              <Action />
              <Options options={options}/>
              <AddOption />
            </div>
        )
    }
}


class Header extends React.Component {
    render() {
        
        return (
            <div>
            <h1>{this.props.title}</h1>
            <h2>{this.props.subtitle}</h2>
            </div>
        )
    }
    

}

class Action extends React.Component {
    handlePick() {
       alert('handlePick')
    }
    render() {
        return (
            <div>
            <button onClick={this.handlePick}>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    handleRemoveAll() {
       alert('removed all')
    }
    render() {
        return (
            <div>
            Options component here
            {
                this.props.options.map((option) => <Option key={option} optionText={option}/>)
            }

            <button onClick={this.handleRemoveAll}>Remove all</button>
            </div>
        )
    }
}

class AddOption extends React.Component {
    render() {
        return (
            <div>
            AddOption component here
            </div>
        )
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
            {this.props.optionText}
            </div>
        )
    }
}



ReactDOM.render(<IndecisionApp />, document.getElementById('app'))