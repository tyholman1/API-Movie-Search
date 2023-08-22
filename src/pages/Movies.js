function MovieDisplay({ movie }) {
  const loaded = () => {
    return (
      <>
        <h1>{movie.title}</h1>
        <h2>{movie.year}</h2>
        <h2>{movie.streamingInfo}</h2>
      </>
    );
  };

  const loading = () => {
    return <h1>No Movie to Display</h1>;
  };

  return movie ? loaded() : loading();
}

export default MovieDisplay;