import { initialType } from "../redux/reducer/auth/Type";

async function sendRegister(registerData:initialType) {
    try {
        console.log(`Sorğunu aldim`);
        
        const response = await fetch("/api/api/auth/register",{
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(registerData)
        });

        const result = await response.json();
        if(!response.ok) {
            console.log(result);
            alert(result.message);
            throw new Error(`Server Responded vith status: ${response.status}`);
        }
        console.log(`Ugurlu Qeydiyyat: `, result);
        
        return result;
        
        
    } catch (err) {
        console.error(`Fetch erroru Budur=>: ${err}`);
        throw err;
    }
}

export default sendRegister