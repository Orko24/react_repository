import React from 'react';

export default function Kotlin(props) {
  return (
    <svg width={256} height={256} viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M0 256L128.427 127.573L256 256H0Z" fill="url(#paint0_linear)" />
      <path d="M0 0H128.427L0 138.667V0Z" fill="url(#paint1_linear)" />
      <path d="M128.427 0L0 135.253V256L128.427 127.573L256 0H128.427Z" fill="url(#paint2_linear)" />
      <defs>
        <linearGradient id="paint0_linear" x1="68.0934" y1="315.794" x2="103.924" y2="173.423" gradientUnits="userSpaceOnUse">
          <stop offset="0.09677" stopColor="#0095D5" />
          <stop offset="0.3007" stopColor="#238AD9" />
          <stop offset="0.6211" stopColor="#557BDE" />
          <stop offset="0.8643" stopColor="#7472E2" />
          <stop offset={1} stopColor="#806EE3" />
        </linearGradient>
        <linearGradient id="paint1_linear" x1="17.9593" y1="51.4522" x2="93.1442" y2="-13.0382" gradientUnits="userSpaceOnUse">
          <stop offset="0.1183" stopColor="#0095D5" />
          <stop offset="0.4178" stopColor="#3C83DC" />
          <stop offset="0.6962" stopColor="#6D74E1" />
          <stop offset="0.8333" stopColor="#806EE3" />
        </linearGradient>
        <linearGradient id="paint2_linear" x1="-43.1006" y1="235.366" x2="195.121" y2="-2.85611" gradientUnits="userSpaceOnUse">
          <stop offset="0.1075" stopColor="#C757BC" />
          <stop offset="0.2138" stopColor="#D0609A" />
          <stop offset="0.4254" stopColor="#E1725C" />
          <stop offset="0.6048" stopColor="#EE7E2F" />
          <stop offset="0.743" stopColor="#F58613" />
          <stop offset="0.8232" stopColor="#F88909" />
        </linearGradient>
      </defs>
    </svg>
  );
}
