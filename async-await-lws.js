async function hello() {
  return 'Hello';
}

console.log(hello());

const paymentSuccess = true;
const marks = 90;

function getCertificate() {
  console.log('Preparing your certificate!');

  const promise = new Promise (function(resolve) {
    setTimeout(function(){
      resolve("congrats! You got the certificate");
    }, 1000);
  });

  return promise;
}


async function course() {
  try {
  await enroll();
  await progress();
  const message = await getCertificate();

  console.log(message);
}
catch(err) {
  console.log(err);
}
}

course();