function checkAgeNotNegative() {
  const output = document.getElementById('output');      // Container for message
  const element = document.getElementById('age');        // Input field for age
  const age = element.value;                             // Current age value
  if(age < 0) {                                          // If value is negative ...
    output.textContent = 'Age cannot be negative.';      // ... output an error ...
                                                         // ... message...
  } else {                                               // ... else ...
    output.textContent = '';                             // ... delete message.
  }
}
