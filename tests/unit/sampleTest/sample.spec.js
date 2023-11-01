import {
  render,
  screen,
} from "@testing-library/react";
import * as React from "react";
import GravityForm from "../../../src";

// use api mocks
import GFGetRequest from "./__mocks__/get.json";
import { act } from "react-test-renderer";

describe("test if a simple newsletter signup works", () => {
  it("should render the form", async () => {

    // create an mock for fetch which returns a simple form 
    fetch.mockReturnValue(
      Promise.resolve({
        json: () => GFGetRequest
      })
    );

    const component = await act(
      async () =>
        await render(
          <GravityForm
            backendUrl={
              "https://backend.glamrock.dev.gohike.nl/wp/wp-json/glamrock/v1/gf/forms"
            }
            formID={"1"}
            title={"form titel"}
          />
        )
    );

    // for some reason this doesnt work
    // const component = await render(
    //   <GravityForm
    //     backendUrl={
    //       "https://backend.glamrock.dev.gohike.nl/wp/wp-json/glamrock/v1/gf/forms"
    //     }
    //     formID={"1"}
    //     title={"form titel"}
    //   />
    // );


    // ACT 
    await screen.getByRole('heading', {
      name: /test form mailchimp/i
    })

    // check if it matched the snapshot
    expect(component).toMatchSnapshot();
  });
});
