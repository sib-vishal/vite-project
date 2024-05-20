import { NextResponse } from "next/server";
import { sendMail } from "./sendMail";

export async function POST(req, res) {
  try {
    const reqBody = await req.json();
    const { name, phoneNo, companyName, websiteUrl, email, fromWhere } =
      reqBody;
    // const { name } = reqBody;

    const template = `
    <p>Dear Admin,</p>
    <p>You have :</p>
    <table width='500' border='1' cellspacing='0'>
        <tr>
            <td style='padding:10px;' width='250'>Full Name</td>
            <td style='padding:10px;'>${name}</td>
        </tr>
      <tr>
            <td style="padding:10px;" width="250">
              Company Name
            </td>
            <td style="padding:10px;">${companyName}</td>
          </tr>
        <tr>
      <tr>
            <td style="padding:10px;" width="250">
            Website Url
            </td>
            <td style="padding:10px;">${websiteUrl}</td>
          </tr>
        <tr>
            <td style='padding:10px;' width='250'>Email</td>
            <td style='padding:10px;'>${email}</td>
        </tr>
        <tr>
            <td style='padding:10px;' width='250'>Phone Number</td>
            <td style='padding:10px;'>${phoneNo}</td>
        </tr>

        <tr>
            <td style='padding:10px;' width='250'>From Where</td>
            <td style='padding:10px;'>${fromWhere}</td>
        </tr>
    </table>`;

    await sendMail(
      "Received An Enquiry Request", //subject
      "vishalmauryaab@gmail.com", //EmailTO
      template //Message
    );

    return NextResponse.json({
      message: "Success",
      template,
    });
  } catch (err) {
    return NextResponse.json({
      message: "Error in sending email",
      error_code: "error in api",
    });
  }
}
