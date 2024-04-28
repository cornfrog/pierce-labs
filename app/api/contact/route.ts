import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import nodemailer from 'nodemailer';
import { serializeZodErrors } from "@/app/helpers";

export async function POST(request: NextRequest) {

    const formData = await request.formData();
    const contactName = formData.get("name");
    const contactEmail = formData.get("email");
    const messageSubject = formData.get("subject");
    const message = formData.get("message");

    const sentMessage = {
        name: contactName,
        email: contactEmail,
        subject: messageSubject
    }

    const messageSchema = z.object({
        name: z.string().min(1),
        email: z.string().email(),
        subject: z.string().min(1)
    });

    try {
        messageSchema.parse(sentMessage);
        const nodeMailerTransporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            auth: {
                user: process.env.NODEMAILER_ACCOUNT,
                pass: process.env.NODEMAILER_ACCOUNT_SECRET
            }
        })
        try {

            const mail = await nodeMailerTransporter.sendMail({
                from: process.env.NODEMAILER_ACCOUNT,
                to: process.env.NODEMAILER_ACCOUNT,
                replyTo: contactEmail?.toString(),
                subject: messageSubject?.toString(),
                html: `
                <p>Name: ${contactName} </p>
                <p>Email: ${contactEmail} </p>
                <p>Message: ${message} </p>
                `,
            })
            return NextResponse.json({ message: "Message Sent Successfully!" }, { status: 200 });
        } catch (error) {
            console.log(error)
            return NextResponse.json({ message: "Error: Could not send email. Try again later." }, {status: 500})
        }
    } catch (errors: any) {
        const errorList = serializeZodErrors(errors.errors);
        return NextResponse.json({ errors: errorList }, { status: 400 });
    }
}