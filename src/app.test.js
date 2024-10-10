import { expect, test, describe, it } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App", () => {
  it("renders correctly", async () => {
    // render(<App />);

    // // Get the email input and submit button
    // const emailInput = screen.getByTestId("emailInput");
    // const submitButton = screen.getByTestId("submitButton");

    // // Type a valid email into the input
    // await userEvent.type(emailInput, "sigmaschool@gmail.com");

    // // Wait for the button state to update (in case it relies on form validation)
    // await waitFor(() => {
    //   expect(submitButton.disabled).toBe(false);
    // });

    expect(1).toBe(2);
  });
});
