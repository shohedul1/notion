import { NextResponse } from "next/server";
import nodemailer from 'nodemailer';



export async function POST(req: Request) {
    if (req.method === 'POST') {

        try {
            const {
                first_name,
                last_name,
                email,
                conpany_name,
                help,
                company_size,
                info } = await req.json();

            const transport = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 465,
                secure: true,
                auth: {
                    user: 'shohidulpramanik94@gmail.com',
                    pass: 'wdpp xial itsy igjp'
                }

            });


            const mailOptions = {
                from: email,
                to: "shohidulpramanik94@gmail.com",
                subject: "Contact Form Submission",
                html: `
                <h1>Contact Form</h1>
                <p><strong>First Name:<strong/>${first_name}<p/>
                <p><strong>Last Name:<strong/>${last_name}<p/>
                <p><strong>Email:<strong/>${email}<p/>
                <p><strong>Company Name:<strong/>${conpany_name}<p/>
                <p><strong>Company Size:<strong/>${company_size}<p/>
                <p><strong>Help:<strong/>${help}<p/>
                <p><strong>Info:<strong/>${info}<p/>

                `
            }

            await transport.sendMail(mailOptions);
            return NextResponse.json({ message: 'email has ben sent' })

        } catch (error) {
            console.log(error)
            return NextResponse.json({ message: 'mail has not been sent' })
        }
    } else {
        return NextResponse.json({ message: 'Method is not allow' })

    }
}