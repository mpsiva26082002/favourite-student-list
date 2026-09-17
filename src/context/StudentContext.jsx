import { createContext, useState } from "react";

const StudentContext = createContext();

function StudentProvider({ children }) {
  const [favourites, setFavourites] = useState([]);

  const addToFavourite = (student) => {
    const alreadyAdded = favourites.some(
      (item) => item.id === student.id
    );

    if (!alreadyAdded) {
      setFavourites([...favourites, student]);
    }
  };

  const removeFromFavourite = (id) => {
    const updatedList = favourites.filter(
      (student) => student.id !== id
    );

    setFavourites(updatedList);
  };

  return (
    <StudentContext.Provider
      value={{
        favourites,
        addToFavourite,
        removeFromFavourite
      }}
    >
      {children}
    </StudentContext.Provider>
  );
}

export { StudentContext, StudentProvider };
