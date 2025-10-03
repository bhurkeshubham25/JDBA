// src/utils/api.js
const BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

export const authenticatedFetch = async (endpoint, options = {}) => {
  const token = localStorage.getItem("token");

  // If options.body is FormData, do not set Content-Type
  const isFormData = options.body instanceof FormData;

  const headers = {
    ...(isFormData ? {} : { "Content-Type": "application/json" }),
    ...(options.headers || {}),
  };

  if (token) headers.Authorization = `Bearer ${token}`;

  const config = {
    ...options,
    headers,
  };

  const response = await fetch(`${BASE_URL}${endpoint}`, config);

  // handle no-content
  if (response.status === 204) return null;

  let data = null;
  try {
    data = await response.json();
  } catch (err) {
    data = null;
  }

  if (!response.ok) {
    const message = (data && (data.message || data.error)) || response.statusText || "Something went wrong";
    throw new Error(message);
  }

  return data;
};

export const uploadFile = async (endpoint, formData, method = "POST") => {
  const token = localStorage.getItem("token");

  const headers = {};
  if (token) headers.Authorization = `Bearer ${token}`;

  const response = await fetch(`${BASE_URL}${endpoint}`, {
    method,
    headers,
    body: formData,
  });

  if (response.status === 204) return null;

  let data = null;
  try {
    data = await response.json();
  } catch (err) {
    data = null;
  }

  if (!response.ok) {
    throw new Error((data && (data.message || data.error)) || "Upload failed");
  }

  return data;
};
