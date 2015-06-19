var Form = React.createClass({
    getInitialState: function() {
        return { name: '', age: '' };
    },
    
    handleChange: function(fieldName) {
        return function(e) {
            var state = {};
            state[fieldName] = e.target.value;
            this.setState(state);
        }.bind(this);
    },
    
    handleSubmit: function(e) {
        e.preventDefault();
        var person = { name: this.state.name, age: this.state.age };
        this.props.onSubmit(person);
        this.setState(this.getInitialState());
    },
    
    render: function() {
        return (
            <form>
                <input placeholder="name" type="text" value={this.state.name} onChange={this.handleChange('name')} />
                <input placeholder="age" type="text" value={this.state.age} onChange={this.handleChange('age')} />
                <input type="submit" onClick={this.handleSubmit} />                
            </form>
        );
    }
});

var App = React.createClass({
    getInitialState: function() {
        return {
            people: []
        }
    },
    
    handleSubmit: function(person) {
        var people = this.state.people;
        people.push(person);
        this.setState({ people: people });
    },
    
    render: function() {
        return (
            <div>
                <ul>
                    {this.state.people.map(function(p) { return (
                        <li>{p.name} ({p.age} years old)</li>
                    ); })}
                </ul>
                <Form onSubmit={this.handleSubmit} />
            </div>
        );
    }
});
 
React.render(<App />, document.querySelector('#app03'));