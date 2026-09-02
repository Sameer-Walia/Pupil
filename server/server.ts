import express, { Request, Response } from "express";
import cors from "cors";
import mongoose, { Model, Schema } from "mongoose";
import nodemailer from "nodemailer";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";
import dotenv from "dotenv";
dotenv.config();
const app = express();

app.use(cors(
    {
        origin: process.env.FRONTEND_URL,
        credentials: true
    }
));
app.use(express.json());

const port = process.env.PORT || 5556

// mongoose.connect('mongodb://127.0.0.1:27017/airtaskerdb_typescript').then(() => console.log('Connected to MongoDB'));
mongoose.connect('mongodb+srv://sameer:123@cluster0.e6krwcg.mongodb.net/pupil_detect?retryWrites=true&w=majority&appName=Cluster0').then(() => console.log('Connected to MongoDB'));

const transporter = nodemailer.createTransport(
    {
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465 port , false for other ports
        auth: {
            user: `${process.env.SMTP_UNAME}`,
            pass: `${process.env.SMTP_PASS}`
        }
    }
)

interface Signup extends Document
{
    name: string;
    address: string;
    phone: string;
    email: string;
    password: string;
    usertype: string;
    actstatus: boolean;
    token: string;
}

const SignupSchema: Schema<Signup> = new Schema<Signup>({ name: { type: String, required: true }, address: { type: String, required: true }, phone: { type: String, required: true }, email: { type: String, required: true, unique: true }, password: { type: String, required: true }, usertype: { type: String, required: true }, actstatus: { type: Boolean, required: true }, token: { type: String, required: true } }, { versionKey: false });

const SignupModel: Model<Signup> = mongoose.model<Signup>("signup", SignupSchema, "signup");

app.post("/api/signup", async (req: Request, res: Response) =>
{
    const acttoken: string = uuidv4()
    const encryp_pass: string = bcrypt.hashSync(req.body.pass, 10);

    try
    {
        const newrecord = new SignupModel({ name: req.body.name, address: req.body.address, role: req.body.role, phone: req.body.phone, email: req.body.email, password: encryp_pass, usertype: req.body.role, actstatus: false, token: acttoken })

        const result = await newrecord.save();
        if (result) 
        {
            const mailOptions = {
                from: 'waliasam13@gmail.com', // transporter username email
                to: req.body.email,             // user's email id
                subject: 'Activation Mail from 👁️_Detect.com',
                html: `Dear ${req.body.name}<br/><br/>Thanks for signing up on our website.<br/><br/>Click on the following link to activate your account.<br/><br/><a href=${process.env.FRONTEND_URL}/activateaccount?code=${acttoken}>Activate Account</a>`
            };

            transporter.sendMail(mailOptions, (error, info) =>
            {
                if (error)
                {
                    console.log(error);
                    res.send({ statuscode: 2 })
                }
                else
                {
                    console.log("Email sent: " + info.response);
                    res.send({ statuscode: 1 })
                }
            });

        }
        else
        {
            res.send({ statuscode: 0, msg: "Signup not successfull" })
        }
    }
    catch (e: any)
    {
        res.send({ statuscode: -1 })
        console.log(e.message)

    }
})

app.post("/api/resendmail", async (req: Request, res: Response) =>
{
    try 
    {
        const user = await SignupModel.findOne({ email: req.body.email });
        console.log(user)
        if (user === null) 
        {
            res.send({ statuscode: 0, msg: "User not found with given email" });
        }
        else
        {
            const updateresult = await SignupModel.updateOne({ email: req.body.email }, { $set: { actstatus: false } });
            if (updateresult.modifiedCount === 1)
            {
                const mailOptions = {
                    from: 'sameerwalia13@gmail.com',
                    to: req.body.email,
                    subject: 'Activation Mail from 👁️_Detect.com',
                    html: `Dear ${user.name}<br/><br/>Thanks for signing up on our website.<br/><br/>Click on the following link to activate your account.<br/><br/><a href=${process.env.FRONTEND_URL}/activateaccount?code=${user.token}>Activate Account</a>`
                };

                transporter.sendMail(mailOptions, (error, info) => 
                {
                    if (error) 
                    {
                        console.log(error);
                        res.send({ statuscode: 2 });
                    }
                    else 
                    {
                        console.log("Resend Email sent: " + info.response);
                        res.send({ statuscode: 1 });
                    }
                });
            }
            else
            {
                const mailOptions = {
                    from: 'sameerwalia13@gmail.com',
                    to: req.body.email,
                    subject: 'Activation Mail from 👁️_Detect.com',
                    html: `Dear ${user.name}<br/><br/>Thanks for signing up on our website.<br/><br/>Click on the following link to activate your account.<br/><br/><a href=${process.env.FRONTEND_URL}/activateaccount?code=${user.token}>Activate Account</a>`
                };

                transporter.sendMail(mailOptions, (error, info) => 
                {
                    if (error) 
                    {
                        console.log(error);
                        res.send({ statuscode: 2 });
                    }
                    else 
                    {
                        console.log("Resend Email sent: " + info.response);
                        res.send({ statuscode: 1 });
                    }
                });
            }
        }
    }
    catch (e: any) 
    {
        res.send({ statuscode: -1 })
        console.log(e.message)
    }
});


app.put("/api/activateuseraccount", async (req: Request, res: Response) =>
{
    try
    {
        const updateresult = await SignupModel.updateOne({ token: req.body.code }, { $set: { actstatus: true } });
        if (updateresult.modifiedCount === 1)
        {
            res.send({ statuscode: 1 })
        }
        else
        {
            res.send({ statuscode: 0 })
        }
    }
    catch (e: any)
    {
        res.send({ statuscode: -1 })
        console.log(e.message)
    }
})

app.post("/api/login", async (req: Request, res: Response) => 
{
    try 
    {
        const result = await SignupModel.findOne({ email: req.body.email })
        console.log(result)
        if (result === null)
        {
            res.send({ statuscode: 0 })
        }
        else
        {
            if (bcrypt.compareSync(req.body.pass, result.password))
            {

                const respdata = { _id: result._id, name: result.name, address: result.address, phone: result.phone, email: result.email, usertype: result.usertype, actstatus: result.actstatus }

                res.send({ statuscode: 1, userdata: respdata })

            }
            else
            {
                res.send({ statuscode: 0 })
            }
        }
    }
    catch (e: any) 
    {
        res.send({ statuscode: -1 })
        console.log(e.message)
    }
});

app.post("/api/logout", async (req: Request, res: Response) => 
{
    try 
    {
        res.clearCookie("authToken");
        res.clearCookie("refreshToken");
        res.clearCookie("staysignin");
        res.send({ statuscode: 1 })
    }
    catch (e: any) 
    {
        res.send({ statuscode: -1 })
        console.log(e.message)
    }
})



app.post("/api/google_login", async (req: Request, res: Response) => 
{
    try
    {
        const { email, name, googleId } = req.body;

        let user = await SignupModel.findOne({ email: email });

        if (user === null)
        {
            // create new Google user
            const newrecord = new SignupModel({ name, phone: "", email, password: "", usertype: "normal", actstatus: true, token: "", googleId: googleId });

            user = await newrecord.save();
        }


        const respdata = { _id: user._id, name: user.name, address: user.address, phone: user.phone, email: user.email, usertype: user.usertype, actstatus: user.actstatus }

        res.send({ statuscode: 1, userdata: respdata });

    }
    catch (e: any)
    {
        console.log(e);
        res.send({ statuscode: -1 });
    }
})

app.put("/api/changepassword", async (req: Request, res: Response) => 
{
    try
    {
        const result = await SignupModel.findOne({ email: req.body.uname })
        console.log(result)
        if (result === null)
        {
            res.send({ statuscode: 0 })
        }
        else
        {
            if (bcrypt.compareSync(req.body.currpass, result.password))
            {
                const encryp_newpass = bcrypt.hashSync(req.body.newpass, 10)
                const updatepass = await SignupModel.updateOne({ email: req.body.uname }, { $set: { password: encryp_newpass } })
                if (updatepass.modifiedCount === 1) 
                {
                    res.clearCookie("authToken");
                    res.clearCookie("refreshToken");
                    res.send({ statuscode: 1 })
                }
                else 
                {
                    res.send({ statuscode: 0 })
                }
            }
            else
            {
                res.send({ statuscode: 0 })
            }
        }
    }
    catch (e: any)
    {
        res.send({ statuscode: -1 })
        console.log(e.message)
    }
})



interface ResetPassword extends Document
{
    email: string;
    exptime: Date;
    token: string;
}

const ResetPassSchema: Schema<ResetPassword> = new Schema({ email: { type: String, required: true }, exptime: { type: Date, required: true }, token: { type: String, required: true }, }, { versionKey: false });

const restPassModel: Model<ResetPassword> = mongoose.model<ResetPassword>("resetpass", ResetPassSchema, "resetpass");

app.get("/api/forgotpassword", async (req: Request, res: Response) => 
{
    try 
    {
        const result = await SignupModel.findOne({ email: req.query.un })
        console.log(result)
        if (result === null)
        {
            res.send({ statuscode: 3 })
        }
        else
        {
            const passtoken = uuidv4();

            const currentDateUTC = new Date(); // Get the current Date in GMt/UTC
            const ISTOffset = 5.5 * 60 * 60 * 1000; // IST offset in milliseconds (5 hours 30 minutes)
            const fifteenminOffset = 15 * 60 * 1000; // IST offset in milliseconds (15 minutes)
            const expiretime = new Date(currentDateUTC.getTime() + ISTOffset + fifteenminOffset)  // add 15 min more

            const newrecord = new restPassModel({ email: req.query.un, exptime: expiretime, token: passtoken })
            const result2 = await newrecord.save()
            if (result2)
            {
                const mailOptions = {
                    from: 'sameerwalia13@gmail.com', // transporter username email
                    to: req.query.un as string,             // user's email id
                    subject: 'Reset Password Mail from 👁️_Detect.com',
                    html: `Dear ${result.name}<br/><br/>Click on the Following Link to Reset your Password :-.<br/><br/><a href='http://localhost:5173/resetpassword?code=${passtoken}'>Reset Password<a/>`
                };

                transporter.sendMail(mailOptions, (error, info) =>
                {
                    if (error)
                    {
                        console.log(error);
                        res.send({ statuscode: 2 })
                    }
                    else
                    {
                        console.log("Email sent: " + info.response);
                        res.send({ statuscode: 1 })
                    }
                });

            }
            else
            {
                res.send({ statuscode: 0 })
            }

        }

    }
    catch (e: any) 
    {
        res.send({ statuscode: -1 })
        console.log(e.message)
    }
});

app.get("/api/checktoken", async (req: Request, res: Response) =>
{
    const currentDateUTC = new Date(); // Get the current Date in GMt/UTC
    const ISTOffset = 5.5 * 60 * 60 * 1000; // IST offset in milliseconds (5 hours 30 minutes)
    const currtime = new Date(currentDateUTC.getTime() + ISTOffset)
    console.log(currtime)

    try
    {
        const result = await restPassModel.findOne({ token: req.query.token })
        console.log(result)
        {
            if (result === null)
            {
                res.send({ statuscode: 0 })
            }
            else
            {
                if (currtime < result.exptime)   // 5:20 < 5:30
                {
                    res.send({ statuscode: 1 })
                }
                else
                {
                    // delete Token after it get expired
                    const result2 = await restPassModel.deleteOne({ token: req.query.token })
                    if (result2.deletedCount === 1) 
                    {
                        res.send({ statuscode: 0 })
                    }
                    else 
                    {
                        res.send({ statuscode: 2 })
                    }
                }
            }
        }
    }
    catch (e: any)
    {
        res.send({ statuscode: -1 })
        console.log(e.message)
    }
})


app.put("/api/resetpassword", async (req: Request, res: Response) => 
{
    try
    {
        const result = await restPassModel.findOne({ token: req.body.token })
        console.log(result)
        if (result === null)
        {
            res.send({ statuscode: 0 })
        }
        else
        {
            const encryp_newpass = bcrypt.hashSync(req.body.newpass, 10)
            const updatepass = await SignupModel.updateOne({ email: result.email }, { $set: { password: encryp_newpass } })
            if (updatepass.modifiedCount === 1) 
            {
                res.send({ statuscode: 1 })
            }
            else 
            {
                res.send({ statuscode: 0 })
            }

        }
    }
    catch (e: any)
    {
        res.send({ statuscode: -1 })
        console.log(e.message)
    }
})

app.get("/api/fetchoneuserdata/:useremail", async (req: Request, res: Response) =>
{
    try
    {
        const result = await SignupModel.findOne({ email: req.params.useremail })
        if (result === null) 
        {
            res.send({ statuscode: 0 })
        }
        else 
        {
            res.send({ statuscode: 1, oneuserdata: result })
        }
    }
    catch (e: any)
    {
        res.send({ statuscode: -1 })
        console.log(e.message)
    }
})


app.put("/api/updateuserprofile", async (req: Request, res: Response) =>
{
    try
    {
        const updateresult = await SignupModel.updateOne({ email: req.body.email }, { $set: { name: req.body.name, phone: req.body.phone, address: req.body.address } });

        if (updateresult.modifiedCount === 1) 
        {
            res.send({ statuscode: 1 })
        }
        else 
        {
            res.send({ statuscode: 0 })
        }
    }
    catch (e: any)
    {
        res.send({ statuscode: -1 })
        console.log(e.message)
    }
})




app.listen(port, () =>
{
    console.log(`Server is running on port ${port}`)
})
