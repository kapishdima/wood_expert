import { normalizePhoneValue } from '../input-tel';

const SMS_API_URL = process.env.SMS_API_URL;
const SMS_API_KEY = process.env.SMS_API_KEY;
const SEND_MESSAGE_URL = `${SMS_API_URL}/message/send.json`;

const isDevelopment = process.env.NODE_MODE === 'development';

const withToken = (url) => {
  return `${url}?token=${SMS_API_KEY}`;
};

export const sendSMS = async (phone, message) => {
  if (!message || !phone) {
    return;
  }

  const sendData = {
    sms: {
      sender: 'WoodExpert',
      text: message,
    },
    recipients: [normalizePhoneValue(phone)],
  };

  if (isDevelopment) {
    console.log(sendData);
    return;
  }

  const response = await fetch(withToken(SEND_MESSAGE_URL), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(sendData),
  });

  return response.json();
};
