import { initialLoginType } from "../utils/Constans";


async function sendLogin(loginData: initialLoginType) : Promise<void> {
  try {
    const response = await fetch("http://localhost:8000/api/auth/login", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginData)
    });

    const result = await response.json();
    console.log(result);
    if (!response.ok) {
      alert(result.message);
      throw new Error(`${response.statusText}-Düzgün Fetch olunmadi!`);
    }

    return result;

  }
  catch (err) {
    console.error(`apiLogin Erroru `,err);
    throw err;
  }
}

export default sendLogin