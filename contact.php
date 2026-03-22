<?php
require_once "includes/db.php";
require_once "includes/functions.php";

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $payload = json_decode(file_get_contents("php://input"), true) ?: $_POST;
    
    $name = trim($payload["name"] ?? "");
    $email = trim($payload["email"] ?? "");
    $userMessage = trim($payload["message"] ?? "");

    if (!$name || !$email || !$userMessage) {
        json_response(["ok" => false, "error" => "All fields are required."], 400);
    }

    $stmt = $db->prepare("INSERT INTO messages (name, email, message) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $name, $email, $userMessage);
    
    if ($stmt->execute()) {
        json_response(["ok" => true, "message" => "Your message has been sent successfully!"]);
    } else {
        json_response(["ok" => false, "error" => "Failed to send message."], 500);
    }
    $stmt->close();
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Us | Recipe Realm</title>
    <meta name="description" content="Get in touch with the Recipe Realm creators.">
    <link rel="stylesheet" href="css/style.css?v=<?=filemtime('css/style.css')?>">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        .contact-hero {
            text-align: center;
            padding: 60px 20px;
            background: linear-gradient(135deg, var(--primary-light), #fff);
            margin-bottom: 40px;
        }
        .contact-hero h1 {
            font-size: 2.8rem;
            color: var(--primary-color);
            margin-bottom: 10px;
        }
        .contact-wrapper {
            max-width: 1000px;
            margin: 0 auto 60px auto;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 40px;
            padding: 0 20px;
        }
        .contact-details {
            background: #fff;
            padding: 40px;
            border-radius: 12px;
            box-shadow: var(--card-shadow);
        }
        .contact-details h3 {
            font-size: 1.5rem;
            margin-bottom: 20px;
            color: var(--text-dark);
        }
        .contact-item {
            display: flex;
            align-items: center;
            gap: 15px;
            margin-bottom: 25px;
        }
        .contact-item i {
            font-size: 1.5rem;
            color: var(--primary-color);
            width: 30px;
            text-align: center;
        }
        .contact-item p {
            margin: 0;
            font-size: 1.1rem;
            color: var(--text-color);
        }
        .contact-item a {
            color: var(--primary-color);
            text-decoration: none;
            font-weight: 500;
        }
        .contact-item a:hover {
            text-decoration: underline;
        }
        @media (max-width: 768px) {
            .contact-wrapper {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>

    <!-- Navigation -->
    <nav class="navbar">
        <div class="logo">
            <i class="fas fa-utensils"></i>
            <span>Recipe Realm</span>
        </div>
        <ul class="nav-links">
            <li><a href="index.php#home" class="nav-link">Home</a></li>
            <li><a href="index.php#discovery" class="nav-link">Recipes</a></li>
            <li><a href="contact.php" class="nav-link active">Contact Us</a></li>
        </ul>
        <div class="nav-actions">
            <!-- Simple redirect for login since logic is on index -->
            <a href="index.php#login" class="btn login-btn">Login / Signup</a> 
        </div>
    </nav>

    <!-- Main Content Area -->
    <main id="main-content">
        <div class="contact-hero">
            <h1>Get In Touch</h1>
            <p>We'd love to hear from you. Reach out to our team below!</p>
        </div>

        <div class="contact-wrapper">
            <!-- Details -->
            <div class="contact-details">
                <h3>Contact Information</h3>
                <div class="contact-item">
                    <i class="fas fa-code"></i>
                    <div>
                        <p style="font-weight: 600; color: #333;">Developed by</p>
                        <p>Dilusha and Vishvi</p>
                    </div>
                </div>
                <div class="contact-item">
                    <i class="fas fa-phone-alt"></i>
                    <div>
                        <p style="font-weight: 600; color: #333;">Phone Number</p>
                        <p><a href="tel:0710484573">0710484573</a></p>
                    </div>
                </div>
                <div class="contact-item">
                    <i class="fas fa-envelope"></i>
                    <div>
                        <p style="font-weight: 600; color: #333;">Email Addresses</p>
                        <p><a href="mailto:dilushawijesinghe1@gmail.com">dilushawijesinghe1@gmail.com</a></p>
                        <p style="margin-top: 5px;"><a href="mailto:amayamannage@gmail.com">amayamannage@gmail.com</a></p>
                    </div>
                </div>
            </div>

            <!-- Form -->
            <div class="form-container" style="max-width: 100%; margin: 0; box-shadow: var(--card-shadow);">
                <form id="contact-form">
                    <h3 style="margin-bottom: 20px; font-size: 1.5rem; text-align: left;">Send a Message</h3>
                    <div class="form-group">
                        <label for="contact-name">Name</label>
                        <input type="text" id="contact-name" placeholder="Your Name" required>
                    </div>
                    <div class="form-group">
                        <label for="contact-email">Email</label>
                        <input type="email" id="contact-email" placeholder="you@example.com" required>
                    </div>
                    <div class="form-group">
                        <label for="contact-message">Message</label>
                        <textarea id="contact-message" placeholder="How can we help?" required style="height: 120px;"></textarea>
                    </div>
                    <button type="submit" class="btn submit-btn">Send Message</button>
                    <p id="contact-status" style="margin-top: 15px; font-weight: 500;"></p>
                </form>
            </div>
        </div>
    </main>

    <!-- Footer -->
    <footer>
        <span class="footer-logo"><i class="fas fa-utensils"></i> Recipe Realm</span>
        <div class="social-links">
            <a href="#"><i class="fab fa-facebook"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-pinterest"></i></a>
        </div>
        <p class="copyright">&copy; 2026 Recipe Realm. All rights reserved. Built for University Project.</p>
    </footer>

    <script>
        document.getElementById('contact-form')?.addEventListener('submit', async (e) => {
            e.preventDefault();
            const name = document.getElementById('contact-name').value;
            const email = document.getElementById('contact-email').value;
            const message = document.getElementById('contact-message').value;
            const statusLabel = document.getElementById('contact-status');
            
            statusLabel.style.color = '#333';
            statusLabel.textContent = 'Sending message...';

            try {
                const response = await fetch('contact.php', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ name, email, message })
                });
                const payload = await response.json();
                
                if (response.ok && payload.ok) {
                    statusLabel.style.color = '#27ae60';
                    statusLabel.textContent = payload.message || 'Your message has been sent successfully!';
                    e.target.reset();
                } else {
                    statusLabel.style.color = '#e74c3c';
                    statusLabel.textContent = payload.error || 'Failed to send message.';
                }
            } catch (err) {
                statusLabel.style.color = '#e74c3c';
                statusLabel.textContent = 'Network error. Please try again later.';
            }
        });
    </script>
</body>
</html>
