"use client";

import { useRouter } from 'next/navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import emailjs from 'emailjs-com';

export default function Prompt() {
  const router = useRouter();

  const sendEmail = () => {
    // Email details
    const emailDetails = {
      to_name: 'Glide',  // Recipient's name (can be any name)
      from_name: 'User',  // Sender's name
      subject: 'Event Details - February 14, 2025',
      message: 'Here are the details for the event:\n\nDate: February 14, 2025\nTime: 1PM',
    };

    // Replace 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', 'YOUR_USER_ID' with your actual values
    emailjs
      .send('service_x1a0k44', 'template_bmsan1l', emailDetails, '9mCe0yApcK1N2Ye6M')
      .then(
        (response) => {
          console.log('Email sent successfully', response);
          alert('Email sent successfully!');
        },
        (error) => {
          console.error('Error sending email:', error);
          alert('Failed to send email: ' + error.text);
        }
      );
  };

  const navigateToPage = () => {
    router.push('/screens/change');  // Adjusted path to reflect the nested folder
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center min-vh-100 bg-light py-5">
      <div className="text-center mb-5">
        <h1 className="display-4 font-weight-bold text-primary">Let's Go on a Date!</h1>
        <p className="lead">Here's a quick summary:</p>
      </div>

      <div className="card p-4 shadow-lg mb-5" style={{ width: '100%', maxWidth: '500px' }}>
        <ul className="list-unstyled">
          <li><strong>Date:</strong> February 14, 2025</li>
          <li><strong>Place:</strong> Tuloy na natin yung sa Binondo hehe</li>
          <li><strong>Time:</strong> 1PM start?</li>
        </ul>
      </div>

      <div className="d-flex flex-column align-items-center gap-3">
        <button
          onClick={sendEmail}  // Trigger the email sending when clicked
          className="btn btn-primary btn-lg w-75 rounded-pill"
        >
          Okay!
        </button>
        <button
          onClick={navigateToPage}  // Navigate to the Change page when clicked
          className="btn btn-danger btn-lg w-75 rounded-pill"
        >
          hmmmm...
        </button>
      </div>
    </div>
  );
}
