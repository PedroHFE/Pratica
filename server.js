/*
async function calcular(){
    const options = {
    method: 'POST',
    headers: {
        Accept: 'application/json',
        'Access-Control-Allow-Origin':'*',
        'Origin' : '*',
        'Content-Type': 'application/json',
        Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNTc1ZmUwMWQ0ZmM0NjFjNWVlOGNjOGY1OTQ1Nzg3ZGNiY2NmM2E0ZjBmMDY5YmMwZjUxZjhlOGE5YWM5OWVhYjQwNDI0Yjc0MzJmNTBiODgiLCJpYXQiOjE3MTkzNDg4MTAuNzA3ODk4LCJuYmYiOjE3MTkzNDg4MTAuNzA3OSwiZXhwIjoxNzUwODg0ODEwLjY5NjkyNiwic3ViIjoiOWM1ZjZlZGEtMDRjMS00ZGY2LTk2YjMtYjIyOGRhYThhMjUxIiwic2NvcGVzIjpbInNoaXBwaW5nLWNhbGN1bGF0ZSJdfQ.2WOfsdIgMJNtJHnRraQAlA47JtAyuTCF98NibIbkrGDzJEKpTMWEtsjWBopbY6JsYKktIyBL76yax-G3erLNF25G2dofUFOHz91fcGQuonvn69iwDOl859cN3t8_GrSpJjOqSyAkB0ZWT718kVLSE6K88djvsZMqEbRc5I6zN-PJiERQiOuBcRF0xCAI5YIU4Qd3iC4WFs55PeFLoaS7TDsNpjKsSPuH3pRApoicQbHzlsqPdY1mUq-hQSeJiM8hLdgwggIwjG73k53tAhmBeNq2eQU0_CuPthhdNQ3vyCi6lYnCrS4pOthCBKikkVahwH4rHTQh_uamOGu4LApZrjRtdmU4dBrv_y2W6NcKgJ2NaOt3OtoZeaJkminMBc2sicJMpAABR4vRoUbdICkwvXa-3Gc4fhFa8ZD4ZAlSMHz_wuQND3Tne_tc6q-rux90aq16PHGhT_QcbvPacUxlLZ3lXl2pyc3xVL-xfhroEYxkTVI05qcbtcotwVlvZiEJuochp9K97du9NmiA7ZCsPZUkq2eCnS7fDxZ_ZC3EU2X_t3mL_wiWGeFillEHc_Kpn5YK4QwCDWB0ZmoHLqfHY3uRMX5Mq20l7lR3q4YDNY-nW_KISXW-e1LUqjpV1uN_GekZv19m7BlvwmIbQNUwugKP21P1Wp17v2bQKnWRcOs',
        'User-Agent': 'Aplicação pdro.hf@gmail.com',
    } };
    fetch('https://www.melhorenvio.com.br/api/v2/me/shipment/calculate'+ options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

const cors = require("cors")
const express = require('express')
const app = express()
const axios = require('axios')
app.use(cors)
app.get('/', async(req, res) => { 
    const response = await axios('https://www.melhorenvio.com.br/api/v2/me/shipment/calculate'+ options)
    return res.json(req)
})}
console.log(calcular())

    const options = {
    method: 'POST',
    headers: {
        'Access-Control-Allow -Origin': 'http://127.0.0.1:5500',
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNTc1ZmUwMWQ0ZmM0NjFjNWVlOGNjOGY1OTQ1Nzg3ZGNiY2NmM2E0ZjBmMDY5YmMwZjUxZjhlOGE5YWM5OWVhYjQwNDI0Yjc0MzJmNTBiODgiLCJpYXQiOjE3MTkzNDg4MTAuNzA3ODk4LCJuYmYiOjE3MTkzNDg4MTAuNzA3OSwiZXhwIjoxNzUwODg0ODEwLjY5NjkyNiwic3ViIjoiOWM1ZjZlZGEtMDRjMS00ZGY2LTk2YjMtYjIyOGRhYThhMjUxIiwic2NvcGVzIjpbInNoaXBwaW5nLWNhbGN1bGF0ZSJdfQ.2WOfsdIgMJNtJHnRraQAlA47JtAyuTCF98NibIbkrGDzJEKpTMWEtsjWBopbY6JsYKktIyBL76yax-G3erLNF25G2dofUFOHz91fcGQuonvn69iwDOl859cN3t8_GrSpJjOqSyAkB0ZWT718kVLSE6K88djvsZMqEbRc5I6zN-PJiERQiOuBcRF0xCAI5YIU4Qd3iC4WFs55PeFLoaS7TDsNpjKsSPuH3pRApoicQbHzlsqPdY1mUq-hQSeJiM8hLdgwggIwjG73k53tAhmBeNq2eQU0_CuPthhdNQ3vyCi6lYnCrS4pOthCBKikkVahwH4rHTQh_uamOGu4LApZrjRtdmU4dBrv_y2W6NcKgJ2NaOt3OtoZeaJkminMBc2sicJMpAABR4vRoUbdICkwvXa-3Gc4fhFa8ZD4ZAlSMHz_wuQND3Tne_tc6q-rux90aq16PHGhT_QcbvPacUxlLZ3lXl2pyc3xVL-xfhroEYxkTVI05qcbtcotwVlvZiEJuochp9K97du9NmiA7ZCsPZUkq2eCnS7fDxZ_ZC3EU2X_t3mL_wiWGeFillEHc_Kpn5YK4QwCDWB0ZmoHLqfHY3uRMX5Mq20l7lR3q4YDNY-nW_KISXW-e1LUqjpV1uN_GekZv19m7BlvwmIbQNUwugKP21P1Wp17v2bQKnWRcOs',
        'User-Agent': 'Aplicação pdro.hf@gmail.com',
    },
    body: JSON.stringify({
        from: {postal_code: '08472-724'},
        to: {postal_code: '030435800'},
        package: {height: 7, width: 5, length: 20, weight: 0.5}
    })
    };
    fetch('https://sandbox.melhorenvio.com.br/api/v2/me/shipment/calculate'+ options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
    resp = document.getElementsByTagName('div')
    resp.innerText = response

    const data = JSON.stringify({
        from: {
        postal_code: '01002001'
        },
        to: {
        postal_code: '030435800'
        },
        package: {
        height: 7,
        width: 5,
        length: 20,
        weight: 0.5
        }
        });
        const xhr = new XMLHttpRequest();
        xhr.withCredentials = true;
        xhr.addEventListener('readystatechange', function () {
        if (this.readyState === this.DONE) {
        console.log(this.responseText);
        }
        });
        xhr.open('POST', 'https://www.melhorenvio.com.br/api/v2/me/shipment/calculate');
        xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
        xhr.setRequestHeader('Accept', 'application/json');
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.setRequestHeader('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMjM4YjMwZTZiZGUyZGMzYzk2ZGM0YTVkZmY2MGUxNmNlNTdiYjYyNjhmMzcwMGYzNmI4YzI4NjllMDExNzUyNTA2ODlhZDA1MDY3YmI3MGQiLCJpYXQiOjE3MTk0MjczMzEuNDk1MDg3LCJuYmYiOjE3MTk0MjczMzEuNDk1MDksImV4cCI6MTc1MDk2MzMzMS40NzYzNSwic3ViIjoiOWM1ZjZlZGEtMDRjMS00ZGY2LTk2YjMtYjIyOGRhYThhMjUxIiwic2NvcGVzIjpbInNoaXBwaW5nLWNhbGN1bGF0ZSJdfQ.uV8iC3N_AL4sQN2zBt0qtSkoQ7T3NcDcn_trNAta5oCY9q82hl24HUmrPd_FCNDswIcwd2tncqyZF1cvkYXRdkpyy_qfqUjEYRJWql2PdksQp6kwjSHB-CNHGTFePv10xlumV_Sv0OpAgj23djJhb68gfdtdmVHXtSxP7KUbWBQr99ilUxgYMOuX9HsrGQ_JizFLhd2Da2b7bZ5cAewIll9GWZ8iyRuwabqmCdHHfEjip5gldgeWDVk-fu3NtMf-JwPlVmR2fkRWWTiWmyHSSKVFDsAHUpZeect8ooiNSa8hH53JDV0n8oTcPVlngTOoXnbpBVBvFfF02anAPCfCfQtOhIMr6txltX3ftsxZnB3r6N2Yv6xe9eBpppoCMhtQsZDvQGActZPBNGrMrzIPeSqDKK8Wd_tg6_8Bf5KSE4ZCKTvg9DVB1jw8x9KjxOBKbd767Aj0w-gv_T_C0-rkVIzUA8kLtGa7joOdwOAxBZWdCa99Tz4SE1w1tB0YtJHQ5iYYfMmV06Zp3hhkeA_tjBYXBZ0kGwwDtp0usYk2Yj2yKronCwOp3YcH7wZrMftkrb7jtJvRXcJyypk6L0tEpjpWJW8759PLFMJT78uARQRKLahCIHNFsSnaeObDTzi_kS1MCoGmGP-2kCDVWkcu9w4u87QGNpH7Rgbefo51pPo');
        xhr.setRequestHeader('User-Agent', 'pdro.hf@gmail.com');
        xhr.send(data);
    console.log(data)
    console.log(xhr)     
    
    const express = require('express')
    const cors = require('cors')
    const app = express()
    require(statusbar)
    app.use(cors())
    app.use(express.json)
    
    
    const options2 = {
    method: 'POST',
    headers: {
        Accept: 'application/json',
        'Access-Control-Allow-Origin':'http://127.0.0.1:5500/',
        'Origin' : '*',
        'Content-Type': 'application/json',
        Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNTc1ZmUwMWQ0ZmM0NjFjNWVlOGNjOGY1OTQ1Nzg3ZGNiY2NmM2E0ZjBmMDY5YmMwZjUxZjhlOGE5YWM5OWVhYjQwNDI0Yjc0MzJmNTBiODgiLCJpYXQiOjE3MTkzNDg4MTAuNzA3ODk4LCJuYmYiOjE3MTkzNDg4MTAuNzA3OSwiZXhwIjoxNzUwODg0ODEwLjY5NjkyNiwic3ViIjoiOWM1ZjZlZGEtMDRjMS00ZGY2LTk2YjMtYjIyOGRhYThhMjUxIiwic2NvcGVzIjpbInNoaXBwaW5nLWNhbGN1bGF0ZSJdfQ.2WOfsdIgMJNtJHnRraQAlA47JtAyuTCF98NibIbkrGDzJEKpTMWEtsjWBopbY6JsYKktIyBL76yax-G3erLNF25G2dofUFOHz91fcGQuonvn69iwDOl859cN3t8_GrSpJjOqSyAkB0ZWT718kVLSE6K88djvsZMqEbRc5I6zN-PJiERQiOuBcRF0xCAI5YIU4Qd3iC4WFs55PeFLoaS7TDsNpjKsSPuH3pRApoicQbHzlsqPdY1mUq-hQSeJiM8hLdgwggIwjG73k53tAhmBeNq2eQU0_CuPthhdNQ3vyCi6lYnCrS4pOthCBKikkVahwH4rHTQh_uamOGu4LApZrjRtdmU4dBrv_y2W6NcKgJ2NaOt3OtoZeaJkminMBc2sicJMpAABR4vRoUbdICkwvXa-3Gc4fhFa8ZD4ZAlSMHz_wuQND3Tne_tc6q-rux90aq16PHGhT_QcbvPacUxlLZ3lXl2pyc3xVL-xfhroEYxkTVI05qcbtcotwVlvZiEJuochp9K97du9NmiA7ZCsPZUkq2eCnS7fDxZ_ZC3EU2X_t3mL_wiWGeFillEHc_Kpn5YK4QwCDWB0ZmoHLqfHY3uRMX5Mq20l7lR3q4YDNY-nW_KISXW-e1LUqjpV1uN_GekZv19m7BlvwmIbQNUwugKP21P1Wp17v2bQKnWRcOs',
        'User-Agent': 'Aplicação pdro.hf@gmail.com',
    } };
    fetch('https://www.melhorenvio.com.br/api/v2/me/shipment/calculate'+ options2)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
    */
