addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url);
  const path = url.pathname;
  let length = 32; // Longitud predeterminada si no se especifica

  if (path !== '/') {
    const pathMatch = path.match(/^\/(\d+)$/);
    if (pathMatch) {
      length = parseInt(pathMatch[1], 10);
    }
  }

  const randomString = generateRandomString(length);
  return new Response(randomString, { status: 200 })
}

function generateRandomString(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
  
  let randomString = '';
  
  for (let i = 0; i < length; i++) {
    randomString += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  
  return randomString;
}
