
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_KEY)

export default function handler(req, res) {
    const msg = {
        to: 'chirageminem6@gmail.com',
        from: 'chiragparihar@cmail.carleton.ca', // Use the email address or domain you verified above
        subject: 'Porfolio contact' + ' From:' + req.body.email + ' Name: '+req.body.name,
        text: req.body.message,
        html: `<strong>Contact from portfolio <p>${req.body.message}</p></strong>`,
      };
   
      sgMail
      .send(msg)
      .then(() => {
          res.status(200).send();
      }, error => {
        console.error(error);
        res.status(201).send();
    
        if (error.response) {
          console.error(error.response.body)
        }
      });
    
}
  