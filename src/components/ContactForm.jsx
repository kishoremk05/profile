import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      alert("Please fill in all fields.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      alert("Please enter a valid email.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3001/api/send-email", { // Replace with your backend URL
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        });
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col">
            <label htmlFor="firstName" className="text-sm mb-1">
              FIRST NAME :
            </label>
            <input
              type="text"
              id="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="p-3 border border-gray-700 bg-gray-800 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="lastName" className="text-sm mb-1">
              LAST NAME :
            </label>
            <input
              type="text"
              id="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="p-3 border border-gray-700 bg-gray-800 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm mb-1">
              EMAIL ID :
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="p-3 border border-gray-700 bg-gray-800 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="flex flex-col col-span-1 md:col-span-2">
            <label htmlFor="message" className="text-sm mb-1">
              MESSAGE :
            </label>
            <textarea
              id="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="p-3 border border-gray-700 bg-gray-800 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-vertical"
            ></textarea>
          </div>
        </div>

        <button className="bg-purple-500 text-black font-bold py-3 px-6 rounded-md text-sm mt-4 md:mt-6 hover:bg-indigo-700 transition duration-300 w-full md:w-auto">
          SUBMIT
        </button>
      </form>
    </div>
  );
}
