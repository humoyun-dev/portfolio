export async function register() {
  if (typeof window === "undefined") {
    try {
      Object.defineProperty(globalThis, "localStorage", {
        value: undefined,
        configurable: true,
        writable: true,
      });
      Object.defineProperty(globalThis, "sessionStorage", {
        value: undefined,
        configurable: true,
        writable: true,
      });
    } catch {
      // Ignore if redefining is not allowed in this runtime.
    }
  }
}
