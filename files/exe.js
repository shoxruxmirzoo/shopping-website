
async function notifyCustomer() {
  const customer = await getCustomer(1);
  console.log('Customer: ', customer);
  if (customer.status === 'Gold') {
    const books = await getTopBooks();
    console.log(`Top books: ${books}`);
    await sendEmail(customer.email, books);
    console.log('Email sent to',customer.email);
  }
}
notifyCustomer();

function getCustomer(id) {
  return new Promise( (resolve, reject) => {
    setTimeout( () => {
      resolve({
        id: 1,
        name: 'Shoxruxmirzo',
        status: 'Gold',
        email: 'shokhrukhmirzo2403@gmail.com'
      });
    }, 2000);
  });
}

function getTopBooks() {
  return new Promise( (resolve, reject) => {
    setTimeout( () => {
      console.log('Qidirilmoqda...');
      resolve([ 'Becoming', 'Boburnoma', 'Sherlock Holmes' ]);
    },2000);
  });
}

function sendEmail(email, books){
  return new Promise( (resolve, reject) => {
    resolve();
  })
}




getCustomer(1, (customer) => {
  console.log('Customer: ', customer);
  if (customer.isGold) {
    getTopMovies((movies) => {
      console.log('Top movies: ', movies);
      sendEmail(customer.email, movies, () => {
        console.log('Email sent...')
      });
    });
  }
});
