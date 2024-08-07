export function executeWithDelay(func) {
  setTimeout(() => {
    func();
  }, 100);
}