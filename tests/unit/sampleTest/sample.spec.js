jest.mock("isomorphic-unfetch");

import { render, screen } from "@testing-library/react";
import * as React from "react";
import GravityForm from "../../../src";

import { Response } from "node-fetch";

// use api mocks
import GFGetRequest from "./__mocks__/get.json";

describe("test if a simple newsletter signup works", () => {

  beforeEach(() => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(new Response(JSON.stringify(GFGetRequest)))
    })
  });

  it("should render the form", async () => {
    // fetch.mockReturnValue(
      // Promise.resolve(new Response(JSON.stringify(GFGetRequest)))
    // );

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

  afterEach(() => {
    jest.restoreAllMocks();
  });
});
