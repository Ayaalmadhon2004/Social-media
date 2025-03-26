import messagePerson1 from "../Assets/Images/01-person2.jpg";
import messagePerson2 from "../Assets/Images/02-person3.jpg";
import messagePerson3 from "../Assets/Images/07-DLMl_mTI.jpg";
import messagePerson4 from "../Assets/Images/person5.jpg";
import messagePerson5 from "../Assets/Images/person6.jpg";

const messageUsers = [
    { id: 1, img: messagePerson1, name: "France Geo",job:"Web developer", desc: "France sent a photo", state: "online" ,followed:"true"},
    { id: 2, img: messagePerson2, name: "Lori Ferguson", job:"Web developer",desc: "You missed a call from Lori", state: "offline",followed:"true" },
    { id: 3, img: messagePerson3, name: "Samo Lanson", job:"Web developer",desc: "France sent a photo", state: "online",followed:"false" },
    { id: 4, img: messagePerson4, name: "Judy Naven",job:"Web developer",desc: "France sent a photo", state: "offline" ,followed:"true"},
    { id: 5, img: messagePerson5, name: "Dennis Barry",job:"Web developer", desc: "France sent a photo", state: "online" ,followed:"false"}
  ];
export default messageUsers;