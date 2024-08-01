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

// Initialize HTML body
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
    echo json_encode(['status' => 1, 'message' => 'Contact request sent successfully']);
    
} catch (Exception $e) {
    echo json_encode(['status' => 0, 'message' => 'Message could not be sent. Mailer Error: ' . $mail->ErrorInfo]);
}
?>
