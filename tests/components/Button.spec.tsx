import { render } from "@testing-library/react";

import { Button } from "@/components/Button";

describe("AddWord component", () => {
  it("should render the component onto the screen", () => {
    render(<Button />);
    expect(true).toBeTruthy();
  });
});
