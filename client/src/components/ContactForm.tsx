import React, { useState } from "react";
import { toast } from "sonner";
import axios from "axios";
import { FaSpinner } from "react-icons/fa";
const BACKEND_URL = "http://localhost:8000";
const ContactForm = () => {
  const [data, setData] = useState({
    fullname: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!data.fullname || !data.email || !data.phone || !data.message) {
      toast.error("Please fill all the fields");
      return;
    }
    try {
      setLoading(true);
      const res = await axios.post(`${BACKEND_URL}/api/send-email`, {
        fullname: data.fullname,
        email: data.email,
        phone: data.phone,
        message: data.message,
      });
      console.log("res", res.data);
      if (res.status === 200) {
        toast.success("Email sent successfully");
        setData({
          fullname: "",
          email: "",
          phone: "",
          message: "",
        });
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
      setLoading(false);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex contact-form flex-col z-50 gap-4 lg:w-1/2 bg-white text-black rounded-xl p-4 "
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="fullname">Name</label>
        <input
          type="text"
          id="fullname"
          placeholder="Enter your name"
          value={data.fullname}
          onChange={(e) => setData({ ...data, fullname: e.target.value })}
          className="border rounded-md px-4 py-1 bg-black/2"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
          className="border rounded-md px-4 py-1 bg-black/2"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="phone">Phone</label>
        <input
          type="text"
          id="phone"
          value={data.phone}
          onChange={(e) => setData({ ...data, phone: e.target.value })}
          placeholder="Enter your phone number"
          className="border rounded-md px-4 py-1 bg-black/2"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          placeholder="Enter your message"
          value={data.message}
          onChange={(e) => setData({ ...data, message: e.target.value })}
          className="border rounded-md px-4 py-1 min-h-44 max-h-44 overflow-scroll hide-scrollbar bg-black/2"
          data-lenis-prevent
        />
      </div>
      <button
        type="submit"
        className={`bg-black cursor-pointer hover:bg-black/90  text-white rounded-xl p-4 flex items-center justify-center`}
      >
        {loading ? <FaSpinner className="animate-spin" /> : "Send message"}
      </button>
    </form>
  );
};

export default ContactForm;
