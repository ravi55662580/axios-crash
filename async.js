console.log('person1 shows ticket');
console.log('person2 shows ticket');

const preMovieAsyncAwait = async () => {
  try {
    const person3PromiseToShowTicketWhenWifeArrives = new Promise((resolve) => {
      setTimeout(() => resolve('ticket'), 3000);
    });

    const getPopcorn = new Promise((resolve) => {
      setTimeout(() => resolve('popcorn'), 3000);
    });

    const addButter = new Promise((resolve) => {
      setTimeout(() => resolve('butter'), 3000);
    });

    const getColdDrinks = new Promise((resolve) => {
      setTimeout(() => resolve('cold drinks'), 2000);
    });

    let ticket = await person3PromiseToShowTicketWhenWifeArrives;

    console.log(`got the ${ticket}`);
    console.log(`Husband: we should go in now`);
    console.log(`Wife: "I am hungry"`);

    let popcorn = await getPopcorn;
    console.log(`Husband: here is ${popcorn}`);
    console.log(`Husband: we should go in now`);
    console.log(`Wife: "I don't like popcorn without butter!"`);

    let butter = await addButter;
    console.log(`added ${butter}`);

    let coldDrinks = await getColdDrinks;
    console.log(`got the ${coldDrinks}`);

    console.log(`Husband: Anything else darling`);
    console.log(`Wife: let's go, we are going to miss the preview`);
    console.log(`Husband: thanks for the reminder *grin*`);

    return ticket;
  } catch (error) {
    console.error('Error:', error);
  }
};

const preMoviePromise = () => {
  const person3PromiseToShowTicketWhenWifeArrives = new Promise((resolve) => {
    setTimeout(() => resolve('ticket'), 3000);
  });

  const getPopcorn = new Promise((resolve) => {
    setTimeout(() => resolve('popcorn'), 3000);
  });

  const addButter = new Promise((resolve) => {
    setTimeout(() => resolve('butter'), 3000);
  });

  const getColdDrinks = new Promise((resolve) => {
    setTimeout(() => resolve('cold drinks'), 2000);
  });

  return person3PromiseToShowTicketWhenWifeArrives
    .then((ticket) => {
      console.log(`got the ${ticket}`);
      console.log(`Husband: we should go in now`);
      console.log(`Wife: "I am hungry"`);

      return getPopcorn;
    })
    .then((popcorn) => {
      console.log(`Husband: here is ${popcorn}`);
      console.log(`Husband: we should go in now`);
      console.log(`Wife: "I don't like popcorn without butter!"`);

      return addButter;
    })
    .then((butter) => {
      console.log(`added ${butter}`);

      return getColdDrinks;
    })
    .then((coldDrinks) => {
      console.log(`got the ${coldDrinks}`);

      console.log(`Husband: Anything else darling`);
      console.log(`Wife: let's go, we are going to miss the preview`);
      console.log(`Husband: thanks for the reminder *grin*`);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
};

// Use async/await with Promise.all
const handlePreMovieAsyncAwait = async () => {
  try {
    const [result1, result2] = await Promise.all([
      preMovieAsyncAwait(),
      updateLastUserActivityTime(),
    ]);

    console.log('Result 1:', result1);
    console.log('Result 2:', result2);

    // Continue with other operations...
  } catch (error) {
    console.error('Error:', error);
  }
};

// Use promises with Promise.all
const handlePreMoviePromise = () => {
  Promise.all([preMoviePromise(), updateLastUserActivityTime()])
    .then(([result1, result2]) => {
      console.log('Result 1:', result1);
      console.log('Result 2:', result2);

      // Continue with other operations...
    })
    .catch((error) => {
      console.error('Error:', error);
    });
};

// Example usage
handlePreMovieAsyncAwait();
handlePreMoviePromise();
