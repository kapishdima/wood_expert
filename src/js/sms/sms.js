const SMS_API_URL = 'https://api.turbosms.ua';
const SMS_API_KEY = '57ba4123b347f3598d6e8da3252f6b65ef886c8e';
const SEND_MESSAGE_URL = `${SMS_API_URL}/message/send.json`;

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
    recipients: ['380988666297'],
  };

  const response = await fetch(withToken(SEND_MESSAGE_URL), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(sendData),
  });

  return response.json();
};
