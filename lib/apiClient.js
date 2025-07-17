const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "https://your-api.com";

// Helper to build full URL with query params
const buildUrl = (endpoint, params = {}) => {
  const url = new URL(`${API_BASE_URL}${endpoint}`);
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      url.searchParams.append(key, value);
    }
  });
  return url.toString();
};

// Token getter
const getAuthHeaders = () => {
  const token = typeof window !== "undefined" ? localStorage.getItem("accessToken") : null;
  return token ? { Authorization: `Bearer ${token}` } : {};
};

// Generic GET request
export const getApi = async (endpoint, params = {}, customHeaders = {}) => {
  const url = buildUrl(endpoint, params);
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      ...getAuthHeaders(),
      ...customHeaders,
    },
  });

  if (!res.ok) throw new Error(`GET ${url} failed with status ${res.status}`);
  return res.json();
};

// Generic POST request
export const postApi = async (endpoint, data = {}, isFormData = false, customHeaders = {}) => {
  const body = isFormData ? data : JSON.stringify(data);

  const res = await fetch(`${API_BASE_URL}${endpoint}`, {
    method: "POST",
    headers: {
      ...(isFormData ? {} : { "Content-Type": "application/json" }),
      ...getAuthHeaders(),
      ...customHeaders,
    },
    body,
  });

  if (!res.ok) throw new Error(`POST ${endpoint} failed with status ${res.status}`);
  return res.json();
};

// Generic PUT request
export const putApi = async (endpoint, data = {}, isFormData = false, customHeaders = {}) => {
  const body = isFormData ? data : JSON.stringify(data);

  const res = await fetch(`${API_BASE_URL}${endpoint}`, {
    method: "PUT",
    headers: {
      ...(isFormData ? {} : { "Content-Type": "application/json" }),
      ...getAuthHeaders(),
      ...customHeaders,
    },
    body,
  });

  if (!res.ok) throw new Error(`PUT ${endpoint} failed with status ${res.status}`);
  return res.json();
};








// Usage of APi's
// await getApi("/users");
// const data = await getApi("/leaderboard", {
//     limit: 10,
//     period: "monthly",
//     offset: 0,
//   });
// await postApi("/login", { email, password });
// await putApi("/profile", formData, true);
