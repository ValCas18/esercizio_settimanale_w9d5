import { Component } from "react";

class FirstGallery extends Component {
	state = {
		movie: [],
	};
	componentDidMount = async () => {
		const url = "http://www.omdbapi.com/?apikey=4fd34cc&s&type=movie&s=";
		try {
			const response = await fetch(url + this.props.title);
			if (response.ok) {
				const newMovie = await response.json();
				this.setState({ movie: newMovie.Search });
			}
		} catch (err) {
			console.log(err);
		}
	};

	render() {
		return (
			<div>
				<h4 className="text-white container-fluid">Trending Now</h4>
				<div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
					{this.state.movie.map((film) => (
						<div key={film.imdbId} className="col mb-2 text-center px-1">
							<img className="container-fluid" src={film.Poster} alt="locandina" />
						</div>
					))}
				</div>
			</div>
		);
	}
}

export default FirstGallery;
