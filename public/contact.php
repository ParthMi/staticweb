<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

// Get the raw POST data
$input = json_decode(file_get_contents("php://input"), true);

if (!$input) {
    echo json_encode(['status' => 0, 'message' => 'Invalid input']);
    exit;
}

// Extract form data
$first_name = $input['name'] ?? '';
$email = $input['email'] ?? '';
$phone = $input['phone'] ?? '';
$message = $input['details'] ?? '';
$subject = $input['subject'] ?? 'Product Inquiry'; // Default subject, modify if needed

// Initialize HTML body for contact email
$html = "";
$html .= "First Name: " . htmlspecialchars($first_name) . "<br>";
$html .= "Email: " . htmlspecialchars($email) . "<br>";
$html .= "Phone: " . htmlspecialchars($phone) . "<br>";
$html .= "Message: " . nl2br(htmlspecialchars($message)) . "<br>";

// Check if product data is present
if (isset($input['product']) && is_array($input['product'])) {
    $product = $input['product'];
    
    $html .= "<h3>Product Details:</h3>";
    $html .= "Product ID: " . htmlspecialchars($product['id']) . "<br>";
    $html .= "Product Name: " . htmlspecialchars($product['name']) . "<br>";
    $html .= "Category: " . htmlspecialchars($product['category']) . "<br>";
    $html .= "Sub-Category: " . htmlspecialchars($product['sub-cat']) . "<br>";
    $html .= "Size: " . htmlspecialchars($product['size']) . "<br>";
    $html .= "Dimension: " . htmlspecialchars($product['dimension']) . "<br>";
    $html .= "Packet: " . htmlspecialchars($product['packet']) . "<br>";
    $html .= "Cartoon: " . htmlspecialchars($product['cartoon']) . "<br>";
}

// Send the contact email
$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->SMTPDebug = 0;  // Set to 2 for debugging
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'agastyainternational0@gmail.com';
    $mail->Password   = 'hmitjhmugybtzong'; // Make sure to use environment variables for sensitive data
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; // Use PHPMailer::ENCRYPTION_STARTTLS if using TLS
    $mail->Port       = 465;

    //Recipients
    $mail->setFrom('agastyainternational0@gmail.com', 'Agastya International');
    $mail->addAddress('agastyainternational0@gmail.com'); // Add the recipient address

    // Content
    $mail->isHTML(true);
    $mail->Subject = $subject;
    $mail->Body    = $html;

    $mail->send();
    
    // Send the thank you email to the user
    $thankYouHtml = "
<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>Thank You Email</title>
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css' integrity='sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==' crossorigin='anonymous' referrerpolicy='no-referrer' />
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        .email-wrapper {
            width: 100%;
            background-color: #ffffff;
            margin: 0 auto;
            max-width: 600px;
        }
        .email-header {
            background-color: #1a202c;
            text-align: center;
            padding-block: 20px;
            border-bottom: 1px solid #e1e1e1;
        }
        .email-header img {
            max-width: 150px;
            height: auto;
        }
        .email-body {
            padding: 20px;
            color: #333333;
        }
        .email-body h1 {
            color: #333333;
            font-size: 24px;
            margin-top: 0;
        }
        .email-body p {
            font-size: 16px;
            line-height: 1.5;
        }
        .email-footer {
            text-align: center;
            padding: 20px;
            background-color: #1a202c;
            border-top: 1px solid #e1e1e1;
        }
        .email-footer p {
            font-size: 14px;
            color: #fff;
            margin: 0;
        }
        .social-icons {
            margin: 10px 0;
        }
        .social-icons a {
            display: inline-block;
            margin: 20px 10px;
            color: #f6f6f6;
            font-size: 24px;
            text-decoration: none;
        }
        .social-icons a:hover {
            color: #ffffff;
        }
        @media only screen and (max-width: 600px) {
            .email-body h1 {
                font-size: 20px;
            }
            .email-body p {
                font-size: 14px;
            }
        }
    </style>
</head>
<body>
    <div class='email-wrapper'>
        <div class='email-header'>
            <img src='https://agastya-international.com/logo.png' alt='agastya-international'>
        </div>
        <div class='email-body'>
            <center><img src='https://agastya-international.com/agastya/thankyou.jpg' alt='thank you' style='width:100%;'></center>
            <p>Dear $first_name,</p>
            <p>Thank you for contacting us. We appreciate your support and value your feedback. If you have any questions or need further assistance, please don't hesitate to reach out to us.</p>
            <p>Best regards,<br>
            Agastya International</p>
        </div>
        <div class='email-footer'>
            <p>&copy; 2024 Agastya International. All rights reserved.</p>
            <p>Surat, Gujarat | (+91) 997 884 1409</p>
            <div class='social-icons'>
                <a href='https://www.facebook.com/profile.php?id=61561396934662&mibextid=ZbWKwL' target=''>
<img width='25' height='25' src='https://agastya-international.com/agastya/social-icons/facebook.png' alt='facebook'/>
                </a>
                <a href='https://www.instagram.com/agastya.international0/' target=''>
<img width='25' height='25' src='https://agastya-international.com/agastya/social-icons/instagram.png' alt='instagram'/>                </a>
                <a href='https://wa.me/919978841409' target=''>
<img width='25' height='25' src='https://agastya-international.com/agastya/social-icons/whatsapp.png' alt='whatsapp'/>                </a>
                <a href='https://www.pinterest.com/agastyainternational0' target=''>
<img width='25' height='25' src='https://agastya-international.com/agastya/social-icons/pintrest.png' alt='pinterest'/>                </a>
                <a href='https://www.linkedin.com/in/agastya-international-7585a9319' target=''>
                    <img width='25' height='25' src='https://agastya-international.com/agastya/social-icons/linkedin.png' alt='linkedin'/>
                </a>
            </div>
        </div>
    </div>
</body>
</html>";

    $mail->clearAddresses(); // Clear previously set addresses
    $mail->addAddress($email); // Add the recipient address for thank you email

    // Content
    $mail->Subject = 'Thank You for Contacting Us';
    $mail->Body    = $thankYouHtml;

    $mail->send();
    echo json_encode(['status' => 1, 'message' => 'Contact request sent successfully and thank you email has been sent']);
    
} catch (Exception $e) {
    echo json_encode(['status' => 0, 'message' => 'Message could not be sent. Mailer Error: ' . $mail->ErrorInfo]);
}
?>
