// task 1

const incrementArrayNumbers = (numbersArray) => {
  return numbersArray.map((number) => {
    return number % 2 === 0 ? (number += 1) : (number -= 1);
  });
};

// task 2

const capitalizeArrayElements = (stringArray) => {
  return stringArray.map((stringValue) => {
    return stringValue[0].toUpperCase() + stringValue.slice(1).toLowerCase();
  });
};

// task 3

const deleteUsersById = (userList, idList) => {
  return userList.filter(({ id }) => {
    return !idList.includes(id);
  });
};

// task 4

const isPolindrome = (word) => {
  const reverseWord = Array.from(word).reverse().join("");

  return reverseWord.toLowerCase() === word.toLowerCase();
};

// task 5

const handlingUsers = (userList) => {
  const men = [];
  const women = [];

  userList.forEach(({ gender, first_name, last_name, ...otherFields }) => {
    gender.toLowerCase() === "male"
      ? men.push({
          gender,
          fullName: `${first_name} ${last_name}`,
          ...otherFields,
        })
      : women.push({
          gender,
          fullName: `${first_name} ${last_name}`,
          ...otherFields,
        });
  });

  return { men, women };
};

// task 6

const deleteFields = (releses) => {
  return releses.map(({ id, title }) => {
    return { id, title };
  });
};

// task 7

const filterByRating = (releses) => {
  const neededRating = "5.0";
  return releses.filter(({ rating }) => {
    return `${rating.toString()}.0` === neededRating;
  });
};
