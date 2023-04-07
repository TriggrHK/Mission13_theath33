import data from '../json/MovieData.json';

const MDS = data.MovieData;

function MovieList() {
  return (
    <>
      <div>
        <h3>Joel Hilton's Movie Collection</h3>
      </div>

      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Title</th>
            <th>Year</th>
            <th>Director</th>
            <th>Rating</th>
            <th>Category</th>
            <th>Edited</th>
          </tr>
        </thead>

        <tbody>
          {MDS.map((m) => (
            <tr key={m.Title}>
              <td>{m.Title}</td>
              <td>{m.Year}</td>
              <td>{m.Director}</td>
              <td>{m.Rating}</td>
              <td>{m.Category}</td>
              <td>{m.Edited}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default MovieList;
