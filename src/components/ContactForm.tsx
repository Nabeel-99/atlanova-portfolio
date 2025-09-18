const ContactForm = () => {
  return (
    <form className="flex contact-form flex-col gap-4 lg:w-1/2 bg-white text-black rounded-xl p-4 ">
      <div className="flex flex-col gap-2">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          placeholder="Enter your name"
          className="border rounded-md px-4 py-1 bg-black/2"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          className="border rounded-md px-4 py-1 bg-black/2"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email">Phone</label>
        <input
          type="text"
          id="phone"
          placeholder="Enter your phone number"
          className="border rounded-md px-4 py-1 bg-black/2"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          placeholder="Enter your message"
          className="border rounded-md px-4 py-1 min-h-44 bg-black/2"
        />
      </div>
      <button type="submit" className="bg-black text-white rounded-xl p-2">
        Send message
      </button>
    </form>
  );
};

export default ContactForm;
