import axios from "axios";
import getZoomAccessToken from "@/lib/get-zoom-access-toke";
import { NextResponse } from "next/server";

interface ScheduleMeetingDto {
  startTime: Date;
  timezone: string;
  attendeeEmail: string;
  name: string;
}

export async function POST(req: Request) {
  try {
    // Parse the request body
    const body: ScheduleMeetingDto = await req.json();

    const { startTime, timezone, attendeeEmail, name } = body;

    // Get Zoom access token
    const accessToken = await getZoomAccessToken();

    // Prepare Zoom meeting data
    const meetingData = {
      topic: `Meeting with ${name}`,
      type: 2,
      start_time: startTime,
      timezone,
      duration: 30,
      settings: {
        host_video: true,
        participant_video: true,
        waiting_room: true,
        approval_type: 0,
        registrants_email_notification: true,
        meeting_invitees: [
          {
            email: attendeeEmail,
            name,
          },
        ],
      },
    };

    // Send request to Zoom API to create the meeting
    const zoomRes = await axios.post(
      "https://api.zoom.us/v2/users/me/meetings",
      meetingData,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    // Return the Zoom meeting response
    return NextResponse.json({
      status: "success",
      id: zoomRes?.data?.id,
      meeting: zoomRes?.data?.join_url,
      email: attendeeEmail,
    });
  } catch (error) {
    console.error("Error scheduling Zoom meeting:", error);
    return NextResponse.json(
      { error: "Unexpected error occurred while scheduling the Zoom meeting." },
      { status: 500 }
    );
  }
}
