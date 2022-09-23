import axios from "axios";
// import useSWR from "swr";

const api_emailjs = `https://api.emailjs.com/api/v1.0/email/send-form`;
// const fetcher = (url) => axios.get(url).then((res) => res.data);

const sendEmail = async (emailData) => {
  try {
    const formData = new FormData();
    formData.append("service_id", "service_pbepe6l");
    formData.append("template_id", "template_26u1393");
    formData.append("user_id", "user_YpEbYgtGPJeFvbRNuV1dv");

    // proceed to append all form
    Object.entries(emailData).forEach(([k, v]) => {
      // skip fields with empty value
      if (v !== "") {
        formData.append(k, v);
      }
    });

    const response = await axios.post(`${api_emailjs}`, formData);
    console.log(
      "🚀 ~ file: sendEmail.js ~ line 23 ~ sendEmail ~ response",
      response
    );
    return response;
  } catch (error) {
    console.log(error);
  }
  //   //   if (!emailData) throw new Error("Invalid email data");

  //   const getKey = () => {
  //     return `${api_emailjs}`;
  //   };

  //   const options = {
  //     // initialSize: limit,
  //     // revalidateAll: false,
  //     // revalidateFirstPage: true,
  //     // persistSize: false
  //   };

  //   const { data, error, isValidating, mutate } = useSWR(
  //     getKey,
  //     fetcher,
  //     options
  //   );

  //   const sendEmail = async (emailData) => {
  //     try {
  //       const response = await axios.post(`${api_emailjs}`, emailData);
  //       await mutate(getKey);
  //       return response;
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   return {
  //     data,
  //     error,
  //     isValidating,
  //     mutate,
  //     sendEmail,
  //   };
};

export default sendEmail;
