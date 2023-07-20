'use client'

import { useEffect } from "react";
import { useRouter } from 'next/navigation'
import { GET} from "@/utils/fetch";

const Login =  () => {
    const router = useRouter();
    useEffect( () => {
        fetch('http://127.0.0.1:8080/oauth2/authorize?response_type=code&client_id=lunawallet-web&state=abc&redirect_uri=http://127.0.0.1:3000/public-routes/cadastro-usuario&scope=READ&code_challenge=bKE9UspwyIPg8LsQHkJaiehiTeUdstI5JZOvaoQRgJA&code_challenge_method=S256', {
            headers: {
              'Content-Type': 'application/json',
              'cache': 'no-cache',
            }
          }).then((res) => {
            router.push(res.url);
          })
    },[router])
}


export default Login;