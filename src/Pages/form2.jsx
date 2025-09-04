import emailjs from "emailjs-com";

function Form2() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "your_service_id",
      "your_template_id",
      e.target,
      "your_user_id"
    )
    .then(() => {
      alert("Message sent!");
    })
    .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={sendEmail}>
      <input type="text" name="name" placeholder="Your Name" />
      <input type="email" name="email" placeholder="Your Email" />
      <textarea name="message" placeholder="Your Message"></textarea>
      <button type="submit">Send</button>
    </form>
  );
}
export default Form2;