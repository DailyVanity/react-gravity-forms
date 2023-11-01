import { render, screen } from "@testing-library/react";
import * as React from "react";
import GravityForm from "../../../src";
import fetch from "isomorphic-unfetch";

// use api mocks
import GFGetRequest from "./__mocks__/get.json";

describe("test if a simple newsletter signup works", () => {

  it("should render the form", () => {
    // fetch.mockReturnValue(Promise.resolve(GFGetRequest));

    const component = render(
      <GravityForm
        backendUrl={
          "https://backend.glamrock.dev.gohike.nl/wp/wp-json/glamrock/v1/gf/forms"
        }
        formID={1}
        title={"titel"}
      />
    );

    expect(component).toMatchSnapshot();
    // expect(screen.getByText("titel"));
  });
});
