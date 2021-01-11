const API_ROOT = "http://localhost:8000/api/v1/";

export const APIUrls = {
  login: () => `${API_ROOT}/users/login`,
  signup: () => `${API_ROOT}/users/register`,
  create: () => `${API_ROOT}/assignments/create`,
  getAssignment: () => `${API_ROOT}/assignments/getAssignment`,
  submitAssignment: () => `${API_ROOT}/assignments/submitAssignment`,
  evaluateAssignment: () => `${API_ROOT}/assignments/evaluateAssignment`,
};
