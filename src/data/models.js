// DATA SCHEMA

const class_type = {
  yoga: 'yoga',
  weightlifting: 'weightlifting',
  boxing: 'boxing',
  bootcamp: 'bootcamp'
}

const class_intensity = {
  beginner: 'beginner',
  intermediate: 'intermediate',
  expert: 'expert'
}

const user_roles = {
  student: 'student',
  instructor: 'instructor'
}

// new user POST request sends a user{} authcode object;
// if role === instructor then
// if authcode matches then create user with role = instructor else throw()

const user = {
  email: '', // string
  password: '', // string
  role: 'student', // 'student' / 'instructor' / string

  // stretch - payment
  credit_card: '', // string
  credit_card_exp: '', // string
  credit_card_cvv: '', // string
  phone: '', // string

  name: 'Ahmed', // string
  zip: '', // string
}

const purchases = {
  user: '', //
  amount: '', //
  fitclass: 0 // class reference
}

const student_classes = {
  user: '', // user email / id
  fitclass: 0 // class id
}

const fitclass = {
  id: 0,
  name: '', // string
  type: '', // class_type
  start_time: '', // string (utc)
  duration: '', // number (minutes)
  intensity: '', // class_intensity
  location: '', // string: zip code
  attendees: '', // number (calculated)
  max_attendees: '', // number (specified by Instructor)
  // NEW
  instructorId: 0

}

const authcode = 'abc'

const classes = [
  {
    "id":1,
    "name":"Etiam pretium iaculis justo.",
    "type":"Weight Lifting",
    "start_date":"10/12/2019",
    "start_time":"8:56 PM",
    "duration":111,
    "intensity":"expert",
    "location":"2415",
    "attendees":10,
    "max_attendees":21,
    "instructorId":88
  },
{"id":2,"name":"Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.","type":"Yoga","start_date":"6/9/2020","start_time":"1:57 PM","duration":17,"intensity":"expert","location":"14140-000","attendees":10,"max_attendees":20,"instructorId":55}]

const instructors = [
  {
    "id":1,
    "first_name":"Rowe",
    "last_name":"Stopher",
    "email":"rstopher0@4shared.com",
    "instructor":1
  },
{"id":2,"first_name":"Charmane","last_name":"Calkin","email":"ccalkin1@goodreads.com","instructor":1},
{"id":3,"first_name":"Lewes","last_name":"Dalla","email":"ldalla2@tmall.com","instructor":1},
{"id":4,"first_name":"Madel","last_name":"Linguard","email":"mlinguard3@blogger.com","instructor":1}]
