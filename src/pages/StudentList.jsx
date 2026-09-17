import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";

function StudentList() {
  const {
    favourites,
    addToFavourite
  } = useContext(StudentContext);

  const students = [
    {
      id: 1,
      name: "Arun",
      rollNo: "101"
    },
    {
      id: 2,
      name: "Bala",
      rollNo: "102"
    },
    {
      id: 3,
      name: "Karthik",
      rollNo: "103"
    },
    {
      id: 4,
      name: "Sanjay",
      rollNo: "104"
    },
    {
      id: 5,
      name: "Vijay",
      rollNo: "105"
    }
  ];

  return (
    <div className="container">

      <h1>Student List</h1>

      <div className="student-list">

        {students.map((student) => {

          const isFavourite = favourites.some(
            (item) => item.id === student.id
          );

          return (
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
                  addToFavourite(student)
                }
                disabled={isFavourite}
              >
                {isFavourite
                  ? "Added to Favourite"
                  : "Add to Favourite"}
              </button>

            </div>
          );
        })}

      </div>

    </div>
  );
}

export default StudentList;
