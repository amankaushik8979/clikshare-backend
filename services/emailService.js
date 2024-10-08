const nodemailer = require("nodemailer");
module.exports=async ({ from, to, subject, text, html})=>{
    let transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.MAIL_USER, // generated ethereal user
            pass: process.env.MAIL_PASS, // generated ethereal password
        },
    });

    let info = await transporter.sendMail({
        from: `clikShare <${from}>`, // sender address
        to, // list of receivers
        subject, // Subject line
        text, // plain text body
        html, // html body
    });

    console.log(info);
}
// module.exports=sendMail;