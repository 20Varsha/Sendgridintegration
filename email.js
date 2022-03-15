

const sgMail = require('@sendgrid/mail');
const apikey='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'
sgMail.setApiKey(apikey)
const msg = {
  to: 'sooraj.vidyasagar@urolime.com',
  from: 'varsha.monachan@urolime.com',
  subject: 'Sending with Twilio SendGrid is Fun',
  text: 'And easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};
sgMail.send(msg);
