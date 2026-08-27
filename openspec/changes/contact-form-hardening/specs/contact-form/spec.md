# Spec: contact-form

## ADDED Requirements

### Error Handling

- The form **SHALL** display an error message to the user when form submission fails
- The form **SHALL NOT** show a success message when the submission actually failed

### Email Validation

- The form **SHALL** validate the email field against a client-side email regex pattern
- The form **SHALL** prevent submission if the email does not match the regex

### Spam Prevention

- The form **SHALL** include a hidden honeypot field that bots will fill but humans will not
- The form **SHALL** reject submissions where the honeypot field is populated
