import { render } from "@testing-library/react";
import Inicial from "./Inicial";

test('Há o input no documento', () => {
    render(<Inicial />);
  });