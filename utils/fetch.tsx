type params = {
    [key: string]: string | number
}

const getParams = (params: params): string => {
    let  paramsStr = '';
    if(params) {
        paramsStr += "?";
        Object.keys(params).forEach(key => {
            paramsStr += `${key}=${params[key]}&`
        })
    }

    return paramsStr.slice(0, -1);
}

export const  GET = async <T = unknown>(
    uri: string, 
    params: params, 
    useCache: boolean = true
) => {

    const paramsStr = getParams(params);
    const res = await fetch(`${process.env.BASE_URL_API}/${uri}${paramsStr}`, {
        method: "GET",
        cache: useCache ? "force-cache" : "no-cache",
        headers: {
            "Content-Type": "application/json"
        }
    });

    return await res.json() as T;
}


export function teste() {
    const t = {
        idade: 12,
        nome: "italo",
        altura: 2.00
    };

    console.log(getParams(t));
}