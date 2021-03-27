import smtplib, ssl
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def sendMail(sender, name,subject, messageContent):
    smtp_server = "smtp.gmail.com"
    sender_email = "email@example.com"
    receiver_email = "email@example.com"
    password = 'PASSWORD'

    message = MIMEMultipart()
    message["Subject"] = f"{subject}"
    message["From"] = sender
    message["To"] = receiver_email

    html = f"""\
    <html>
        <body>
        <p><b>Name:</b> {name}<br><b>Email:</b> {sender}<br></p>
        <p><b>Message:</b> <br>{ messageContent }</p>
        </body>
    </html>
    """

    # Turn these into plain/html MIMEText objects
    part = MIMEText(html, "html")

    # Add HTML/plain-text parts to MIMEMultipart message
    # The email client will try to render the last part first
    message.attach(part)

    # Create secure connection with server and send email
    context = ssl.create_default_context()
    with smtplib.SMTP_SSL(smtp_server, 465, context=context) as server:
        server.login(sender_email, password)
        server.sendmail(
            sender_email, receiver_email, message.as_string()
        )
