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
      console.log(result)
      throw new Error(result.message);
    }

    return result;

  }
  catch (err) {
    console.error(err);
    throw err;
  }
}

export default sendLogin