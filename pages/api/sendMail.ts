"use strict";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default function sendGmail(req: NextApiRequest, res: NextApiResponse) {

    //transporter
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: process.env.GMAILUSER,
          pass: process.env.GMAILPASSWORD
        }
      });
    
    const toHostMailData = {
        from: req.body.email,
        to: process.env.GMAILUSER,
        subject: `[${req.body.subject}] From${req.body.name}`,
        html: 
        `
            <p>【NAME】</p>
            <p>${req.body.name}</p>
            <p>【MESSAGE】</p>
            <p>${req.body.message}</p>
            <p>【MAIL ADDRESS】</p>
            <p>${req.body.email}</p>

        `
    };

    transporter.sendMail(toHostMailData, function (err, info) {
        if (err) console.log(err);
        else console.log(info);
    });

    return res.send("成功しました")
}