export const getUserProfile = () => {
  try {
    const data = localStorage.getItem("userProfile");
    return data ? JSON.parse(data) : null;
  } catch {
    return null;
  }
};

export const setUserProfile = (profile) => {
  try {
    localStorage.setItem("userProfile", JSON.stringify(profile));
  } catch {
    console.error("Failed to save user profile");
  }
};


export const getAppointments = () => {
  try {
    const data = localStorage.getItem("appointments");
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

export const setAppointments = (appointments) => {
  try {
    localStorage.setItem("appointments", JSON.stringify(appointments));
  } catch {
    console.error("Failed to save appointments");
  }
};
