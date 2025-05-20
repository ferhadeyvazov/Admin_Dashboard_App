import { initialType } from "../redux/reducer/auth/Type";

async function sendRegister(registerData:initialType) {
    try {
        console.log(`Datani aldim`);
        
        const response = await fetch("http://localhost:8000/api/auth/register",{
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(registerData)
        });

        if(!response.ok) {
            throw new Error(`Server Hatasi: ${response.status}`);
        }
        const result = await response.json();
        console.log(`Ugurlu Qeydiyyat: ${result}`);
        return result;
        
        
    } catch (err) {
        console.log(`Fetch erroru: ${err}`);
        throw err;
    }
}

export default sendRegister