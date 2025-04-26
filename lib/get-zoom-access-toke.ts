import axios, { isAxiosError } from "axios";

export default async function getZoomAccessToken(): Promise<string> {
  const clientId = process.env.ZOOM_CLIENT_ID;
  const clientSecret = process.env.ZOOM_CLIENT_SECRET;
  const accountId = process.env.ZOOM_ACCOUNT_ID;

  if (!clientId || !clientSecret || !accountId) {
    throw new Error("Missing Zoom credentials in environment variables.");
  }

  const base64String = Buffer.from(`${clientId}:${clientSecret}`).toString(
    "base64"
  );

  try {
    const response = await axios.post(
      `https://zoom.us/oauth/token?grant_type=account_credentials&account_id=${accountId}`,
      null,
      {
        headers: {
          Authorization: `Basic ${base64String}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    return response.data.access_token;
  } catch (error) {
    if (isAxiosError(error)) {
      console.error(
        "Failed to get Zoom access token:",
        error.response?.data || error.message
      );
    } else {
      console.error("Failed to get Zoom access token:", error);
    }
    throw new Error("Failed to retrieve Zoom access token.");
  }
}
