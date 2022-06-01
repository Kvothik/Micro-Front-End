export const getTest = async () => {
    try {
        const res = await fetch('http://localhost:8080/test', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json',
            },
        });
        return await res.json();
    } catch (err) { }
}
export async function createTest(data) {
    try {
        const res = await fetch('http://localhost:8080/createTest', {
            method: 'POST',
            headers: { 'Accept': 'application/jsons', 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        return await res.json();
    } catch (err) { console.log(err); }
}
export const getMerlin = async () => {
    try {
        const res = await fetch('http://localhost:8080/merlin/', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json',
                // will need this if we setup user auth/permissions
                // 'Authorization': 'Bearer' + credentials
            },
        });
        return await res.json();
    } catch (err) { }
}
