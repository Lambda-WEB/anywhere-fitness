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

}

const authcode = 'abc'
