import { act, renderHook } from "@testing-library/react";
import useCounter from "../components/hooks/useCounter";

describe("Testing useCounter hook", () => {
  it("rendering use counter hook", () => {
    const { result } = renderHook(useCounter, {
      initialProps: { initialState: 0 },
    });
    expect(result.current.counter).toBe(0);
  });
  it("rendering the useCounter hook and increment the counter", () => {
    const { result } = renderHook(useCounter, {
      initialProps: { initialState: 0 },
    });
    act(() => result.current.increment());
    act(() => result.current.increment());
    expect(result.current.counter).toBe(2);
  });
  it("rendering the useCounter hook and decrement the counter", () => {
    const { result } = renderHook(useCounter, {
      initialProps: { initialState: 0 },
    });
    act(() => result.current.decrement());
    act(() => result.current.decrement());
    expect(result.current.counter).toBe(-2);
  });
});
