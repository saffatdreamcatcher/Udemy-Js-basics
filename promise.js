const hasMeeting = false;
const meeting = new Promise((resolve, reject) => {
   if(!hasMeeting) {
    const meetingDetails = {
      name: 'Technical Meeting',
      location: 'Google Meet',
      time: '10:00 PM'
    };
    resolve(meetingDetails);
   } else {
    reject(new Error("meeting already scheduled!"));
   }
}); 

// const addToCalendar = (meetingDetails) => {
//   return new Promise((resolve, reject) => {
//   const calendar = `$(meetingDetails.name) has been scheduled on ${meetingDetails.location} at 
//   ${meetingDetails.time}`; 
//   resolve(calendar);
//   });
// }


const addToCalendar = (meetingDetails) => {
  
  const calendar = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`; 
  return Promise.resolve(calendar);
};

meeting
.then(addToCalendar)
.then((res) => {
  //resolved data
  console.log(JSON.stringify(res));
})
.catch((err) => {
  //rejected data
  console.log(err.message);
});

console.log('hey, there!')


const promise1 = Promise.resolve(`Promise 1 resolved`);

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(`Promise 2 resolved`);
  }, 2000);
});

// promise1.then((res) => console.log(res));
// promise2.then((res) => console.log(res));

// Promise.all([promise1, promise2])
// .then(res => {
//   console.log(res);
// });

Promise.race([promise1, promise2])
.then(res => {
  console.log(res);
});