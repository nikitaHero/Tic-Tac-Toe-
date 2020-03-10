import React from "react";
import App from "./App";
import Board from "scenes/Game/Board";

import { configure, render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

//Testing Full game

describe("App", () => {
  const snapshoot = (tp, cp) => {
    const wrapper = render(<App tp={tp} cp={cp} />);
    it(`Total = ${tp}, Current = ${cp}`, () => {
      expect(wrapper).toMatchSnapshot();
    });
  };

  snapshoot(0, 0);
  snapshoot(1, -1);
  snapshoot(1, 1);
  snapshoot(2, 2);
  snapshoot(3, 1);

  for (let cp = 1; cp <= 10; cp++) {
    snapshoot(10, cp);
  }
});

//Testing Board

describe("Board", () => {
  const snapshoot = (tp, cp) => {
    const wrapper = render(<Board tp={tp} cp={cp} />);
    it(`Total = ${tp}, Current = ${cp}`, () => {
      expect(wrapper).toMatchSnapshot();
    });
  };

  snapshoot(0, 0);
  snapshoot(1, -1);
  snapshoot(1, 1);
  snapshoot(2, 2);
  snapshoot(3, 1);

  for (let cp = 1; cp <= 10; cp++) {
    snapshoot(10, cp);
  }
});
