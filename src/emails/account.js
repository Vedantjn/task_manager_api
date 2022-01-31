const sgMail=require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail=(user,name)=>{
    sgMail.send({
        to:email,
        from:'vedant@jain.io',
        subject:'Thanks for joining in!',
        text:`Welcome to the app, ${name}. LET ME KNOW HOW YOU GET ALONG WITH THE APP.`
    })
}

const sendCancelationEmail=(email,name)=>{
    sgMail.send({
        to:email,
        from:'vedant@jain.io',
        subject:'Sorry to see you go!',
        text:`Goodbye ${name}, I hope to see you back sometime soon.`
    })
}

module.exports={
    sendWelcomeEmail,
    sendCancelationEmail
}