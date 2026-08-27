# Design: contact-form-hardening

## Approach

### Error handling

Update the catch block in `Contact.tsx` (lines 53-56) to set an error state and display a user-visible error message instead of always showing success.

### Email validation

Add a client-side email regex check before submission. On invalid input, prevent the request and show a validation message.

### Honeypot

Add a hidden input field (`name="website"`) styled off-screen or via `display: none`. On submission, check if this field has a value — if so, silently reject the submission (respond as success to avoid tipping off bots).
