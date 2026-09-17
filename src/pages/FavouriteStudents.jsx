import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";

function FavouriteStudents() {
  const {
    favourites,
    removeFromFavourite
  } = useContext(StudentContext);

  return (
    <div className="container">

      <h1>Favourite Students</h1>

      {favourites.length === 0 ? (

        <p>No favourite students added.</p>

      ) : (

        <div className="student-list">

          {favourites.map((student) => (

            <div
              className="student-card"
              key={student.id}
            >

              <h3>{student.name}</h3>

              <p>
                Roll Number: {student.rollNo}
              </p>

              <button
                onClick={() =>
                  removeFromFavourite(student.id)
                }
              >
                Remove
              </button>

            </div>

          ))}

        </div>
      )}

    </div>
  );
}

export default FavouriteStudents;
