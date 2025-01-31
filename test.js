import { browser } from "k6/experimental/browser";

export const options = {
  scenarios: {
    browser: {
      executor: "constant-vus",
      exec: "browserTest",
      vus: 1,
      duration: "60s",
      options: {
        browser: {
          type: "chromium",
        },
      },
    },
  },
};

export async function browserTest() {
  const page = browser.newPage();

  try {
    await page.goto("https://tesena.com");

    const bttnContactUs = page.locator("div[class *= 'menu__secondary'] ul li");
    const bttnGDPRAllowNecessary = page.locator(
      "button[class *= 'decline-all']",
    );

    await bttnGDPRAllowNecessary.click();

    const navPromise = page.waitForNavigation();
    await bttnContactUs.click();
    await navPromise;

    page.waitForLoadState("domcontentloaded");
  } finally {
    page.close();
  }
}
