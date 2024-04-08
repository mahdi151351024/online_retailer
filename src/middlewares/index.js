import { apiFailed } from "../utilities/apiResponse";

export const handleValidation = (validate) => (req, res, next) => {
  const result = validate(req.body);
  const isValid = result.error == null;
  if (isValid) {
    return next();
  }

  const { details } = result.error;
  const messages = details.map((e) => e.message.replace(/"/g, ""));
  const msg = messages[0];
  return res.json(apiFailed(msg));
};
