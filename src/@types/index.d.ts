/* eslint-disable @typescript-eslint/naming-convention */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare module '*.png';
declare global {
  interface Window {
    dataLayer: Record<string, any>[];
  }
}
