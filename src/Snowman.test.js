import { render, fireEvent } from "@testing-library/react";
import Snowman from './Snowman.js';
import img0 from "./0.png";
import img1 from "./1.png";
import img2 from "./2.png";
import img3 from "./3.png";
import img4 from "./4.png";
import img5 from "./5.png";
import img6 from "./6.png";


it("losing functionality is working", function () {
  const { container } = render(
      <Snowman
          images={[img0, img1, img2, img3, img4, img5, img6]}
          words="testword"
          maxWrong={6}
      />
      );

  // simulate losing
  const bKey = container.querySelector('[value="b"]');
  fireEvent.click(bKey);

  const dKey = container.querySelector('[value="d"]');
  fireEvent.click(dKey);

  const fKey = container.querySelector('[value="f"]');
  fireEvent.click(fKey);

  const gKey = container.querySelector('[value="g"]');
  fireEvent.click(gKey);

  const hKey = container.querySelector('[value="h"]');
  fireEvent.click(hKey);

  const iKey = container.querySelector('[value="i"]');
  fireEvent.click(iKey);

  // snapshot test when losing
  expect(container).toMatchSnapshot();

  // no images should appear after losing
  const jKey = container.querySelector('[value="j"]');
  fireEvent.click(jKey);

  expect(container.querySelector('img[alt="7"]')).not.toBeInTheDocument();

})