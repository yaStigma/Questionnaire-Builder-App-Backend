export const ctrlWrapper = (controler) => {
  return async (req, res, next) => {
    try {
      await controler(req, res, next);
    } catch (err) {
      next(err);
    }
  };
};
