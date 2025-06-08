export default function waitForTimeout(second = 30) {
  return new Promise((resolve) => setTimeout(resolve, second * 1000));
}
