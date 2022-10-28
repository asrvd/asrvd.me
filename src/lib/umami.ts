async function getAccessToken() {
  const response = await fetch("https://u.asrvd.me/api/auth/login", {
    method: "POST",
    body: new URLSearchParams({
      username: process.env.UMAMI_USERNAME as string,
      password: process.env.UMAMI_PASSWORD as string,
    }),
  });

  return response.json();
}

export async function getAnalytics() {
  const resp = await getAccessToken();

  return fetch(
    `https://u.asrvd.me/api/website/5/stats?start_at=1666463400000&end_at=${Date.now()}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${resp.token}`,
      },
    }
  );
}
