<?php
// Set response content type
header('Content-Type: application/json');

// Check if the request is a POST request
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Sanitize and validate inputs
    $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $message = filter_var($_POST['message'], FILTER_SANITIZE_STRING);

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(['message' => 'Invalid email address.']);
        exit;
    }

    // Prepare the email
    $to = 'recipient@example.com'; // Replace with recipient email address
    $subject = 'Contact Form Submission';
    $body = "<strong>Name:</strong> $name<br><strong>Email:</strong> $email<br><strong>Message:</strong> <p>$message</p>";
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: $email" . "\r\n";
    
    // Send the email
    if (mail($to, $subject, $body, $headers)) {
        echo json_encode(['message' => 'Message sent successfully.']);
    } else {
        echo json_encode(['message' => 'Failed to send message.']);
    }
} else {
    echo json_encode(['message' => 'Invalid request method.']);
}
