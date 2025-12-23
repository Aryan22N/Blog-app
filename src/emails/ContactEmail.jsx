export default function ContactEmail({ name, email, message }) {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", lineHeight: "1.6" }}>
      <h2>New Contact Form Message</h2>

      <p>
        <strong>Name:</strong> {name}
      </p>

      <p>
        <strong>Email:</strong> {email}
      </p>

      <p>
        <strong>Message:</strong>
      </p>

      <p>{message}</p>

      <hr />

      <p style={{ fontSize: "12px", color: "#666" }}>
        This message was sent from your website contact form.
      </p>
    </div>
  );
}
