var movies = [
	{
		id: 1,
		title: 'Harry Potter',
		desc: 'film o czarodzieju',
		src: "http://via.placeholder.com/350x150?text=1"
	},
	{
		id: 2,
		title: 'Król Lew',
		desc: 'Film o królu sawanny',
		src: "http://via.placeholder.com/350x150?text=2"
	},
	{
		id: 3,
		title: 'Rocky',
		desc: 'film o bokserze',
		src: "http://via.placeholder.com/350x150?text=3"
	},
	{
		id: 4,
		title: 'Shrek',
		desc: 'Film o ogrze',
		src: "http://via.placeholder.com/350x150?text=4"
	}
];


const Movie = React.createClass({
  	propTypes: {
    	movie: React.PropTypes.object.isRequired
  	},
  	render() {
    	return (
      		React.createElement('li', {},
        	React.createElement(MovieTitle, {title: this.props.movie.title}),
        	React.createElement(MovieDesc, {desc: this.props.movie.desc}),
        	React.createElement(MovieImg, {src: this.props.movie.src})
      		)
    	);
  	}
});

var MovieTitle = React.createClass({
  	propTypes: {
    	title: React.PropTypes.string.isRequired
  	},
  	render() {
    	return (
      		React.createElement('h2', {}, this.props.title)
    	);
  	}
});

var MovieDesc = React.createClass({
  	propTypes: {
    	desc: React.PropTypes.string.isRequired
  	},
  	render() {
    	return (
      		React.createElement('p', {}, this.props.desc)
    	);
  	}
});

var MovieImg = React.createClass({
  	propTypes: {
    	src: React.PropTypes.string.isRequired
  	},
  	render() {
    	return (
      		React.createElement('img', {src: this.props.src})
    	);
  	}
});

var MovieList = React.createClass({
  	propTypes: {
    	movies: React.PropTypes.array.isRequired,
  	},
  	render() {
    	var movieElements = this.props.movies.map((movie) => {
      		return React.createElement(Movie, {movie, key: movie.id});
    	});

      return (
        React.createElement('div', {},
          	React.createElement('h1', {}, 'Lista filmów'),
          	React.createElement('ul', {}, movieElements)
        )
      );
    }
});

var element = React.createElement(MovieList, {movies});

ReactDOM.render(element, document.getElementById('app'));