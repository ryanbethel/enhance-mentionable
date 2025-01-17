const myContent = 'https://making-2c4.begin.app/'
const mentions = {
  'https://nature-6o8.begin.app/webmention': { // Cole
    source: myContent,
    target: 'https://nature-6o8.begin.app/',
  },
  'https://making-2c4.begin.app/webmention': { // Taylor
    source: myContent,
    target: 'https://making-2c4.begin.app/',
  },
  'https://rain-5h6.begin.app/webmention': { // KJ
    source: myContent,
    target: 'https://rain-5h6.begin.app/',
  },
  'https://tbeseda.com/webmention': { // tbeseda.com test article
    source: myContent,
    target: 'https://tbeseda.com/articles/2023/01/webmention-test',
  },
}

for (const [endpoint, webmention] of Object.entries(mentions)) {
  const response = await fetch(endpoint, {
    method: 'POST',
    body: new URLSearchParams(webmention),
  })

  let message
  if (response.ok) {
    const contentType = response.headers.get('content-type')
    message = contentType?.startsWith('application/json')
      ? await response.json()
      : await response.text()
  } else {
    message = `Error ${response.status}: ${response.statusText}`
  }

  console.log(message)
}

