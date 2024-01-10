async function friendlyFunction() {
  return `hello`;
}


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


const addToCalendar = (meetingDetails) => {
  const calendar = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`; 
  return Promise.resolve(calendar);
};


async function myMeeting() {
  const meetingDetails = await meeting;
  const calendar = await addToCalendar(meetingDetails);
  console.log(calendar);
}

myMeeting();

console.log(friendlyFunction());

console.log('Hello world!');