exports.handler = async (event) => {
  const BACKEND = "https://script.google.com/macros/s/AKfycbz5Ydr6zUhAaSj35y6aDjp3J5xmJzlET8wuHOLOu-NG-8PCkqDH34xlMXb8xgplaVRraQ/exec";
  try {
    const params = event.queryStringParameters || {};
    const url = BACKEND + '?' + new URLSearchParams(params).toString();
    const res = await fetch(url, { redirect:'follow' });
    const data = await res.text();
    return { statusCode:200, headers:{'Content-Type':'application/json','Access-Control-Allow-Origin':'*'}, body:data };
  } catch(e) {
    return { statusCode:500, body:JSON.stringify({ok:false,error:e.message}) };
  }
};
