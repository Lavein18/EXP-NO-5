const validateForm = () => {
 let data = [
 {
 value: "firstName",
 invalidType: true,
 regex: /[0-9]\W/g,
 },
 {
 value: "lastName",
 invalidType: true,
 regex: /[0-9]\W/g,
 },
 {
 value: "mobileNumber",
 invalidType: true,
 regex: /.{11,}|[\D]/g,
 },
 {
 value: "email",
 invalidType: false,
 regex: /[@].+[.].+/,
 },
 {
 value: "password",
 invalidType: true,
 regex: /[A-Z][a-z][0-9][/W][$]/,
 },
 {
 value: "confirmPassword",
 invalidType: true,
 regex: /./,
 },
 ];
 //if true then invalid
 for (let field of data) {
 let domData = document.querySelector(`#${field.value}`).value;
 console.log(field.regex.test(field.value), field.value, domData);
 let invalidLabel = "";
 if (
 (field.invalidType && field.regex.test(domData)) ||
 (!field.invalidType && !field.regex.test(domData)) ||
 domData === ""
 ) {
console.log(field.value);
 invalidLabel = `Please enter a valid ${field.value}`;
 } else {
 invalidLabel = "";
 }
 console.log(field.value);
 document.querySelector(`#${field.value}Invalid`).innerHTML = invalidLabel;
 }
};
