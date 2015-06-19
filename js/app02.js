// some `data` placeholder
var PERSONS = [{
	name: 'Zelda'
}, {
	name: 'Super Mario'
}];

// main container component
var Container = React.createClass({
	render: function () {

		var persons = [];

		this.props.persons.forEach(function (v, k) {
			persons.push(<Person name={v.name} />);
		});

		return (
			<div>{persons}</div>
		);

	}
});

var Person = React.createClass({
	render: function () {
		return (
			<p>{this.props.name}</p>
		);
	}
});

React.render(<Container persons={PERSONS} />, document.querySelector('#app02'));