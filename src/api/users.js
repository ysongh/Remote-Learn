import { headers } from '../config';

const url1 = 'https://api.quickbase.com/v1/records/query';

export const signInAPI = async (email, password) => {
    try{
        const res = await fetch(url1, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({
                "from":"bq63pu96d",
                "sortBy": [
                    {
                      "fieldId": 1,
                      "order": "DESC"
                    },
                ],
                "where":`{6.CT.${email}}`,
                "select":[3,6,7]
            })
        });
        const { data } = await res.json();

        if(!data.length) return false;
        if(data[0][7].value === password) return true;
        
        return false;
    } catch(err) {
        console.error(err);
        return false;
    }
}
