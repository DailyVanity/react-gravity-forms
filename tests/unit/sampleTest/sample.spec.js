jest.mock("isomorphic-unfetch");
// jest.mock('node-fetch');

import { render, screen } from "@testing-library/react";
import * as React from "react";
import GravityForm from "../../../src";

import { Response } from "node-fetch";

// use api mocks
import GFGetRequest from "./__mocks__/get.json";

describe("test if a simple newsletter signup works", () => {
  it("should render the form", async () => {
    fetch.mockReturnValue(
      Promise.resolve({ json: () => {JSON.stringify(GFGetRequest)} })
    );
    // dit werkt
    // console.log(await fetch("asd").then(res => res.json()).then(response => response))

    const component = await render(
      <GravityForm
        backendUrl={
          "https://backend.glamrock.dev.gohike.nl/wp/wp-json/glamrock/v1/gf/forms"
        }
        formID={"1"}
        title={"titel"}
      />
    );
    expect(component).toMatchSnapshot();
  });
});
