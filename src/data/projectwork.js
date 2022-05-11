import { v4 as uuidv4 } from 'uuid';
import Image from '../images/image.png'

const projects = [
  {
    id: uuidv4(),
    name: "PRO 1",
    desc: "A portfolio prjoject that i have been working on for the last 22 hours without eating or sleeping.",
    img: Image
  },
  {
    id: uuidv4(),
    name: "PRO 2",
    desc: "A portfolio prjoject that i have been working on for the last 22 hours without eating or sleeping.",
    img: Image
  },
  {
    id: uuidv4(),
    name: "PRO 3",
    desc: "A portfolio prjoject that i have been working on for the last 22 hours without eating or sleeping.",
    img: Image
  },
  {
    id: uuidv4(),
    name: "PRO 4",
    desc: "A portfolio prjoject that i have been working on for the last 22 hours without eating or sleeping.",
    img: Image
  }
]

export default projects