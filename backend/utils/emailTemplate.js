export function inquiryEmailTemplate(data) {

    const {
        name,
        email,
        company,
        phone,
        industry,
        message
    } = data;

    const date = new Date().toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
        dateStyle: "full",
        timeStyle: "short"
    });

    return `
    <!DOCTYPE html>

    <html>

    <body style="font-family:Arial;background:#f7f7f7;padding:30px;">

        <table
            style="
            max-width:700px;
            margin:auto;
            background:white;
            border-radius:12px;
            overflow:hidden;
            border:1px solid #ddd;
            ">

            <tr>
                <td
                    style="
                    background:#0A0F1A;
                    color:white;
                    padding:25px;
                    text-align:center;
                    ">
                    <h2>🌍 IndoEx Global</h2>
                    <p>New B2B Sourcing Inquiry</p>
                </td>
            </tr>

            <tr>
                <td style="padding:30px;">

                    <h3>Customer Details</h3>

                    <table width="100%" cellpadding="8">

                        <tr>
                            <td><b>Name</b></td>
                            <td>${name}</td>
                        </tr>

                        <tr>
                            <td><b>Email</b></td>
                            <td>${email}</td>
                        </tr>

                        <tr>
                            <td><b>Company</b></td>
                            <td>${company || "-"}</td>
                        </tr>

                        <tr>
                            <td><b>Phone</b></td>
                            <td>${phone || "-"}</td>
                        </tr>

                        <tr>
                            <td><b>Industry</b></td>
                            <td>${industry}</td>
                        </tr>

                    </table>

                    <hr>

                    <h3>Customer Requirement</h3>

                    <p style="white-space:pre-line;">
                        ${message}
                    </p>

                    <hr>

                    <small>

                        Submitted on

                        ${date}

                    </small>

                </td>

            </tr>

        </table>

    </body>

    </html>
    `;
}