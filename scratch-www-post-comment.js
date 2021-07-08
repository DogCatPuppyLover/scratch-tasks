async function postData(url = 'https://api.scratch.mit.edu/proxy/comments/studio/29963772', data = {}) {
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({"content":"test","parent_id":"","commentee_id":""})
  });
}
