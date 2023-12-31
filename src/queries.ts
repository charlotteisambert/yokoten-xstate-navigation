let hasToPassStep2 = true;

export const getHasToPassStep2 = (): Promise<boolean> =>
  new Promise((resolve) => {
    setTimeout(() => {
      return resolve(hasToPassStep2);
    }, 500);
  });

export const postPassedStep2 = () => {
  hasToPassStep2 = false;
  return new Promise((resolve) => {
    resolve(false);
  });
};

let hasToPassStep3 = true;

export const getHasToPassStep3 = (): Promise<boolean> =>
  new Promise((resolve) => {
    setTimeout(() => {
      return resolve(hasToPassStep3);
    }, 500);
  });

export const postPassedStep3 = () => {
  hasToPassStep3 = false;
  return new Promise((resolve) => {
    resolve(false);
  });
};
