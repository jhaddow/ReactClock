var Clock = React.createClass({
	getTime: function() {
		var date = new Date();
		var hours = date.getHours() % 12 || 12;
		var minutes = date.getMinutes();
		var seconds = date.getSeconds();
		if (minutes < 10) {
			minutes = '0' + minutes.toString();
		}
		if(seconds < 10) {
			seconds = '0' + seconds.toString();
		}
		return {hours: hours, minutes: minutes, seconds: seconds};

	},
	getInitialState: function() {
		
		return this.getTime();
	},
	componentDidMount: function() {
		setInterval(function() {
			this.setState(this.getTime());
		}.bind(this), 1000);
	},
	render: function() {
		
		return (
			<div className="clock">
				{this.state.hours} : {this.state.minutes} : {this.state.seconds}
			</div>
		)
	}
});

React.render(
	<Clock />,
	document.getElementById('content')
)