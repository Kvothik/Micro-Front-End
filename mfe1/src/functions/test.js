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
    console.log('1');
    try {
        const res = await fetch('http://localhost:8080/createTest', {
            method: 'POST',
            headers: { 'Accept': 'application/jsons', 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        console.log(data);
        console.log('2');
        return await res.json();
    } catch (err) { console.log(err); }
}
