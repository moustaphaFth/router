import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function MovieList({ movies, onMovieClick }) {
	return (
		<div>
			<h1>Movie List</h1>
			<hr />
			<div className="movie-list">
				{movies.map((movie, index) => (
					<div key={index} className="movie-card">
						<Card style={{ width: "18rem" }}>
							{/* Apply the fixed width and height styles to the image container */}
							<div className="card-img">
								<Card.Img variant="top" src={movie.image} />
							</div>
							<Card.Body>
								<Card.Title>{movie.title}</Card.Title>
								<Button onClick={() => onMovieClick(index)} variant="primary">
									Watch Trailer
								</Button>
							</Card.Body>
						</Card>
					</div>
				))}
			</div>
		</div>
	);
}

export default MovieList;
