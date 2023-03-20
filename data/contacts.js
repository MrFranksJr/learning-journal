import { emailAddress } from "./data.js";

const buttonsOnContacts = document.getElementById('contact-buttons')

buttonsOnContacts.innerHTML += `<a class="home-button" href="mailto:${emailAddress}" alt="send me an email"><i class="fa-solid fa-envelope">&nbsp;</i>Send me an email</a>`