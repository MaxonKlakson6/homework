// task 1

const createNewObject = (videosList) => {
  return videosList.reduce((accum, { id, title }) => {
    accum[id] = title;
    return accum;
  }, {});
};

//task 2

const findMaxArea1 = (figures) => {
  const areaList = figures.map(({ width, height, url }) => {
    return { area: width * height, url };
  });

  const result = areaList.reduce((accum, figure) => {
    if (accum.area < figure.area) {
      accum = figure;
    }
    return accum;
  });

  return result.url;
};

const findMaxArea2 = (figures) => {
  let result = figures[0];

  figures.forEach((figure) => {
    const maxFigureArea = result.width * result.height;
    const currentFigureArea = figure.width * figure.height;

    maxFigureArea < currentFigureArea ? (result = figure) : result;
  });
  return result.url;
};

const findMaxArea3 = (figures) => {
  return figures.reduce((accum, figure, index) => {
    const accumArea = accum.width * accum.height;
    const figureArea = figure.width * figure.height;

    if (accumArea < figureArea) {
      accum = figure;
    }

    if (index === figures.length - 1) {
      return accum.url;
    }

    return accum;
  }, figures[0]);
};

// task 3

const findCommonNumber = (numbersList) => {
  let temp = 0;
  let result;

  const numberCounter = numbersList.reduce((accum, currentNumber) => {
    if (accum[currentNumber]) {
      accum[currentNumber] += 1;
    } else {
      accum[currentNumber] = 1;
    }
    return accum;
  }, {});

  Object.entries(numberCounter).forEach(([key, value]) => {
    if (temp < value) {
      temp = value;
      result = key;
    }
  });

  return Number(result);
};

// task 4

const isEmpty = (value) => {
  return value === undefined || value === null;
};

const deleteEmptyFields = (object) => {
  return Object.entries(object).reduce((accum, [key, value]) => {
    if (!isEmpty(value)) {
      accum[key] = value;
    }
    return accum;
  }, {});
};

// task 5

// const onceMeetedNumber = (numbersList) => {
//   const numberCounter = {};
//   let result = -1;

//   numbersList.forEach((number) => {
//     if (numberCounter[number]) {
//       numberCounter[number] += 1;
//     } else {
//       numberCounter[number] = 1;
//     }
//   });

//   const counterArray = Object.entries(numberCounter);

//   for (let i = 0; i < counterArray.length; i++) {
//     if (counterArray[i][1] === 1) {
//       return counterArray[i][0];
//     }
//   }

//   return Number(result);
// };

const onceMeetedNumber = (numberList) => {
  return numberList.reduce(
    (accum, number, index, array) =>
      array.indexOf(number) === array.lastIndexOf(number)
        ? (accum = number)
        : accum,
    -1
  );
};

// task 6

const cutString = (string, stringLength) => {
  return string.length <= stringLength
    ? string
    : `${string.slice(0, stringLength)}...`;
};

// task 7

const delay = async (time) => {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
};
