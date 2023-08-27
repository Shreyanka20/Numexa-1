import React, { useState } from 'react';
import Image from 'next/image';
import Container from "./container";

const Hero = () => {
  const joinWaiting = (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;

    // format discord message with current geolocation, email, and browser info
    const message = `New waitlist signup from ${email}`;

    // read webhook url from env
    let discordWebhookUrl = "https://discord.com/api/webhooks/1130446443484815390/g9OWD3nUh--8i1CPQ5xJXrJmEyVcVN0LDh_m5sGOnaMkQ_5a_VGSvJHczr6vw90tOtR8";
    // send email to discord
    fetch(discordWebhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: message,
      }),
    }).then((res) => {
      alert("Thank you for joining the waitlist!");
    });
  };

  return (
    <Container className="flex flex-wrap">
      <div className="flex items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center waitlist-form" >
      <form onSubmit={joinWaiting} className="flex flex-col sm:flex-row gap-2 items-center">
  <input
    type="email"
    id="email"
    className="waitlist-input border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-4 mb-2 sm:mb-0"
    placeholder="john.doe@company.com"
    required
    style={{ width: '300px' }}
  />
  <button
    type="submit"
    className="waitlist-button text-white focus:ring-4 focus:outline-none focus:ring-blue-500 font-medium rounded-lg text-sm px-4 py-2 hover:bg-gray-500 transition-colors"
    style={{ minWidth: '150px' }}
  >
    Request Access
  </button>
</form>


      </div>

      <div className="flex items-center justify-center w-full lg:w-1/2">
        {/* Content for the center right side */}
      </div>
    </Container>
  );
};

export default Hero;
