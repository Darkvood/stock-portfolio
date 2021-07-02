import { Portfolio } from "~/app/portfolio";

describe("Portfolio", () => {
  it("should be defined", () => {
    expect(new Portfolio()).toBeTruthy();
  });
});
