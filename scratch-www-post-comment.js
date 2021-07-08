async function postData(url = 'https://api.scratch.mit.edu/proxy/comments/studio/5842709', data = {}) {
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({"content":"test","parent_id":"","commentee_id":""})
  });
}
