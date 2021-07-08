async function postData(url = 'https://api.scratch.mit.edu/proxy/comments/studio/5842709', data = {}) {
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify({"content":"test","parent_id":"","commentee_id":""})
  });
  return response.json();
}
