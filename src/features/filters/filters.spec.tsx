import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { withNuqsTestingAdapter } from "nuqs/adapters/testing";
import { afterEach, describe, expect, test, vi } from "vitest";
import { Filters } from "@/features/filters/filters";

afterEach(() => cleanup());

describe("Filters", () => {
  test("renders filter buttons", () => {
    render(<Filters />, {
      wrapper: withNuqsTestingAdapter(),
    });
    const priceButton = screen.getByRole("button", { name: /sort by price/i });
    const starButton = screen.getByRole("button", {
      name: /sort by star rating/i,
    });
    const nameButton = screen.getByRole("button", {
      name: /sort alphabetically/i,
    });

    expect(priceButton).not.toBeNull();
    expect(starButton).not.toBeNull();
    expect(nameButton).not.toBeNull();
  });

  test("updates URL parameters on filter change", async () => {
    const onUrlUpdate = vi.fn();
    const user = userEvent.setup();

    render(<Filters />, {
      wrapper: withNuqsTestingAdapter({
        searchParams: "?sort=price&direction=asc",
        onUrlUpdate,
      }),
    });

    const starButton = screen.getByRole("button", {
      name: /sort by star rating/i,
    });

    await user.click(starButton);

    expect(onUrlUpdate).toHaveBeenCalledOnce();
    const event = onUrlUpdate.mock.calls[0]![0]!;
    expect(event.queryString).toBe("?sort=star&direction=asc");
    expect(event.searchParams.get("sort")).toBe("star");
  });

  test("handles incorrect initial URL parameters gracefully", async () => {
    const onUrlUpdate = vi.fn();

    render(<Filters />, {
      wrapper: withNuqsTestingAdapter({
        searchParams: "?sort=invalid&direction=upwards",
      }),
    });

    expect(onUrlUpdate).not.toHaveBeenCalled();

    // price button should be the default selected
    const priceButton = screen.getByRole("button", { name: /sort by price/i });
    expect(priceButton.classList.contains("active")).toBe(true);
  });
});
