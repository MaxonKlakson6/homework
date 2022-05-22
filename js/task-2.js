const IsEven = (value) => {
  return value % 2 === 0;
};

const makeCapitalLetter = (str) => {
  const lowerCaseStr = str.toLowerCase();
  return lowerCaseStr[0].toUpperCase() + lowerCaseStr.slice(1);
};

// task 1

const incrementArrayNumbers = (numbersArray) => {
  return numbersArray.map((number) =>
    IsEven(number) ? number + 1 : number - 1
  );
};

// task 2

const capitalizeArrayElements = (stringArray) => {
  return stringArray.map((stringValue) => makeCapitalLetter(stringValue));
};

// task 3

const deleteUsersById = (userList, idList) => {
  return userList.filter(({ id }) => !idList.includes(id));
};

// task 4

const isPolindrome = (word) => {
  const reverseWord = [...word].reverse().join("");

  return reverseWord.toLowerCase() === word.toLowerCase();
};

// task 5

const handlingUsers = (userList) => {
  const men = [];
  const women = [];

  userList.forEach(({ gender, first_name, last_name, ...otherFields }) => {
    const user = {
      gender,
      fullName: `${first_name} ${last_name}`,
      ...otherFields,
    };
    gender.toLowerCase() === "male" ? men.push(user) : women.push(user);
  });

  return { men, women };
};

// task 6

const deleteFields = (releses) => {
  return releses.map(({ id, title }) => ({ id, title }));
};

// task 7

const filterByRating = (releses) => {
  const neededRating = 5.0;
  return releses.filter(({ rating }) => {
    return rating === neededRating;
  });
};
