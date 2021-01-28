import { render, screen } from "@testing-library/react";
import Filter from "../components/Filter";
import user from "@testing-library/user-event";

test("pass filter string to children", () => {
  const testElementId = "test-element";
  const string = "Filter String";
  const TestChild = (props) => {
    const { filterString } = props;
    return <span data-testid={testElementId}>{filterString}</span>;
  };
  render(
    <Filter>
      <TestChild />
    </Filter>
  );
  const testElement = screen.getByTestId(testElementId);
  const input = screen.getByTestId("filter-input");
  expect(testElement.textContent).toBe("");
  user.type(input, string);
  expect(testElement.textContent).toBe(string);
});
