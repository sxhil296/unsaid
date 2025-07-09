import axios from "axios";

export async function submitMessage({
  to,
  message,
  bgColor,
  textColor,
}: {
  to: string;
  message: string;
  bgColor: string;
  textColor: string;
}) {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/messages`,
      {
        to,
        message,
        bgColor,
        textColor,
      }
    );
    return { success: true, data: response.data };
  } catch (error: any) {
    const errorMessage =
      error?.response?.data?.error || "Server error. Please try again.";
    return { success: false, error: errorMessage };
  }
}

interface FetchMessagesParams {
  page?: number;
  limit?: number;
  search?: string;
  color?: string;
}

export async function fetchMessages(params: FetchMessagesParams = {}) {
  try {
    const query = new URLSearchParams();

    if (params.page) query.append("page", params.page.toString());
    if (params.limit) query.append("limit", params.limit.toString());
    if (params.search) query.append("search", params.search);
    if (params.color) query.append("color", params.color);

    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/messages?${query.toString()}`
    );

    return { success: true, data: response.data };
  } catch (error: any) {
    const errorMessage =
      error?.response?.data?.error || "Server error. Please try again.";
    return { success: false, error: errorMessage };
  }
}

export async function fetchMessageById(id: string) {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/messages/${id}`
    );
    return { success: true, data: response.data };
  } catch (error: any) {
    const errorMessage =
      error?.response?.data?.error || "Server error. Please try again.";
    return { success: false, error: errorMessage };
  }
}
